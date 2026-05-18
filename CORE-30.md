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
| 9 | `/areas/biloxi` | Harrison | ⚪ TODO | Largest market, casino corridor, Keesler AFB |
| 10 | `/areas/gulfport` | Harrison | ⚪ TODO | Coast's commercial core, NCBC Gulfport |
| 11 | `/areas/ocean-springs` | Jackson | ⚪ TODO | Rob's hometown — anchor page, strongest local voice |
| 12 | `/areas/diberville` | Harrison | ⚪ TODO | Newer subdivisions, family-driven market |
| 13 | `/areas/gautier` | Jackson | ⚪ TODO | Singing River, retirees, river/marsh frontage |
| 14 | `/areas/long-beach` | Harrison | ⚪ TODO | Walkable downtown, "Friendly City" |
| 15 | `/areas/pascagoula` | Jackson | ⚪ TODO | Ingalls Shipbuilding, working-class core |
| 16 | `/areas/pass-christian` | Harrison | ⚪ TODO | High-end coastal, Old Town historic |
| 17 | `/areas/moss-point` | Jackson | ⚪ TODO | Affordable entry, redevelopment story |
| 18 | `/areas/bay-st-louis` | Hancock | ⚪ TODO | Old Town arts/restaurant scene, historic district |
| 19 | `/areas/diamondhead` | Hancock | ⚪ TODO | Master-planned, golf-and-marina, retiree-heavy |
| 20 | `/areas/harrison-county` | — | ⚪ TODO | County hub for #9, 10, 12, 14, 16 |
| 21 | `/areas/jackson-county` | — | ⚪ TODO | County hub for #11, 13, 15, 17 |
| 22 | `/areas/hancock-county` | — | ⚪ TODO | County hub for #18, 19 + Waveland, Kiln, Pearlington |

---

## Topic pages (10) — Wave 1, ship first

Pure informational, lowest compliance risk, highest local-SEO value. These ship now.

| # | Slug | Status | Notes |
|---|------|--------|-------|
| 23 | `/guides/coastal-ms-flood-zones` | 🟡 DRAFT | v1 up on `feat/core-30-content` — flood zones, Risk Rating 2.0, Wind Pool, ECs, Coast context |
| 24 | `/guides/ms-coast-hurricane-insurance` | ⚪ TODO | Wind Pool (MWUA) deep dive, named-storm deductibles, FORTIFIED discounts |
| 25 | `/guides/property-taxes-ms-coast` | ⚪ TODO | County millage, homestead, ad valorem math |
| 26 | `/guides/ms-homestead-exemption` | ⚪ TODO | How to file, deadlines, savings — high-search local intent |
| 27 | `/guides/coast-school-districts` | ⚪ TODO | Ocean Springs, Long Beach, Pass — district-level |
| 28 | `/guides/ms-property-condition-disclosure` | ⚪ TODO | PCDS — what sellers must disclose |
| 29 | `/guides/new-vs-existing-coast` | ⚪ TODO | Slab vs. raised, post-Katrina build standards, insurance impact |
| 30 | `/guides/buying-a-home-in-ms` | ⚪ TODO | Process overview — pre-qual → close, 30-60-90 timeline |
| 31 | `/guides/selling-a-home-on-the-coast` | ⚪ TODO | Process overview — listing prep → close |
| 32 | `/market/monthly-coast-report` | ⚪ TODO | PMMS-anchored monthly drop — repurpose Seawall content |

---

## Open work tracker (cross-cutting)

- [ ] Homepage voice rewrite — bundled on this branch, drops alongside topic-page wave
- [ ] Compliance pass on existing Buy/Sell cards (`index.astro`) — soften "I'll walk you through…" / "I'll help you price it right…" to "When licensed, I'll…" or pull cards entirely
- [ ] Add `/guides/` index landing page (a TOC of topic pages — improves crawlability + UX)
- [ ] Add `/areas/` index landing page (same — Coast overview + city grid)
- [ ] Real Broker affiliated-agent marketing rules — pull the agent handbook, document constraints in `tasks/`
- [ ] Cross-link strategy: every topic page → relevant area pages and vice versa; tie into 13 Jackson County guides
- [ ] When license drops: remove `noindex, nofollow` (globally in `SiteLayout.astro`), submit sitemap, set up GSC

---

## Last updated

2026-05-18 — Brenda · status: Wave 1 page #23 (flood zones) in DRAFT on `feat/core-30-content`.
