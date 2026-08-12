// POST /api/lead — website lead capture → Lofty CRM
//
// Runs as a Vercel serverless function. Everything else on the site stays static.
//
// Required env var (Vercel → robrecio → Settings → Environment Variables):
//   LOFTY_API_KEY   — Lofty → Settings → Integrations → API. Generate it from Rob's
//                     own account so new leads default to him as the owner.
// Optional:
//   LOFTY_LEAD_SOURCE      — defaults to "robrecio.com"
//   LOFTY_ASSIGNED_USER_ID — numeric Lofty user id to force-assign leads
//
// 10DLC note: the SMS consent checkbox state is captured verbatim, with a timestamp
// and the exact disclosure text the visitor saw, and written into the Lofty lead note.
// If a carrier ever audits the opt-in, that note is the proof. Do not strip it.

import type { APIRoute } from "astro";

export const prerender = false;

const LOFTY_URL = "https://api.lofty.com/v1.0/leads";

// The exact wording rendered next to the SMS checkbox in ContactForm.astro.
// Keep these two strings in sync — this is what gets stored as consent evidence.
const SMS_DISCLOSURE =
  "By checking this box, I agree to receive text messages from Robert Recio regarding " +
  "real estate services, property inquiries, scheduling, and related communications. " +
  "Message frequency varies. Message and data rates may apply. Reply HELP for help or " +
  "STOP to opt out.";
const TERMS_DISCLOSURE =
  "By checking this box, I agree to the Terms of Service and Privacy Policy of this website.";

const str = (v: unknown, max = 300) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const isChecked = (v: unknown) =>
  v === true || v === "yes" || v === "on" || v === "true";

const json = (body: unknown, status: number) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

async function readBody(request: Request): Promise<Record<string, unknown>> {
  const type = request.headers.get("content-type") || "";
  if (type.includes("application/json")) {
    return (await request.json().catch(() => ({}))) as Record<string, unknown>;
  }
  const form = await request.formData().catch(() => null);
  return form ? (Object.fromEntries(form.entries()) as Record<string, unknown>) : {};
}

export const POST: APIRoute = async ({ request, clientAddress }) => {
  const apiKey = import.meta.env.LOFTY_API_KEY ?? process.env.LOFTY_API_KEY;
  if (!apiKey) return json({ ok: false, error: "Lead routing is not configured." }, 500);

  const data = await readBody(request);

  // Honeypot — bots fill hidden fields, humans don't. Return 200 so they don't retry.
  //
  // ALWAYS log when this trips. A silent discard here once ate a real submission
  // (Chrome autofilled the hidden field back when it was named `company`), and the
  // 200 response made it look like everything worked. If leads ever go missing again,
  // grep the runtime logs for "honeypot" before suspecting Lofty.
  if (str(data.refCode2)) {
    console.warn(
      `[lead] honeypot tripped — discarded submission from ` +
        `${str(data.firstName)} <${str(data.email)}>. If this is a real person, the ` +
        `honeypot field is being autofilled and needs renaming.`,
    );
    return json({ ok: true }, 200);
  }

  const firstName = str(data.firstName, 30);
  const lastName = str(data.lastName, 30);
  const email = str(data.email, 120);
  const phone = str(data.phone, 20);
  const message = str(data.message, 1500);

  // Entry log, so "did the submission even reach the server?" is always answerable
  // from the runtime logs without redeploying to add instrumentation.
  console.log(
    `[lead] received: first=${firstName ? "y" : "n"} email=${email ? "y" : "n"} ` +
      `phone=${phone ? "y" : "n"} smsConsent=${isChecked(data.smsConsent) ? "y" : "n"}`,
  );

  if (!firstName || !email) {
    return json({ ok: false, error: "First name and email are required." }, 400);
  }

  const smsConsent = isChecked(data.smsConsent);
  const termsConsent = isChecked(data.termsConsent);
  const when = new Date().toISOString();

  const consentLog = [
    `--- Consent record (captured ${when}) ---`,
    `Source page: ${request.headers.get("referer") || "https://www.robrecio.com/"}`,
    `IP: ${clientAddress || "unknown"}`,
    `SMS consent: ${smsConsent ? "YES — checkbox checked" : "NO — checkbox left unchecked"}`,
    `Disclosure shown: "${SMS_DISCLOSURE}"`,
    `Terms/Privacy consent: ${termsConsent ? "YES" : "NO"}`,
    `Disclosure shown: "${TERMS_DISCLOSURE}"`,
  ].join("\n");

  const note = [message && `Message: ${message}`, consentLog]
    .filter(Boolean)
    .join("\n\n");

  const base: Record<string, unknown> = {
    firstName,
    source: import.meta.env.LOFTY_LEAD_SOURCE ?? process.env.LOFTY_LEAD_SOURCE ?? "robrecio.com",
  };
  if (lastName) base.lastName = lastName;
  if (email) base.emails = [email];
  // Only pass the phone through when the visitor volunteered one. An empty phone
  // must never be fabricated — the field is optional by design.
  if (phone) base.phones = [phone];
  const assignedId =
    import.meta.env.LOFTY_ASSIGNED_USER_ID ?? process.env.LOFTY_ASSIGNED_USER_ID;
  if (assignedId) base.assignedUserId = Number(assignedId);

  // Attempt 1 includes the consent note and an SMS-opt-in tag. If Lofty rejects
  // either field we retry with the minimal shape so a real lead is never lost —
  // the consent record still lands in the server log below.
  const enriched = {
    ...base,
    note,
    ...(smsConsent ? { tags: ["SMS Opt-In"] } : {}),
  };

  const send = (payload: Record<string, unknown>) =>
    fetch(LOFTY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `token ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

  try {
    let res = await send(enriched);
    if (!res.ok) {
      console.warn(`[lead] Lofty rejected enriched payload (${res.status}); retrying minimal.`);
      res = await send(base);
    }

    // Always log the consent record — this is the audit trail if Lofty drops the note.
    console.log(`[lead] ${firstName} ${lastName} <${email}>\n${consentLog}`);

    if (!res.ok) {
      const detail = await res.text().catch(() => "");
      console.error(`[lead] Lofty error ${res.status}: ${detail}`);
      return json({ ok: false, error: "Could not reach the CRM." }, 502);
    }
    return json({ ok: true }, 200);
  } catch (err) {
    console.error(`[lead] ${String(err)}\n${consentLog}`);
    return json({ ok: false, error: "Could not reach the CRM." }, 502);
  }
};

// Anything other than POST gets a clear answer instead of a confusing 404.
export const GET: APIRoute = () =>
  json({ ok: false, error: "POST only." }, 405);
