# Product Marketing Context

**Document version:** v2
**Last updated:** 2026-11-24

Drafted from okane.no's copy (redesign and Brage page), the product repos and what is known about Okane's customers and partners. Items marked **OPEN** need the founders' answer; nothing marked open should be stated as fact in copy.

## Product Overview
**One-liner:** A Norwegian software studio that builds websites, e-commerce, apps, integrations and AI agents, and runs its own products in production.
**What it does:** Okane builds software for Norwegian businesses and stays on to run it. It has three products of its own: Okane Commerce (e-commerce platform), Digital Mailroom (incoming post from Altinn, EHF and email, sold through Canon as "Altinn Downloader") and Brage (drafts public Altinn filings from a company's documents; pilot).
**Product category:** Two shelves. Buyers of the studio search for "byrå"/"konsulenthus" for nettside, nettbutikk, app or integrasjon. Buyers of the products search for the problem: Altinn-integrasjon, digitalt postmottak, nettbutikk med Vipps, aksjonærregisteroppgave.
**Product type:** Service (fixed-price projects plus ongoing operations) and B2B software (products).
**Business model:** Projects quoted at a fixed price before work starts; most clients continue on a running operations agreement. Products are subscriptions, Digital Mailroom resold by Canon Norway. **OPEN:** price ranges, product pricing.

## Target Audience
**Target companies:** Norwegian SMBs and mid-sized companies without a large in-house dev team: retailers and brands selling online (Peakpower.no, Wild Games, Glasstudio), associations (Spact), and companies with heavy Altinn and document traffic: debt collection, accounting, finance (Kredinor via Canon).
**Decision-makers:** Owner or general manager in smaller firms; CFO/head of operations or IT lead in larger ones; partners (Canon) who resell.
**Primary use case:** Get a piece of software built properly and kept running, without hiring a team.
**Jobs to be done:**
- Replace a manual routine (double entry, downloading from Altinn, filling in forms) with something that runs by itself
- Get a site or shop that sells and that we can update ourselves
- Have someone accountable who knows the system after launch
**Use cases:**
- Nettbutikk with Vipps, Klarna, shipping and accounting
- Connecting ERP/accounting (Tripletex, Fiken, PowerOffice, Visma) to shop or other systems
- Altinn post collected and routed automatically
- Recurring public filings drafted from documents (Brage)
- Taking over an existing system someone else built

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Owner / daglig leder | Cost, predictability, not being stuck | Burned by agencies that overran or disappeared | Fixed price first, we stay on, you own the code |
| CFO / økonomisjef | Fewer manual steps, fewer errors, deadlines met | Altinn post and filings handled by hand, late | Routines that run themselves and are traceable |
| IT lead | Maintainability, security, no lock-in | Fragile integrations nobody understands | Boring, proven tech; documented; full access |
| Partner (Canon) | A product they can sell and support | Needs a reliable supplier behind their brand | A product we run in production every day |

## Problems & Pain Points
**Core problem:** Work that should be automatic is done by hand, or software that was delivered is not looked after.
**Why alternatives fall short:**
- Agencies deliver and leave; operations is someone else's problem
- Freelancers are hard to rely on long-term
- Off-the-shelf platforms need plugins for Norwegian payment, shipping and accounting
- In-house teams are expensive for a company this size
**What it costs them:** Staff hours on double entry and Altinn; missed deadlines and fees; lost sales from a slow site. **OPEN:** any measured numbers.
**Emotional tension:** Fear of an overrun, of lock-in, of a system nobody can maintain; anxiety about public deadlines.

## Competitive Landscape
**Direct:** Norwegian web and dev agencies (byråer) — deliver projects, rarely run them.
**Secondary:** Platforms (Shopify, WooCommerce) plus plugins; Altinn integration specialists — the platform covers part of the job and leaves the integrations.
**Indirect:** Hiring developers in-house; doing it by hand.
**Partner, not competitor:** Atlas Document Intelligence (Docned, resold by Canon). Brage and Digital Mailroom must not be positioned as inbound document capture (OCR, invoice processing, extraction, verification queues); Brage is outbound filings and Q&A.

## Differentiation
**Key differentiators:**
- Runs its own products in production, so operations and monitoring are already in place
- Fixed price before work starts
- Client owns code, data and infrastructure
- Altinn is the specialty (Digital Mailroom, Brage, integrations)
**How we do it differently:** Something running in week one; ship early and often; stay on after launch.
**Why that's better:** Fewer surprises, software that keeps working, no dependency on one vendor.
**Why customers choose us:** **OPEN** — ask two or three clients.

## Objections
| Objection | Response |
|-----------|----------|
| "You're small; what if you disappear?" | You own the code, data and infrastructure, built on proven open source others can maintain |
| "Agencies always overrun" | Concrete price before we start; we flag changes before they happen |
| "Why not just Shopify?" | Often right; we build on Shopify too (Wild Games). Custom when Norwegian payment, shipping and accounting need to fit |
| "Can AI be trusted with our filings?" (Brage) | It drafts with a source per field; a person approves; nothing is sent without approval |

**Anti-persona:** Companies wanting the cheapest one-off site with no ongoing relationship; enterprises needing large teams and procurement frameworks; anyone looking for inbound document capture (refer to Atlas via Canon).

## Switching Dynamics
**Push:** Current agency gone quiet; system nobody understands; manual Altinn routine that just failed a deadline.
**Pull:** Fixed price, someone who stays, Altinn experience.
**Habit:** "It works well enough"; existing agency relationship.
**Anxiety:** Migration risk, cost, picking another vendor who leaves.

## Customer Language
**How they describe the problem:** **OPEN** — no recorded customer quotes yet. Candidates to verify: "dobbeltføring", "vi laster ned fra Altinn for hånd", "byrået forsvant".
**How they describe us:** **OPEN**
**Words to use:** drift, fast pris, du eier koden, kjørende kode, Altinn, rutiner som går av seg selv, sporbar
**Words to avoid:** "plattform" for the studio, "revolusjonerende", "sømløs", "AI-drevet" as a selling point, "løsninger" as filler; for Brage: OCR, fakturabehandling, dokumentfangst (Atlas territory)
**Glossary:**
| Term | Meaning |
|------|---------|
| Drift | Running and maintaining software in production |
| Altinn | Norway's portal for public reporting and correspondence |
| Systembruker | Altinn system user a company gives a vendor to file on its behalf |
| Altinn Downloader | Canon's name for Digital Mailroom |

## Brand Voice
| Attribute | Means | Doesn't mean | Example line |
|-----------|-------|--------------|--------------|
| Direct | Short answers, the fact first | Curt or cold | "Du. Alt vi bygger for deg leveres med full tilgang til kildekode, data og infrastruktur." |
| Practical | Talks about running things, not visions | Boring | "Lansering er en tirsdag, ikke en seremoni." |
| Honest | Says what it costs and what it can't do | Self-deprecating | "Moderne, men kjedelige med vilje." |
| Norwegian, plain | Bokmål a business owner uses | Officialese | "Slutt på dobbeltføring og manuelle rutiner." |

**Tone by context:**
- Support: calm, specific, what happens next
- Launch: what it does for the customer, one concrete example
- Errors: what went wrong and how to fix it, no apology
- Sales: price and timeline early
- Social: show the work (screenshots, what shipped)
**Terms we own:** "Vi bygger som om vi skal drifte det"
**Never use (and why):** Arrows and "→" in buttons (template tell, removed in the redesign); "Neste" teaser labels (removed); unverified claims about production use

## Proof Points
**Metrics:** **OPEN** — none published. Candidates: years running Digital Mailroom, documents handled, uptime.
**Customers:** Wild Games (Shopify store), Spact (membership platform), EventLink Unity (tool), Peakpower.no, Glasstudio.no; Kredinor uses Digital Mailroom via Canon. **OPEN:** which may be named publicly.
**Testimonials:** **OPEN** — none.
**Value themes:**
| Theme | Proof |
|-------|-------|
| We run what we build | Commerce and Digital Mailroom in production |
| Altinn specialty | Digital Mailroom, Brage, Altinn integrations |
| No lock-in | Code and infrastructure handed over (FAQ) |

## Goals
**Business goal:** More project leads from Norwegian SMBs; product leads for Brage and Digital Mailroom.
**Conversion action:** An email to hei@okane.no (mailto links; no form or booking).
**Current metrics:** Umami analytics is installed. **OPEN:** traffic and lead numbers.

## Learnings
*Decisions and tested lessons. Newest first. Keep it to about 20 active entries.*
| Date | Learning | Evidence | Applies to | Status |
|------|----------|----------|------------|--------|
| 2026-11-24 | Brage copy may claim what Brage is being built to do (all 34 forms filed, per-person access), as long as the page says it's a pilot | Founder decision: Brage is built out fast and the page must win pilot customers | Brage page, Brage ads and outreach | active |
| 2026-11-24 | Keep Brage on outbound filings and Q&A; never pitch inbound capture | Canon resells Atlas and would drop Brage on overlap | Brage, Digital Mailroom copy | active |
| 2026-11-17 | No status labels or badges in the front-page hero | Removed in website PRs #47 and #48 | Front page | active |

## Changelog
*Newest first. One line per revision: what changed and why.*
- v2 (2026-11-24) — Learnings: Brage copy may make forward-looking claims during the pilot, by founder decision.
- v1 (2026-11-24) — Initial context, drafted from the site, product repos and partner notes; customer language, proof and pricing left open.
