# Core 30 — robrecio.com content map

**Framework:** MapPulse Core 30 (from Caleb Ulku's AI SEO Mastery PRO). 30 strategic pages = service + location + topic pages. Builds local SEO authority through topical coverage.

**Scope on this site:** 32 pages (8 service / 14 location / 10 topic). "Core 30" stays as the framework name; the count is directional.

**Compliance posture (pre-license):** Site is `noindex, nofollow` globally until Rob's MS license is in hand (~mid-June 2026). All pages run "Talk to Rob" as the universal CTA — no transactional language. Footer disclosure on every page.

**Source material:**
- Shore knowledge library — `~/cowork-projects/Shore/Shore/knowledge/` (MREC rules, MS state law essentials, Gulf Coast market snapshot, fair-housing overlay)
- County Directories — `~/cowork-projects/County Directories (Scout)/guides/jackson-county/` (13 published guides — cross-link freely)
- The Seawall archives — `~/cowork-projects/The Seawall (Anthony)/issues/` (market content for monthly report)

---

## Status legend

- 🟢 LIVE — published on main
- 🟡 DRAFT — written, on `feat/core-30-content`, awaiting Rob's review
- ⚪ TODO — scoped, not started
- 🔒 HOLD — held until license-adjacent (services wave)

---

## Service pages (8) — Wave 3, held until license-adjacent

| # | Slug | Status | Notes |
|---|------|--------|-------|
| 1 | `/services/buying` | 🔒 HOLD | "When licensed, I'll…" framing until license drops |
| 2 | `/services/selling` | 🔒 HOLD | Same softening |
| 3 | `/services/first-time-buyers` | 🔒 HOLD | Ties to MS down-payment programs |
| 4 | `/services/relocation` | 🔒 HOLD | Coast-bound from Mobile / NOLA / military — Keesler driver |
| 5 | `/services/investors-rental` | 🔒 HOLD | LTR + STR (Airbnb/VRBO is big on the Coast) |
| 6 | `/services/waterfront-coastal` | 🔒 HOLD | Premium niche, ties to flood-zone guide |
| 7 | `/services/new-construction` | 🔒 HOLD | Slab vs. pier, builder relationships — Rob's natural lane |
| 8 | `/services/listings` | 🔒 HOLD | Active inventory page — waits for IDX (Phase 2) |

---

## Location pages (14) — Wave 2

Framed as informational area guides — neighborhood character, schools, flood profile, market feel. Not "homes for sale in X."

| # | Slug | County | Status | Notes |
|---|------|--------|--------|-------|
| 9 | `/areas/biloxi` | Harrison | 🟢 LIVE | Casino corridor, Keesler AFB, peninsula/Back Bay/North Biloxi submarkets. Shipped 2026-05-20. |
| 10 | `/areas/gulfport` | Harrison | 🟢 LIVE | Largest Coast city, Seabees/Port/Memorial; South vs. north-of-I-10 split + school-zone nuance. Shipped 2026-05-20. |
| 11 | `/areas/ocean-springs` | Jackson | 🟢 LIVE | Rob's hometown — anchor page, strongest local voice. Shipped 2026-05-20. |
| 12 | `/areas/diberville` | Harrison | 🟢 LIVE | Newer construction north of Back Bay, higher ground/lower flood as the selling point. Shipped 2026-05-20. |
| 13 | `/areas/gautier` | Jackson | ⚪ TODO | Singing River, retirees, river/marsh frontage |
| 14 | `/areas/long-beach` | Harrison | ⚪ TODO | Walkable downtown, "Friendly City" |
| 15 | `/areas/pascagoula` | Jackson | ⚪ TODO | Ingalls Shipbuilding, working-class core |
| 16 | `/areas/pass-christian` | Harrison | ⚪ TODO | High-end coastal, Old Town historic |
| 17 | `/areas/moss-point` | Jackson | ⚪ TODO | Affordable entry, redevelopment story |
| 18 | `/areas/bay-st-louis` | Hancock | 🟢 LIVE | Old Town arts scene + historic district; Katrina rebuild story, NOLA-weekender pull. Shipped 2026-05-20. |
| 19 | `/areas/diamondhead` | Hancock | ⚪ TODO | Master-planned, golf-and-marina, retiree-heavy |
| 20 | `/areas/harrison-county` | — | ⚪ TODO | County hub for #9, 10, 12, 14, 16 |
| 21 | `/areas/jackson-county` | — | ⚪ TODO | County hub for #11, 13, 15, 17 |
| 22 | `/areas/hancock-county` | — | ⚪ TODO | County hub for #18, 19 + Waveland, Kiln, Pearlington |

---

## Topic pages (10) — Wave 1, ship first

Pure informational, lowest compliance risk, highest local-SEO value. These ship now.

| # | Slug | Status | Notes |
|---|------|--------|-------|
| 23 | `/guides/coastal-ms-flood-zones` | 🟡 DRAFT v2 | Compliance audit + cost audit applied. MUST/SHOULD fixes in. Cost figures verified to May 2026 primary sources. Pre-licensure banner added under H1, page-level `noindex, nofollow, noarchive, nosnippet`. |
| 24 | `/guides/ms-coast-hurricane-insurance` | ⚪ TODO | Wind Pool (MWUA) deep dive, named-storm deductibles, FORTIFIED discounts |
| 25 | `/guides/property-taxes-ms-coast` | ⚪ TODO | County millage, homestead, ad valorem math |
| 26 | `/guides/ms-homestead-exemption` | 🟡 DRAFT | v1 up — three exemption tiers, April 1 deadline, county tax-assessor contacts (Hancock/Harrison/Jackson) verified May 2026, § 27-33-X cites, penalties. |
| 27 | `/guides/coast-school-districts` | ⚪ TODO | Ocean Springs, Long Beach, Pass — district-level |
| 28 | `/guides/ms-property-condition-disclosure` | ⚪ TODO | PCDS — what sellers must disclose |
| 29 | `/guides/new-vs-existing-coast` | ⚪ TODO | Slab vs. raised, post-Katrina build standards, insurance impact |
| 30 | `/guides/buying-a-home-in-ms` | ⚪ TODO | Process overview — pre-qual → close, 30-60-90 timeline |
| 31 | `/guides/selling-a-home-on-the-coast` | ⚪ TODO | Process overview — listing prep → close |
| 32 | `/market/monthly-coast-report` | ⚪ TODO | PMMS-anchored monthly drop — repurpose Seawall content |

---

## Open work tracker (cross-cutting)

- [x] Compliance pass on existing Buy/Sell cards (`index.astro`) — softened to "Once I'm licensed, I'll…" framing on 2026-05-18.
- [x] Site-wide "Realtor" → "real estate agent" swap pre-license — applied on 2026-05-18 (homepage title, meta description, hero H1, hero lede). Will swap back to "Realtor®" once Rob is on the Gulf Coast Association of REALTORS® board.
- [ ] Homepage voice rewrite — partial (compliance edits done). Open: whether to extend the orange pre-licensure banner to the homepage too. Flagged with Rob 2026-05-18.
- [ ] Add `/guides/` index landing page (a TOC of topic pages — improves crawlability + UX). Becomes more useful as Wave 1 fills out.
- [ ] Add `/areas/` index landing page (same — Coast overview + city grid).
- [ ] Real Broker affiliated-agent marketing rules — Brand Guidelines are agent-portal-only (verified by compliance audit). Recommend Rob get written sign-off from Real's MS Designated Broker on Day 1 of licensure.
- [ ] Cross-link strategy: every topic page → relevant area pages and vice versa; tie into 13 Jackson County guides.
- [ ] When license drops: remove `noindex, nofollow` (globally in `SiteLayout.astro` and per-page overrides), add Real Broker MS Designated Broker name + phone in equal-or-larger typeface (MREC Rule 3.3(B)), add Rob's MS salesperson license number, submit sitemap, set up GSC.

---

## Additional pages (outside Core 30 framework)

| Slug | Status | Notes |
|------|--------|-------|
| `/for-landlords` | 🟡 DRAFT | Service-positioning page for Rob's planned first focus post-license: FRBO + absentee-owner lease listings. Methodology from reverse-selling.com / Mike Mulrenin. Forward-looking framing, pre-licensure banner, illustrative fee structure flagged for Day-1-of-license brokerage finalization. Open: homepage entry-point section linking here. |

---

## Last updated

2026-05-18 — Brenda · status: Wave 1 pages #23 (flood zones, v2), #26 (homestead exemption, v1), plus `/for-landlords` in DRAFT on `feat/core-30-content`. Homepage compliance bundle applied. Awaiting Rob's review.

2026-05-20 — Brenda · **Merged everything to `main` + LIVE** (hero video, Wave 1 topic pages, Ocean Springs). Then shipped **5 of 14 location pages LIVE**: #11 ocean-springs, #9 biloxi, #10 gulfport, #12 diberville, #18 bay-st-louis (built from the Gulf Coast market snapshot, fair-housing-reviewed, noindex, compliance-clean). Homepage city cards now link to the 5 live pages; the other 6 stay non-linked until built. **Remaining location pages (TODO): gautier, long-beach, pascagoula, pass-christian, moss-point, diamondhead + 3 county hubs.** Next: finish remaining city pages, then the tourism-style city guides (Things to Do / Best Restaurants per city, modeled on jacksoncountyms.com/guides — port/adapt the 13 Jackson County guides). Done at Rob's "start building" direction; he confirmed cities = Core 30 location tier.
