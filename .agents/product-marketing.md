# Product Marketing Context

**Document version:** v3
**Last updated:** 2026-11-24

Drafted from okane.no's copy (redesign and Brage page), the product repos and what is known about Okane's customers and partners. Items marked **OPEN** need the founders' answer; nothing marked open should be stated as fact in copy.

## Product Overview
**One-liner:** A Norwegian software studio that builds websites, e-commerce, apps, integrations and AI agents, and runs its own products in production.
**What it does:** Okane builds software for Norwegian businesses and stays on to run it. It has three products of its own: Okane Commerce (e-commerce platform), Digital Mailroom (incoming post from Altinn, EHF and email, sold through Canon as "Altinn Downloader") and Brage (drafts public Altinn filings from a company's documents, and answers questions about them with a source per claim, on a language model the customer can run in its own infrastructure; pilot).
**Product category:** Two shelves. Buyers of the studio search for "byrå"/"konsulenthus" for nettside, nettbutikk, app or integrasjon. Buyers of the products search for the problem: Altinn-integrasjon, digitalt postmottak, nettbutikk med Vipps, aksjonærregisteroppgave, and for Brage's Q&A side: privat språkmodell, KI på egne dokumenter, søk i SharePoint med KI.
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
- Find an answer in our own documents without sending them to an outside AI service (Brage)
**Use cases:**
- Nettbutikk with Vipps, Klarna, shipping and accounting
- Connecting ERP/accounting (Tripletex, Fiken, PowerOffice, Visma) to shop or other systems
- Altinn post collected and routed automatically
- Recurring public filings drafted from documents (Brage)
- Questions and answers over documents a company already has in SharePoint or file shares, each answer citing its document, each person seeing only what they may see (Brage)
- Taking over an existing system someone else built

## Personas
| Persona | Cares about | Challenge | Value we promise |
|---------|-------------|-----------|------------------|
| Owner / daglig leder | Cost, predictability, not being stuck | Burned by agencies that overran or disappeared | Fixed price first, we stay on, you own the code |
| CFO / økonomisjef | Fewer manual steps, fewer errors, deadlines met | Altinn post and filings handled by hand, late | Routines that run themselves and are traceable |
| IT lead | Maintainability, security, no lock-in | Fragile integrations nobody understands | Boring, proven tech; documented; full access |
| Partner (Canon) | A product they can sell and support | Needs a reliable supplier behind their brand | A product we run in production every day |
| IT- or security lead (IT-sjef, sikkerhetsansvarlig, personvernombud) | Where data goes, who sees what, what the supplier can read | Staff paste documents into ChatGPT; a public AI service is a GDPR and confidentiality question nobody has answered | Brage runs on a model in your own infrastructure (Ollama) or an endpoint you choose; search follows Entra ID groups and SharePoint permissions; every answer cites its document |

## Problems & Pain Points
**Core problem:** Work that should be automatic is done by hand, or software that was delivered is not looked after.
**Why alternatives fall short:**
- Agencies deliver and leave; operations is someone else's problem
- Freelancers are hard to rely on long-term
- Off-the-shelf platforms need plugins for Norwegian payment, shipping and accounting
- In-house teams are expensive for a company this size
**What it costs them:** Staff hours on double entry and Altinn; missed deadlines and fees; lost sales from a slow site. **OPEN:** any measured numbers.
**Emotional tension:** Fear of an overrun, of lock-in, of a system nobody can maintain; anxiety about public deadlines. For AI: fear that client documents end up with a US AI provider, and that an AI answer is made up.
**AI-specific problem (Brage Q&A):** The answer is in a protocol or agreement somewhere in SharePoint, but finding it means knowing where to look. Public AI chat would find it, but the documents would leave the company.

## Competitive Landscape
**Direct:** Norwegian web and dev agencies (byråer) — deliver projects, rarely run them.
**Secondary:** Platforms (Shopify, WooCommerce) plus plugins; Altinn integration specialists — the platform covers part of the job and leaves the integrations.
**Indirect:** Hiring developers in-house; doing it by hand.
**AI search and Q&A:** Microsoft 365 Copilot (searches SharePoint, but on Microsoft's cloud and licence per seat), ChatGPT Enterprise/Team with file upload (documents leave for OpenAI), building RAG in-house — each either sends data to a US provider or needs a team to build and run.
**Partner, not competitor:** Atlas Document Intelligence (Docned, resold by Canon). Brage and Digital Mailroom must not be positioned as inbound document capture (OCR, invoice processing, extraction, verification queues); Brage is outbound filings and Q&A.

## Differentiation
**Key differentiators:**
- Runs its own products in production, so operations and monitoring are already in place
- Fixed price before work starts
- Client owns code, data and infrastructure
- Altinn is the specialty (Digital Mailroom, Brage, integrations)
- Brage can run on a private language model: an open model on Ollama on the customer's own hardware or cloud, with local embeddings (nomic-embed-text), so documents and prompts stay in their infrastructure. OpenAI or any OpenAI-compatible endpoint is a configuration choice, not a requirement
- Brage search respects access: documents keep their groups, and a person's search and chat only use documents their Entra ID groups or a direct share allow (SharePoint permissions read through Microsoft Graph when configured)
- Every Brage answer cites the document behind each claim; if the documents don't hold the answer, it says so
- One index serves both Q&A and filing: the same documents the chat answers from fill the Altinn forms
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
| "Sender dere dataene våre til OpenAI?" (Brage) | Not unless you choose it. Brage can run on an open model on Ollama on your own servers or cloud, with embeddings made locally. OpenAI, or an OpenAI-compatible endpoint you pick, is an option you choose. Never claim certifications or residency guarantees we don't have |
| "Hvem ser hva?" (Brage) | Each document keeps its access groups. Search and chat only use documents the person's Entra ID groups or a direct share allow; SharePoint permissions can be read through Graph |
| "Finner KI-en på svar?" (Brage) | It cites the document for each claim, and says so when the documents don't hold the answer. Click the source and check |
| "Is a local model good enough?" (Brage) | Small open models are slower and weaker than the largest cloud models; that's the trade for keeping data in-house. The model is a setting, so you can start private and change. **OPEN:** which model and hardware we recommend for a pilot |

**Anti-persona:** Companies wanting the cheapest one-off site with no ongoing relationship; enterprises needing large teams and procurement frameworks; anyone looking for inbound document capture (refer to Atlas via Canon); anyone who needs OCR of scanned paper (Brage reads PDF text and DOCX only).

## Switching Dynamics
**Push:** Current agency gone quiet; system nobody understands; manual Altinn routine that just failed a deadline.
**Pull:** Fixed price, someone who stays, Altinn experience. For Brage Q&A: AI over our own documents that we can run ourselves.
**Habit:** "It works well enough"; existing agency relationship.
**Anxiety:** Migration risk, cost, picking another vendor who leaves. For AI: data leaving the company, wrong answers, people seeing documents they shouldn't.

## Customer Language
**How they describe the problem:** **OPEN** — no recorded customer quotes yet. Candidates to verify: "dobbeltføring", "vi laster ned fra Altinn for hånd", "byrået forsvant"; for AI: "vi kan ikke legge kundedokumenter i ChatGPT", "hvor ligger det dokumentet igjen?".
**How they describe us:** **OPEN**
**Words to use:** drift, fast pris, du eier koden, kjørende kode, Altinn, rutiner som går av seg selv, sporbar; for Brage Q&A: spørsmål og svar, egne dokumenter, privat språkmodell, dataene blir hos dere, kilde, tilgang, KI (Norwegian searches use both KI and AI)
**Words to avoid:** "plattform" for the studio, "revolusjonerende", "sømløs", "AI-drevet" as a selling point, "løsninger" as filler; for Brage: OCR, fakturabehandling, dokumentfangst, tolking, klassifisering (Atlas territory); "Org Brain" in public copy (internal codename, English, nobody searches for it); "organisasjonens hukommelse" (metaphor, not how buyers search); "GDPR-sikker", "sertifisert", "data i Norge" as guarantees (Brage holds none; say where the data can live)
**Glossary:**
| Term | Meaning |
|------|---------|
| Drift | Running and maintaining software in production |
| Altinn | Norway's portal for public reporting and correspondence |
| Systembruker | Altinn system user a company gives a vendor to file on its behalf |
| Altinn Downloader | Canon's name for Digital Mailroom |
| Org Brain | Internal name for Brage's document index, search and Q&A. Public copy says "spørsmål og svar på egne dokumenter" |
| Privat språkmodell | A language model that runs in the customer's own infrastructure (Ollama on their hardware or cloud), so documents and prompts stay there |
| RAG | Retrieval-augmented generation: search the documents, give the model the excerpts, answer with sources. Use the term once for search, then plain words |

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
| Data stays in-house (Brage) | Ollama + nomic-embed-text supported in the code; Postgres + pgvector index the customer can host |

## Goals
**Business goal:** More project leads from Norwegian SMBs; product leads for Brage and Digital Mailroom.
**Conversion action:** An email to hei@okane.no (mailto links; no form or booking).
**Current metrics:** Umami analytics is installed. **OPEN:** traffic and lead numbers.

## Learnings
*Decisions and tested lessons. Newest first. Keep it to about 20 active entries.*
| Date | Learning | Evidence | Applies to | Status |
|------|----------|----------|------------|--------|
| 2026-11-24 | Brage's Q&A side is marketed as "spørsmål og svar på egne dokumenter" on a private model, on its own page (/brage/privat-ki); "Org Brain" stays internal | Website PR stacked on #54; search intent differs from /brage's Altinn-form intent | Brage page, AI-agenter, ads | watch |
| 2026-11-24 | Brage copy may claim what Brage is being built to do (all 34 forms filed, per-person access), as long as the page says it's a pilot | Founder decision: Brage is built out fast and the page must win pilot customers | Brage page, Brage ads and outreach | active |
| 2026-11-24 | Keep Brage on outbound filings and Q&A; never pitch inbound capture | Canon resells Atlas and would drop Brage on overlap | Brage, Digital Mailroom copy | active |
| 2026-11-17 | No status labels or badges in the front-page hero | Removed in website PRs #47 and #48 | Front page | active |

## Changelog
*Newest first. One line per revision: what changed and why.*
- v3 (2026-11-24) — Brage Q&A and private-LLM positioning: product overview, IT/security persona, AI competitors, differentiation, objections (OpenAI, who sees what, made-up answers, local model quality), customer language and glossary (Org Brain kept internal).
- v2 (2026-11-24) — Learnings: Brage copy may make forward-looking claims during the pilot, by founder decision.
- v1 (2026-11-24) — Initial context, drafted from the site, product repos and partner notes; customer language, proof and pricing left open.
