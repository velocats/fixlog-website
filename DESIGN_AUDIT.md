# FixLog Website — Visual & Design Audit

**Scope:** `index.html`, `features.html`, `for-businesses.html`, `pricing.html`, `screenshots.html`, `how-it-works.html`, `spaces.html`, `qr-codes.html`, `privacy.html`, `styles.css`, `scripts.js`, real App Store screenshots in `assets/screenshots/`, app icon in `assets/branding/`.
**Method:** direct source inspection, CSS inventory, and reading actual product screenshots (not marketing renders) to reconstruct what the app really is, then evaluating whether the site reflects it.
**Not done:** no redesign, no CSS rewrite, no copy rewrite. Two objectively-broken items are noted separately at the end and were *not* auto-fixed.

---

## 1. Executive Summary

FixLog's actual product — visible in the real App Store screenshots — is a warm, native-feeling iOS maintenance log: a "Today" screen with overdue/upcoming counts, a simple asset list with real photos, a "Due" list, a cost-tracking screen, and per-asset history with photos, parts, vendors, and dollar amounts. The demo data in the app is specific and human ("Sump Pump — Critical: test sump pump before storms," "Garbage Disposal — InSinkErator," "Air Compressor — Mountain Peak Brewing"). The app icon is a simple navy/white/blue "F" monogram — quiet, confident, not a gradient logo mark.

The website does not currently look or read like that product. It reads as a template-driven B2B SaaS site: a stock three/four-card grid repeated on nearly every page, a hero built from marketing abstractions rather than the product's real screens, copy dense with enumerated feature lists ("assets, reminders, service history, service providers, costs, photos, documents, warranties, QR labels, Spaces, sync, and reports"), and a recent wave of programmatic SEO landing pages (`cmms-alternative/`, `equipment-repair-log/`, `repair-cost-tracking/`, etc.) that push the site further toward enterprise-facilities territory than the product itself ever goes.

The biggest single finding: **the site has drifted away from what the app's own screenshots show.** The app is approachable and personal (My Home, Maple Ridge, a sump pump, a garage door). The site talks like enterprise CMMS software risk-managing "operations" and "handoffs." Nothing in the real screenshots supports words like "enterprise rollout," "operations maintenance report" as a headline concept, or "facility systems" as the lead framing — those exist, but they're one register out of several the app actually supports (it clearly also does homes, breweries, small shops). The site picked the most corporate-sounding register and stayed there.

## 2. Product & Design Identity Discovered

From `release-notes.html` and the real screenshots, not from assumption:

- **Target user:** small business owner-operators *and* homeowners — the product pivoted from an original homeowner focus (`for-homeowners.html` now hard-redirects to `for-businesses.html`, and 1.0 release notes literally say "small businesses, owner-operated shops, and people who need a better way to remember service history"). The Assets screenshot shows a residential space ("My Home," "Maple Ridge," sump pump, garage door, smoke detector, dryer vent) and the iPad screenshots show a business space ("Mountain Peak Brewing," air compressor, brewery cooling system). Both are first-class, connected by the "Spaces" concept.
- **Core use case:** remembering what you own, what it needs, and what you already did about it — for anything with a maintenance or repair history, home or small business.
- **Primary workflow (from the actual UI, not marketing copy):** Home screen shows Overdue / Upcoming / Assets counts → tap into an asset → see photo, service history with cost per entry, maintenance reminders, asset details (ID, status, category, location) → Reports screen turns that history into cost trends and a health score.
- **What users record:** asset + photo, maintenance/repair entries (type: REPAIR/REPLACEMENT/CLEANING, vendor, cost, date), reminders (recurring, e.g. "Weekly," "Every 3 months"), warranty dates, QR-linked lookup.
- **What makes it different from a notes app:** the record is structured and asset-centric — cost rolls up per asset and per year, reminders recur, a QR code jumps straight to the record, and a report can be exported. A notes app can't answer "what's this cost me this year" or "when did I last do this."
- **Platforms:** iPhone, iPad, Mac (per screenshots and copy — Mac sync language is present but current copy elsewhere says "Mac support planned," an inconsistency, see §20).
- **Privacy model (verified in `privacy.html`):** no account required, records intended to stay on-device unless the user exports/backs up/shares, support-email data only when the user emails. No mention of iCloud sync mechanism specifically, no ad/tracking claims made (correctly — nothing to overclaim).
- **Visual language of the actual app:** stock iOS system UI. SF-style symbols, native tab bar, native list rows with dividers, a blue accent (~iOS system blue) against white/light-gray backgrounds, semantic color use only (red = overdue, orange/amber = upcoming, green = value/good, blue = neutral/link). No custom illustration, no gradients, no card-in-card nesting beyond one native list level. The one designed asset is the app icon: navy `#0d1726`-ish background, layered white/blue "F" mark with a subtle highlight — restrained, confident, on-brand with nothing else needed.
- **Terminology used by the app itself:** "Assets," "Due," "Reports," "Maintenance History," "Maintenance Reminders," "Asset Details," "Cost Tracking," "Warranty Watch," "Spaces." Notably the app says "Repair" as an entry *type* (a tag), not as the primary noun for the product — the product's own vocabulary is "maintenance," "asset," "record," "history," with "repair" as one category among REPAIR/REPLACEMENT/CLEANING.

## 3. Desired Character — Is It Appropriate?

Yes. Given what's actually in the app (a calm, structured, photo-and-cost-backed asset history with iOS-native chrome), "a beautifully simple memory for everything you've fixed" is directionally accurate and the practical/organized/approachable/trustworthy/native-to-Apple character list fits the real product far better than the site's current corporate-facilities register fits it. The app itself already proves the "not corporate, not CMMS-flavored" instinct is right — it's the marketing site that overshot toward CMMS language, not the underlying product.

## 4. What Currently Works

- **The app icon and its color relationship to the site.** `--navy: #0d1726` / `--accent: #2f6693` in `styles.css:14,10` are a legitimate, restrained extension of the icon's navy/blue. This is one place where website and app genuinely feel related — see §20 for where that relationship breaks down elsewhere.
- **Real product screenshots exist and are plentiful.** `assets/screenshots/appstore/{iphone,ipad,macos}/` has 29 captioned, purpose-built screenshots ("Know what needs attention today," "Understand costs over time," "Watch warranty deadlines") — this is exactly the raw material a Day-One-style storytelling site needs. It is underused (see §14).
- **Privacy copy is honest and short.** `privacy.html` doesn't overclaim; six short cards state exactly what's true. This is the right length for this content even if cards aren't the right container (§12).
- **The `.prose` typography added for the new guide pages** (`styles.css:569-575`) is a genuine improvement in reading experience relative to the rest of the site — 68ch measure, 1.62 line-height, reasonable size. It's a preview of better typographic judgment than the card-grid pages show.
- **No dark-pattern pricing.** `pricing.html` states $0 / $0.99 / $7.99 plainly, explains what free vs. Pro includes, and has an honest FAQ ("Is FixLog Pro a subscription?"). Nothing manipulative.
- **Accessibility basics are present:** skip link (`index.html:24`), `:focus-visible` styling (`styles.css:48`), `aria-current`, `prefers-reduced-motion` block (`styles.css:552`). Baseline is better than most template sites.

## 5. What Feels AI-Generated / Template-Driven

Concretely, in the source:

- **The repeating three/four-card grid is the dominant layout device on every page.** `index.html` alone has 9 elements with `class="card…"` across 4 separate grid sections (problem cards `.grid.four` at line 89, "who it's for" cards `.grid.four` at 144, comparison cards at 158, plus the final CTA card at 181). `features.html` has 15. `for-businesses.html` has 15. This is the single strongest tell of template generation — cards are the default container for *everything*, including content (privacy policy, FAQ, comparison table) that isn't naturally card-shaped.
- **Card-in-card nesting.** `.final-cta` (`styles.css:437`) is a `.card` styled again with its own radius/shadow/gradient sitting inside a `.section`, which sits inside the page grid — a card wrapping a CTA that's already visually a card.
- **Generic emoji-as-icon feature markers.** `index.html:90-93`: 🧰 ⏱️ 📎 ⇄ next to "Asset records / Calendar work / Photos and documents / Device sync." These communicate almost nothing (a stopwatch for "Calendar work"?) and are the exact "wrench icon next to the word Repairs" pattern called out as a cliché to avoid. Same pattern at `index.html:122,129` (🏢 ▦).
- **Gradient backgrounds on nearly every section type.** `--soft`/radial-gradient body background (`styles.css:34-36`), hero gradient (`styles.css:151-154`), `.product-panel` gradient (`styles.css:299`), `.dark-band` gradient (`styles.css:351-353`), `.final-cta` gradient (`styles.css:441-443`), `.service-provider-feature` gradient (`styles.css:250`). Six distinct decorative gradients across one homepage is a strong "generated SaaS template" signal — no single one is offensive, but the cumulative effect is that nothing on the page has a flat, confident background; everything glows faintly.
- **Every section has a different tinted/treated background** — exactly the anti-pattern named in the brief. In sequence down `index.html`: light gradient body → navy hero gradient → white trust-strip pill → light card grid → white/blue gradient product panel → light card grid again → navy `.dark-band` gradient → light card grid again → white/blue gradient CTA card. Nine background treatments in one scroll.
- **Pills everywhere.** `.hero-pills span` (`styles.css:179`), `.trust-strip span` (216), `.audience-examples span` / `.space-tag` / `.biz-type-grid span` (330-345), `.provider-detail-list span` (268), `.platform-jump a` (410) — six different families of pill-shaped tag, all `border-radius: 999px`. Pills read as "SaaS feature list" shorthand rather than product-specific information.
- **Giant centered oversized headline typography divorced from the product.** `.hero h1 { font-size: clamp(50px, 7vw, 88px) }` (`styles.css:175`) on "Simple maintenance tracking for small businesses" — this is a generic SaaS headline size/weight applied to a sentence that could describe dozens of unrelated products (see the swap test, §6).
- **Border-radius has 12 distinct non-pill values in one stylesheet** (7, 8, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 34, 38px) plus the `999px` pill radius used 10 times — no consistent scale, which is a symptom of components being added piecemeal (likely across many AI-assisted edits) rather than drawn from a defined `--radius`/`--radius-sm` system that's actually followed.
- **Nine distinct `box-shadow` declarations**, several nearly identical (`0 8px 20px rgba(47,102,147,0.24)` vs `0 8px 22px rgba(15,37,64,0.06)`) — shadows accumulate rather than reuse the two `--shadow`/`--shadow-soft` tokens already defined at the top of the file.
- **Generic marketing phrasing.** "Small business maintenance gets scattered fast" (index.html:86), "The maintenance record system between a spreadsheet and enterprise CMMS software" (117), "Get organized before the next repair" (182) — all plausible, none distinctive. None of it could only be said about FixLog; compare to what the app itself says ("Critical: test sump pump before storms," "Watch warranty deadlines") which is specific and can't be swapped into another product.
- **JSON-LD `SoftwareApplication` schema calls FixLog `"applicationCategory": "BusinessApplication"`** (`index.html:21`) — a categorization decision made for SEO that further locks the site into the enterprise/business register even though the product's own demo data is half residential.

## 6. The Swap Test

Replace "FixLog" with "TaskFlow" across the homepage and check what still reads sensibly:

- Hero: *"Simple maintenance tracking for small businesses. Track assets, service history, service providers, reminders, photos, and records across your devices without the complexity of enterprise maintenance software."* → Still works for TaskFlow, AssetPilot, ShopKeep, or any B2B ops tool. **Fails the test.**
- "The problem" section (`index.html:83-95`): "Small business maintenance gets scattered fast... Receipts end up in email. Photos sit in camera rolls." → Generic enough to apply to expense tracking, document management, or CRM. **Fails.**
- "More than a reminder app. More practical than a spreadsheet." (`index.html:155`) → This is the strongest line on the page because it's a real, specific positioning claim (reminders vs. notes vs. spreadsheets vs. FixLog) — but it still doesn't say *what kind* of thing you're remembering. **Half-passes.**
- The one thing that would **not** survive a swap: the actual screenshots, if they were shown larger and more often — "Test sump pump before storms," "Garbage Disposal · InSinkErator," "$31,515.00 · Manual Pallet Jack." Those are irreplaceably FixLog. They currently appear cropped, small, and outnumbered by copy and cards.

**Conclusion:** most of the homepage's *copy* and *layout* would survive the swap unchanged; only the real product screenshots wouldn't. That's the clearest possible signal that the site is currently marketing an abstraction of "a maintenance app" rather than FixLog specifically, and that the fix is to let the actual screens and actual demo data carry far more of the page.

## 7. Find the Product's Visual Story

The illustrative story in the brief — *something breaks → you troubleshoot → you find the fix → you record it → months later it happens again → FixLog remembers* — is **substantially accurate** for what the app supports: the Maintenance History entries carry type, vendor, cost, and date, so "here's exactly what worked and what it cost last time" is a real, screenshot-able capability (see `fixlog-iphone-05.png` and the Air Compressor detail screen). The one adjustment: FixLog is as much about *scheduled* maintenance (reminders, warranty countdown) as it is about *reactive* repair-and-remember. The strongest true story is closer to:

> You already dealt with this. FixLog remembers what you did, what it cost, and when it's due again — so you don't have to.

The current homepage does not tell this story. It tells a features-and-comparison story (four cards → product panel → four more cards → comparison table → screenshot strip → CTA). The word "remember" doesn't appear once on the homepage in this sense, despite it being the app's real emotional payoff and despite `resources/why-keep-repair-history/` — a page that exists specifically to make this argument — being buried in a footer link rather than driving the homepage narrative.

## 8. Homepage Audit (5-second test)

Simulating a first-time visitor scanning `index.html` top to bottom:

1. **What is FixLog?** Understandable but generic — "maintenance tracking for small businesses" (an app, presumably). ✅ but weak.
2. **Why would I use it?** Not clear in 5 seconds — the hero gives no concrete scenario, only category words (assets, service history, reminders, photos).
3. **What problem does it solve?** Not until the second section ("Small business maintenance gets scattered fast") — that's past the 5-second window.
4. **What do I record?** Not shown at all in the hero; the two phone screenshots (`fixlog-iphone-01.png`, `-02.png`) are shown at a small, rotated, overlapping angle (`.phone-main`/`.phone-side`, `styles.css:192-193`) that makes their actual text (which is the most persuasive content on the page — "Sump Pump — Critical: test sump pump before storms") illegible at hero size.
5. **What does the app look like?** Only partially — screenshots are present but small and rotated, reducing legibility.
6. **Where to download?** Yes — App Store badge is present and correctly placed in hero and nav.

**Blocking this understanding:** the hero leads with category-word copy instead of a concrete "here's what a record looks like" moment, and the one visual proof point (the phone screenshots) is shrunk and tilted rather than shown flat and legible.

## 9. Hero Audit

`index.html:44-67`, styled by `.hero-redesign`/`.hero-split`/`.hero-showcase` (`styles.css:172,181-193`).

- **Headline:** "Simple maintenance tracking for small businesses." Generic, passes the swap test in the wrong direction (§6).
- **Supporting copy:** enumerates six nouns (assets, service history, service providers, reminders, photos, records) — a list, not a sentence with a point of view.
- **Screenshot:** two real screenshots are used (good, it's not stock photography) but presented small (285px main frame), rotated -2.5°/5°, partially overlapping, inside a heavy device-frame chrome (`box-shadow: 0 38px 100px rgba(0,0,0,0.42)`) that adds drama the content doesn't need and actively hides the text that would sell the product.
- **CTA:** App Store badge + "See features" — correct choice of primary/secondary actions, no complaint.
- **Visual hierarchy:** headline dominates by size (up to 88px) but carries the least product-specific information on the page; the screenshots, which carry the most, are visually secondary.
- **Background:** three-layer gradient (`styles.css:151-154`) plus a fade-out pseudo-element (`.hero::after`) — adds moodiness without connecting to the product's actual (light, native-iOS) visual identity.
- **Mobile:** `.hero-showcase { display: none }` at `≤760px` (`styles.css:534`) — **the screenshots disappear entirely on mobile**, leaving only text. For a product whose best asset is its screens, and on the device most visitors will actually be using (they're being asked to download an iPhone app), this is a significant loss, not just a simplification.

**Does the hero show the product or advertise it?** It advertises it. The product screens are present but shrunk, tilted, and (on mobile) removed — decoration rather than evidence.

## 10. Navigation Audit

`site-header`/`nav` (`styles.css:69-107`, present identically on every page).

- Desktop nav: Home / Features / Screenshots / Guides / Pricing / Support + App Store badge — six items plus badge. Reasonable count, not enterprise-feeling by itself.
- The **new "Guides" link** (added in the pending SEO changes) points to `resources/`, a content-marketing hub. On a focused consumer app, a top-level nav slot spent on a blog/guides section pushes toward "content site" rather than "app site" — worth weighing against Anybox/Bear-style navs, which are typically just Home / Download / (maybe) Support.
- Mobile nav collapses into a hamburger-style `.nav-menu-toggle` with full-width stacked links (`styles.css:524-531`) — functionally fine, visually a standard generic mobile menu with no distinguishing character.
- No sub-navigation/mega-menu, no "platforms" dropdown — good, doesn't over-structure. This part is appropriately restrained relative to the content sprawl elsewhere on the site.
- The **footer nav has grown to 12 links** including 4 new programmatic-SEO destinations (`repair-log-app/`, `maintenance-log-app/`, `resources/`, plus the original list) — this is the one place enterprise-site sprawl is most visible: a small consumer app now has a footer sitemap that looks like a B2B SaaS platform's footer.

## 11. Typography Audit

- **Font:** system font stack only (`-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`, `styles.css:32`) — correct choice for an Apple-ecosystem product, and it's the one typographic decision that's unambiguously right.
- **Heading scale:** hero h1 up to 88px, section h2 up to 56px (`.section-title h2`), page-hero h1 up to 74px, final-cta h2 up to 58px, service-provider h2 up to 52px, product-copy h2 up to 52px. That's **six different oversized clamp() headline treatments** across the site, all in a similar 32–88px range, none clearly subordinate to another — a flat hierarchy of "big" rather than a designed scale.
- **Line-height:** headings use `1.06` (`styles.css:44`) uniformly, which is fine for short headlines but is applied even to two-line headings that would read better slightly looser.
- **Line length:** hero copy capped at `max-width: 690px` at 18-22px (reasonable ~75-90 characters); the new `.prose` guide pages cap at `68ch` (good practice, better than the rest of the site).
- **Weight:** heavy use of `font-weight: 850–950` on buttons, pills, nav links, price figures — everything is bold. When everything is bold, nothing is emphasized; this flattens hierarchy rather than sharpening it.
- **Alignment:** heavy reliance on `.centered` section titles (`index.html:84,115,139,167`) — four of six homepage section headers are center-aligned, which combined with the big clamp() sizes produces the "giant centered headline, repeated" template signature named explicitly in the brief.
- **Overall judgment:** competent and readable, but assembled from a large, ungoverned set of heading sizes rather than a deliberate 3-4-step type scale. Reads as generated-from-template, not as a typographer's decision.

## 12. Color Audit

- **Palette root** (`styles.css:1-24`): navy `#0d1726`/`#172840`, accent blue `#2f6693`/`#0f3155`/`#7fb2df`, plus semantic success/warning/danger. This is a coherent, restrained palette *in principle* and does relate to the app icon (§4).
- **Where it breaks down:** the site uses the accent blue as a decorative gradient ingredient in six different places (§5) rather than structurally — i.e., blue shows up as ambient glow behind the hero, behind the product panel, behind the CTA card, and inside the dark band, rather than being reserved for interactive/informational elements the way the app itself uses blue (links, the active tab, "UPCOMING" tags). In the real app, color is 100% functional — red means overdue, amber means due soon, green means value, blue means "tap this." On the website, color is largely atmospheric.
- **No competing accent colors** — that's a genuine strength; there's no rainbow-of-gradients problem, just an overuse of the *one* gradient.
- **Backgrounds vs. screenshots:** screenshot cards get their own dark treatment (`.screenshot-card { background: #101923 }`, `styles.css:374`) that doesn't match either the light app UI or the site's own light palette — screenshots are presented in a floating dark card that exists nowhere in the actual product.

## 13. Design-System Audit

Quantified from `styles.css`:

- **Border-radius values in use:** 14 distinct pixel values (7, 8, 10, 11, 12, 13, 14, 16, 18, 20, 24, 28, 34, 38) plus `999px` pills, against only two tokens defined (`--radius: 22px`, `--radius-sm: 14px`) — meaning most radii used across the site **aren't drawn from the token system that exists**, they're one-off values per component.
- **Shadow treatments:** 9 distinct `box-shadow` value strings plus 2 named tokens (`--shadow`, `--shadow-soft`) — same pattern, more one-offs than reuse.
- **Button styles:** at minimum `.button`, `.button.primary`, `.appstore-badge`, `.nav-appstore-badge`, `.hero-secondary` — five visually distinct button treatments for what is functionally two actions (primary CTA, secondary link).
- **Card styles:** `.card` (base), `.card.highlight-card`, `.card.featured-card`, `.card.final-cta`, `.scenario-card`, `.faq-item`, `.flow-step`, `.audience-card`, `.comparison-cards article`, `.screenshot-card` (+ `.light` variant) — at least 9 visually distinct card treatments sharing the same conceptual container.
- **Background treatments:** counted at 9 in one homepage scroll (§5).
- **Spacing:** `.section` padding 76px vs `.section.tight` 46px — a binary, not a scale; gaps inside grids are a flat `18px`/`20px` regardless of content density.
- **Verdict:** the *tokens* for a real system exist (`--radius`, `--radius-sm`, `--shadow`, `--shadow-soft`, the color variables) but are inconsistently applied — most new components (visibly, the ones added most recently: `.service-provider-feature`, `.product-panel`, `.audience-card`) define their own radius/shadow/gradient rather than reusing the tokens. This is the signature of iterative AI-assisted or copy-paste component addition rather than a maintained design system.

## 14. Card Audit

Going through the actual card instances on `index.html`:

- **Problem cards** (`.feature-card` ×4, line 90-93): genuinely grouped info (icon/title/description) — a card is a reasonable container, but the emoji icons undercut it (§16).
- **"Who it's for" cards** (`.feature-card` ×4, line 145-148): same content shape as the problem cards three sections earlier — two card grids with near-identical visual treatment doing different jobs reads as repetition, not reinforcement. **Would be stronger as a single unified section**, or as one replaced by a screenshot-led explanation.
- **Comparison cards** (`.comparison-cards` ×4, line 158-163): this is the one card use that's structurally justified — it's literally a comparison table, and a table-as-cards is a defensible pattern.
- **Audience cards** (`.audience-card` ×2, line 120-135): each is a card wrapping an icon, heading, paragraph, and pill row — this is arguably better as two large linked panels with a real product screenshot per audience rather than emoji+text.
- **Final CTA "card"** (line 181): a `.card` used to contain the entire final call-to-action section — this is the clearest "card as default container" case in the file. **A CTA section doesn't need a card wrapper; whitespace and a centered layout would read as more confident**, the way Anybox's or Things' download sections do (a plain background, big type, one button — no bordered box needed because it's already the last thing on the page).
- **Overall:** of ~15 cards on the homepage, roughly 4 (the comparison cards) earn their container. The rest would be stronger as screenshots, plain text blocks, or asymmetric two-column layouts — this is the single highest-leverage structural change available (see backlog P1).

## 15. Icon Audit

- **Style:** raw emoji (🧰 ⏱️ 📎 ⇄ 🏢 ▦) used as feature icons throughout `index.html`, `for-businesses.html`. Emoji render inconsistently across OS/browser (different glyph styles on macOS vs. Windows vs. Android), which is itself a consistency problem independent of taste.
- **Consistency:** no shared visual system — emoji, a plain Unicode "▦" character, and (elsewhere) numbered circles (`.flow-number`) and check icons in screenshots are all used as "icon" without a common language.
- **Usefulness:** low. A stopwatch (⏱️) next to "Calendar work," a paperclip (📎) next to "Photos and documents," a toolbox (🧰) next to "Asset records" — none of these disambiguate or add information beyond the heading text; they're purely decorative, exactly the pattern called out in the brief ("a wrench icon next to the word Repairs usually communicates very little").
- **Recommendation direction (not implemented):** either drop these icons entirely and let typography carry the section, or replace with the same SF Symbols-style glyphs the app itself uses (checkmark badges, warning triangles, house glyph) so site and app share one icon language — see §20.

## 16. Screenshot Audit

Inspected: `fixlog-iphone-01/02/03/05/06.png`, `fixlog-ipad-04/05.png`, plus the `appstore/` captioned set.

- **Readability:** the raw screenshots themselves are sharp and legible full-size. On the site, they're frequently shown small (`.device-phone { max-width: 272px }`, hero frames at 236-285px) — legible-enough for a phone at native size, but the hero versions are additionally rotated and overlapped, which actively hurts readability of exactly the text that sells the product (line item titles, dates, dollar amounts).
- **Demonstrates a real benefit:** yes, strongly — "Overdue: 2 / Upcoming: 6 / Assets: 31," "Sump Pump — Critical: test sump pump before storms," "$31,515.00 — Manual Pallet Jack," "Oldest overdue reminder: Critical: glycol chiller high-temp alarm." These are specific, persuasive, and unique to FixLog. They are currently under-featured relative to their persuasive power.
- **Appropriate size:** mostly too small given how much of the value is in the text detail (dollar figures, dates, item names).
- **Device frames — help or hurt?** The heavy, rotated, drop-shadowed phone frames in the hero (`.phone-main`/`.phone-side`) hurt: they add "generic app-landing-page" visual noise (this is close to the "screenshot mockups floating inside decorative circles/frames" anti-pattern named in the brief) without adding credibility the real screenshots don't already have on their own. The flatter, un-rotated device frames used in `.screenshot-strip` (`index.html:172-175`) are considerably more effective and closer to how Flighty/Day One present screens — flat, straight, large.
- **Realistic:** yes — this is a genuine strength (§17).
- **Coherent story across screenshots:** no — screenshots are selected per-section to illustrate whatever that section's copy claims ("Today," "Assets," "Reports") rather than sequenced to tell the "you already fixed this once" story identified in §7. A Day-One-style sequence (log the problem → log the fix → six months later, find it again) is possible with existing assets but isn't built.

## 17. Realistic Example Data

This is already a strength, and worth explicitly protecting during any redesign: the app's own demo data (Sump Pump, Garbage Disposal · InSinkErator, Furnace & Air Filter, Air Compressor · Mountain Peak Brewing, Manual Pallet Jack, glycol chiller) is specific, plausible, and far more persuasive than generic "Test Item"/"Sample" placeholders would be. **Recommendation: pull marketing copy examples directly from this existing demo data** (e.g., use "the sump pump you fixed before the last storm" as a copy example) rather than inventing new hypothetical scenarios — the real data is better than anything invented for marketing would be.

## 18. Page Rhythm

Homepage sequence: hero → trust-strip pill bar → 4-card grid → product-panel (screenshot + copy) → 4-card grid → 2-card audience split → dark-band 4-card comparison → 3-screenshot strip → CTA card. That's **four separate card-grid moments** in one page, interspersed with panel sections that are themselves gradient-card-shaped. This matches the brief's named anti-pattern almost exactly: *Hero → cards → headline → cards → screenshot → cards → CTA card.*

Other pages repeat the identical shape: `features.html` is page-hero → 2-card grid → 6-card grid → provider feature panel → 6-card grid → CTA card — five distinct card moments in one page. `for-businesses.html` follows the same template.

**Recommendation direction:** vary the building blocks per the brief's suggested set — a full-bleed screenshot moment, a short narrative paragraph with no card at all, one detail-screen callout, then privacy/trust as plain text, then CTA — so that no two consecutive sections use the same container shape.

## 19. Copy & Design Audit

Phrases on the current site that lean generic (not to be blindly replaced, but flagged):

- "Simple maintenance tracking for small businesses" (hero h1) — closest to the flagged "smarter X starts here" register in genericness, though not as egregious as the brief's worst examples.
- "Small business maintenance gets scattered fast" — fine as an observation, but not FixLog-specific.
- "Get organized before the next repair" — borders on "take control of your repairs."
- "The maintenance record system between a spreadsheet and enterprise CMMS software" — this is actually a good, specific positioning line and should probably survive.
- "More than a reminder app. More practical than a spreadsheet." — good, specific, keep.

What's conspicuously **absent**: any line in the register of the brief's suggested direction — "Didn't I already fix this once?", "What did I try last time?", "How much have I spent fixing this thing?" — despite the app's own data (cost totals, repeat-service history, vendor history) directly supporting exactly those questions. The copy enumerates features; it never asks the question the product answers.

## 20. Mobile Audit

- **Hero:** screenshots removed entirely (`styles.css:534`, `.hero-showcase { display: none }`) — biggest mobile-specific loss, see §9.
- **Typography:** headline drops to `clamp(42px, 12vw, 58px)` (`styles.css:533`) — still large relative to a 375-414px viewport; two-word wraps are likely.
- **Navigation:** collapses correctly to a toggle menu; tap targets look adequately sized (`min-height: 42px` nav links, `styles.css:530`).
- **Cards:** all grids collapse to a single column (`styles.css:537`) — content order is preserved, no horizontal overflow risk found in the CSS (no fixed-width elements outside a scroll container spotted).
- **Screenshot grids:** `.screenshot-grid img { height: auto }` override at mobile (`styles.css:549`) is a good, deliberate fix already in place — object-fit cropping is disabled at small sizes so images aren't cut off.
- **Section length:** with every section still present but stacked to one column, mobile pages get very long (a 9-section homepage with 4 card grids becomes a long single-column scroll of repeating card blocks) — the repetition problem in §18 is more visible, not less, on mobile because there's no multi-column layout to break it up visually.
- **Device sync note:** `how-it-works.html` says "Records can sync across supported devices, with Mac support planned" while `pricing.html`'s Pro list says "Sync maintenance records across supported devices" without qualification, and screenshots include a macOS gallery already shipping in `assets/screenshots/appstore/macos/` — **this is an actual inconsistency about a shipped-or-not feature**, worth resolving for accuracy, not just design.

## 21. Privacy / Trust Audit

`privacy.html` content is accurate to what's verifiable (no account required, local-first, user controls exports) and appropriately modest — it doesn't claim "we never see your data" in a way that oversells, and doesn't invoke iCloud specifics that aren't confirmed in source. The concern is placement, not content: privacy/trust is not mentioned anywhere in the homepage flow at all — a user deciding whether to download never encounters "no account, your data stays on your device" unless they click through to a separate legal page. For a native, no-login app, that's a differentiator (vs. every SaaS competitor requiring signup) that's currently invisible at the point of decision.

## 22. Website → App Consistency

- **Colors:** partially consistent — the site's navy/blue accent family is a legitimate relative of the app icon (§4), but the site's heavy gradient/glow treatment has no analog in the app's flat, native UI.
- **Typography:** consistent — both use the system font.
- **Icons:** inconsistent — site uses emoji and ad-hoc Unicode glyphs; app uses native SF-Symbol-style outline icons (house, box, calendar, gear, checkmark badge). These don't read as the same visual language.
- **Terminology:** partially inconsistent — app screens say "Assets," "Due," "Reports," "Maintenance History," "Cost Tracking." Site frequently substitutes "repair log," "repair history," "maintenance log," "operations maintenance report" as SEO-driven synonyms (visible directly in the new `repair-log-app/`, `repair-history/`, `repair-cost-tracking/` landing-page names) that don't match any in-app label. A user who downloads after reading "Repair Log App" opens an app that never uses that phrase.
- **Density:** site sections are copy-dense (long enumerated lists: "assets, service history, service providers, costs, photos, documents, warranties, QR labels, Spaces, sync, and reports" appears near-verbatim multiple times); the app itself is sparse, one-idea-per-screen.
- **Personality:** app is quiet and functional; site is emphatic and gradient-heavy. These currently read as two different products from two different teams.
- **Screenshots:** consistent, obviously — they're the same images, just poorly framed on the site (§16).

**Verdict on "Website → App Store → App as one product":** not currently. The App Store listing (native screenshots, presumably native copy) and the actual app match each other; the marketing website is the outlier.

## 23. Historical-Value Storytelling Opportunity

Confirmed supportable by the product: `Maintenance History` entries carry date + cost + vendor + type, and `Reports` aggregates by year with trend charts (`fixlog-ipad-04.png` shows a 12-month Completed/Overdue/Spend trend line and a literal "Oldest overdue reminder" callout). This is real, screenshot-able evidence that FixLog gets more valuable as history accumulates — currently the site never makes this argument visually. The homepage's "Today / six months later / FixLog remembers" story (§7) is buildable today from existing assets (crop the Air Compressor detail screen showing three prior service entries with costs) without waiting on new screenshots or new app features.

## 24. Reference-Site Comparisons

- **Things:** the lesson isn't "make it minimal," it's *restraint of container use* — Things' marketing pages show the product large and let empty space do the separating instead of borders/shadows. FixLog's homepage could drop half its card borders and gain hierarchy rather than lose it.
- **Day One:** the lesson is storytelling around accumulation — Day One's site talks about *years* of entries becoming more valuable, exactly FixLog's own differentiator (§23), and does it with screenshots of real entries, not feature lists. FixLog has the raw material (cost trends, "oldest overdue reminder") and isn't using it this way yet.
- **Bear:** the lesson is personality through restraint and typographic voice, not through added ornamentation — Bear doesn't need icons or gradients to feel distinct, it needs one confident typographic choice used consistently. FixLog's type scale (§11) is the thing to fix before adding any decoration.
- **Anybox:** the lesson is indie-app directness — short, plain-spoken copy, screenshots at real size, no enterprise-feature-list framing, privacy stated plainly and early. FixLog's `privacy.html` content is already at the right register (§21); it just needs to move earlier in the funnel.
- **Flighty:** the lesson is making technical/numeric information feel premium rather than clinical — FixLog's cost-tracking and health-score screens (`fixlog-ipad-04.png`) are exactly this kind of technical-data-made-satisfying content and are currently the most under-shown asset on the whole site.

**Best single reference for FixLog:** **Day One**, because the core differentiator (a record that becomes more valuable as it accumulates) is the same shape as Day One's core differentiator (a journal that becomes more valuable as it accumulates), even though the subject matter (repairs vs. life) is different. Flighty is the second-best reference specifically for how to present the Reports/cost-tracking screens.

## 25. Proposed Homepage Story (not implemented)

1. **Opening proposition + real product visual** — one real screenshot (Today screen or an asset detail with visible cost history) shown large, flat, un-rotated, at a size where the actual text is legible. Copy: one sentence, concrete, not a feature list. ~15 words.
2. **The problem, stated as a memory failure, not a disorganization failure** — "You already fixed this once. Do you remember what worked?" paired with a real repeat-service example from the data (e.g., a "REPLACEMENT" entry that recurs). ~2 sentences.
3. **What you record** — one asset detail screen, annotated or captioned to show photo + cost + vendor + date together, replacing at least one of the current 4-card grids.
4. **What it's worth over time** — the Reports/cost-trend screen (`fixlog-ipad-04.png`) shown large, with the "Oldest overdue reminder" / health-score content as the caption — this is the Day-One-style accumulation moment (§23).
5. **How it fits your life or business without a rollout** — short plain-text paragraph (no card), acknowledging both Spaces (home + business) since that's real and differentiating, replacing the current "audience split" cards.
6. **Privacy, stated once, plainly** — "No account. Your records stay on your device unless you export them." — one line, no card, moved up from the current buried Privacy page.
7. **App Store CTA** — plain, centered, no bordered "card" wrapper (§14).

Approximate total copy: under half of what's on the page today: the current homepage's persuasion should come from fewer, larger, better-chosen screenshots plus short specific copy, not from six enumerated feature lists.

## Prioritized Improvement Backlog

**P0 — broken/accessibility/comprehension**
1. Mobile hero drops all product screenshots (`styles.css:534`) — the one platform most visitors will be on shows zero product evidence. Not a stylistic call — it's a comprehension gap on the primary device.
2. "Mac support planned" (`how-it-works.html`) directly contradicts Pro's "sync across supported devices" claim and the shipped macOS App Store screenshot set — factual inconsistency about a paid feature.

**P1 — highest-leverage identity fixes**
3. Replace the rotated/shrunk hero device frames with the actual screen shown large and flat, with legible real text (§9, §16).
4. Cut the number of card-grid moments per page from 4-5 to 1-2; convert the rest to screenshots, plain paragraphs, or asymmetric layouts (§14, §18).
5. Remove decorative emoji icons; either drop icons entirely on feature callouts or adopt the app's own outline-icon language (§15, §20).
6. Rewrite the hero headline/subhead away from enumerated-noun copy toward the "you already fixed this once" story the product actually supports (§7, §19).
7. Consolidate the 6+ gradient background treatments to 1-2 deliberate uses; let most sections sit on a flat, calm background (§5, §12).
8. Build one accumulated-history/cost-trend moment using the existing Reports screenshot — the single most under-used, most differentiating asset on the site (§16, §23).

**P2 — secondary**
9. Reconcile site terminology ("repair log," "repair history") with the app's actual on-screen vocabulary ("Assets," "Due," "Cost Tracking") so App Store → app doesn't feel like a bait-and-switch (§22).
10. Reduce footer link count / reconsider whether "Guides" belongs in the primary nav for a focused consumer app (§10).
11. Move privacy messaging ("no account, on-device") into the homepage flow instead of leaving it only on `privacy.html` (§21).
12. Consolidate border-radius and box-shadow values down to the existing `--radius`/`--radius-sm`/`--shadow`/`--shadow-soft` tokens across all newer components (§13).

**P3 — polish**
13. Reduce heading-weight uniformity (850-950 everywhere) so bold text can mean something again (§11).
14. Reduce the number of distinct button treatments from five toward two (§13).
15. Sequence the screenshot strip/gallery to tell a before/after story rather than a features-menu order (§16, §18).

---

## Objectively-Broken Items Fixed During This Audit

None. No CSS, HTML, or copy was changed as part of this pass — everything above is documentation only, per the audit brief.
