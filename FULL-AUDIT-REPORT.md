# Full SEO Audit Report — sierraverdelandscaping.com

**Audit date:** 2026-05-19
**Site:** https://www.sierraverdelandscaping.com/
**Platform:** Wix (Wix.com Website Builder, generator meta confirmed)
**Business type detected:** Local Service (residential & commercial landscaping)
**Pages discovered:** 3 indexable URLs (Home, Our Work, Contact)

---

## Executive Summary

### Overall SEO Health Score: **19 / 100** 🔴

This site is effectively **invisible to Google search**. The audit found one catastrophic, site-wide configuration error (`noindex` on every page) plus a declared-but-broken XML sitemap. Until those two issues are fixed, nothing else moves the needle. The page-level fundamentals (title tags, headings, schema, content depth) are also weak and should be addressed in a second pass.

### Top 5 Critical Issues

| # | Issue | Impact |
|---|-------|--------|
| 1 | `<meta name="robots" content="noindex">` on **every** page (Home, Our Work, Contact) | Site cannot rank in Google or any search engine — total blocker |
| 2 | `https://www.sierraverdelandscaping.com/sitemap.xml` returns Wix 404 error page despite being declared in robots.txt | Google cannot discover URLs; conflicting signal |
| 3 | Homepage canonical points to `https://sierraverdelandscaping.com` (no www) but site is served on `www.` | Canonical/host mismatch — indexing confusion if `noindex` ever lifted |
| 4 | No LocalBusiness or Service schema for a local-service business in a competitive market (San Diego landscaping) | Loses local SERP enhancements, map pack signals, AI citation eligibility |
| 5 | No H1 anywhere; headings start at H3 and skip levels | Page-topic hierarchy unreadable to search engines |

### Top 5 Quick Wins

1. Remove the `noindex` meta tag in Wix SEO settings (Wix Dashboard → SEO → Robots Meta Tag → set to **index, follow**) for every page
2. In Wix SEO Tools, regenerate / verify the XML sitemap so `/sitemap.xml` returns valid XML (Wix usually auto-generates — the 404 suggests SEO Tools were disabled or the site was never published with SEO on)
3. Set canonical preference to `https://www.sierraverdelandscaping.com/` everywhere (Wix → Domain settings → primary domain), and update homepage canonical to match
4. Rewrite the homepage title from `Sierra Verde Landscaping` → `Sierra Verde Landscaping | San Diego Lawn Care & Landscape Maintenance` and add a 150-character meta description with the target keyword + location
5. Add LocalBusiness JSON-LD with NAP, service area cities (La Jolla, North Park, Kensington, Talmadge, Sorrento Valley), hours, phone (619) 384-1705, and a sameAs link to the Google Business Profile

---

## 1. Technical SEO  — Score: 5 / 100 🔴

### Crawlability
- **robots.txt:** Present, allows `/`, blocks lightbox params, blocks PetalBot, crawl-delay 10 on AhrefsBot/dotbot. **OK.**
- **Sitemap declared:** `https://www.sierraverdelandscaping.com/sitemap.xml` referenced in robots.txt — **but the URL returns a Wix 404 error page with its own `noindex`.** This is a critical contradiction.
- **HTTPS:** Enforced, HSTS header present (`strict-transport-security: max-age=31556952`). ✅
- **404 handling:** Custom 404 returned with proper `404` status. ✅

### Indexability
- **`noindex` on Home, /our-work, /contact** — confirmed via raw HTML inspection on all three discovered URLs. This is the single most damaging finding in the audit. Google will see these pages, obey the directive, and drop them from the index.
- **Canonical mismatch (Home):** Page is served at `https://www.sierraverdelandscaping.com/` but the canonical is `https://sierraverdelandscaping.com` (no www, no trailing slash). Inner pages (`/our-work`, `/contact`) have correct self-referential canonicals with `www.`.

### Security Headers
- `strict-transport-security: max-age=31556952` ✅
- `x-content-type-options: nosniff` ✅
- No `content-security-policy`, no `referrer-policy`, no `permissions-policy` — these are Wix-managed and not a ranking blocker but worth noting.

### Core Web Vitals (estimated, lab)
Not measured directly (no Google API credentials configured). Wix sites typically struggle with LCP on first paint due to large hero images and heavy client-side JS. Recommend running PageSpeed Insights manually on the homepage after the `noindex` is removed.

---

## 2. Content Quality (E-E-A-T) — Score: 25 / 100 🟠

### What's there
- Home page: ~800–900 words of brand storytelling, owner introduction (Gabriel), service overview, a customer testimonial, contact form.
- Owner-led, family-owned, established 2021 — clear **Experience** and **Person** signals (good for E-E-A-T).
- Testimonial present on home page — good trust signal, but only one quote and no reviewer name/photo.

### What's missing
- **No dedicated service pages.** Lawn care, hedge trimming, weed control, pruning, and irrigation are mentioned in one paragraph each on the home page rather than as standalone pages. Each is a separate search intent.
- **No location/service-area pages.** Six neighborhoods are named (La Jolla, Talmadge, North Park, Kensington, Sorrento Valley, San Diego) but no individual landing pages.
- **No blog or educational content** — zero topical authority signals. Competitors in San Diego landscaping typically rank with content like "best time to plant in San Diego," "drought-tolerant landscaping," "lawn irrigation schedules by season."
- **Thin "Our Work" page** — appears to be a gallery only, no captions, no project descriptions, no before/after copy.
- **No author bio / about page** for Gabriel beyond the home-page paragraph. E-E-A-T benefits from a dedicated About / Meet the Owner page.

---

## 3. On-Page SEO — Score: 20 / 100 🔴

| Element | Home | /our-work | /contact |
|---------|------|-----------|----------|
| Title | `Sierra Verde Landscaping` (24 chars — too short, no keywords/location) | `Our Work \| Sierra Verde Landscaping` (OK structure, no keywords) | `Contact \| Sierra Verde Landscaping` (OK structure) |
| Meta description | **Missing** | **Missing** | **Missing** |
| H1 | **Missing** (uses H3 for brand name) | **Missing** | **Missing** |
| H2 | Missing (only H3-H6 found) | Missing | Missing |
| Heading hierarchy | Broken (H3 → H4 → H6 with skips) | Broken | Broken |
| Keywords meta tag | `Lawn Care, Lawn Maintenance., Landscaping, Lawn.` (deprecated tag, ignored by Google, signals amateur SEO) | n/a | n/a |
| Open Graph image | **Missing** (no `og:image`) | Missing | Missing |
| Twitter card | **Missing** | Missing | Missing |
| Internal linking | Three nav links only (Home / Our Work / Contact) | Same | Same |

### Other on-page issues
- Image alt text is generic / based on filename per WebFetch sample. Critical for a visual-heavy landscaping business.
- Phone number `(619) 384-1705` is in text but not wrapped in `tel:` link (verify in Wix — may render at runtime).

---

## 4. Schema / Structured Data — Score: 15 / 100 🟠

### Present
```json
{
  "@context": "https://schema.org/",
  "@type": "WebSite",
  "name": "Sierra Verde Landscaping",
  "url": "https://www.sierraverdelandscaping.com"
}
```
That's it. One block. The bare minimum.

### Missing (high impact for a local service business)
- **LocalBusiness** or, more specifically, **`GardeningService`** (a recognized Schema.org subtype of LocalBusiness) — NAP, hours, geo, service area, image
- **Service** schema for each major service (lawn maintenance, irrigation, hedge trimming, etc.)
- **Person** schema for Gabriel
- **Review / AggregateRating** schema (the testimonial on the home page is unmarked)
- **BreadcrumbList** schema on inner pages
- **FAQPage** — *do not add* purely for Google rich results (FAQ rich snippets are restricted to government/healthcare since Aug 2023). However, an FAQ section in plain HTML is still valuable for AI/LLM citation.

> **Do not use `HowTo` schema** — deprecated for rich results since September 2023.

---

## 5. Performance (Core Web Vitals) — Score: 50 / 100 🟡

Not directly measured (no Google API credentials or PageSpeed run in this audit). Inferred risk factors:
- Wix-hosted, which historically struggles with LCP and TBT due to React + Parastorage client-side rendering
- 167 KB of HTML on the homepage alone (heavy)
- Multiple polyfill scripts loaded synchronously
- Fastly + Wix CDN serving — `x-cache-status: HIT` confirms edge caching is working ✅
- HSTS preload not yet, but max-age is one year ✅

**Action:** run PageSpeed Insights (web.dev/measure or pagespeed.web.dev) after `noindex` is removed. INP is the metric to watch (replaced FID in March 2024).

---

## 6. Images — Score: 30 / 100 🟠

- Per WebFetch inspection, most images use Wix CDN URLs with **generic / numeric filenames and weak or missing alt text**. For a landscaping business, where visual portfolio carries the buying decision, this is a meaningful miss for both accessibility and image search.
- Recommendation: rename or relabel images by project (e.g., "drought-tolerant front yard La Jolla", "irrigation install North Park") and write descriptive alt text following the pattern `[what] in [where]: [detail]`.

---

## 7. AI Search Readiness (GEO) — Score: 10 / 100 🔴

- `noindex` cascades into AI search visibility. ChatGPT (via Bing / OAI scraper), Perplexity (via Bing), and Google AI Overviews all rely on the same indexability signals. **AI tools will not cite a noindexed page.**
- **No `/llms.txt`** (404). This is a soft signal but increasingly noted as a "table-stakes" file for LLM crawlers.
- **No author / expertise / publication-date signals** on content pages — these are the strongest features of AI-cited pages (Perplexity citation studies, late 2024 / early 2025).
- **No FAQ block** in plain HTML — passage-level citability is low.

---

## 8. Local SEO — Score: 25 / 100 🟠

### NAP Consistency
- **Name:** Sierra Verde Landscaping (consistent)
- **Address:** Not displayed on home page (only city/neighborhood names) — typical for a service-area business with no storefront. **OK** per SAB best practices, but the LocalBusiness schema should still declare `areaServed`.
- **Phone:** `(619) 384-1705` — displayed as text only; should also be wrapped in a `tel:` link for mobile click-to-call.
- **Email:** `gabriel@sierraverdelandscaping.com` — present.

### Google Business Profile
- Page links to "See More Reviews" pointing to a Google reviews page — implies a GBP exists. **Verify it's claimed, has photos, services list, and Q&A populated.**

### Social Profiles
- YouTube, Instagram, Facebook, Pinterest icons in footer — confirm each is active and linked correctly, and **add as `sameAs` URLs in the LocalBusiness schema** once that schema is added.

### Service-Area Pages
- None. For a SAB serving five named neighborhoods in San Diego, dedicated pages for each (e.g., `/landscaping-la-jolla`, `/landscaping-north-park`) would be a strong content investment — provided each page has genuinely unique content (per quality gates: 60%+ unique content for location pages).

> **Quality gate note:** This site has zero location pages today, well below the 30-page warning threshold. Recommendation here is to **start with 3–5 high-priority neighborhoods with deep unique content**, not to generate templated pages at scale.

---

## Site Architecture

The site has only **3 reachable pages**: `/`, `/our-work`, `/contact`. This is extremely thin for a service business that lists 5 distinct services across 6 service areas. There is significant content opportunity (and competitive pressure — San Diego landscaping is a high-volume, high-competition local market).

Recommended architecture (post-fix):

```
/                              (home — value prop, services overview, CTA)
/services/                     (services index)
  /services/lawn-maintenance
  /services/irrigation
  /services/hedge-trimming
  /services/weed-control
  /services/pruning
/service-areas/                (service area index)
  /service-areas/la-jolla
  /service-areas/north-park
  /service-areas/kensington
  /service-areas/talmadge
  /service-areas/sorrento-valley
/our-work                      (existing — keep, add captions)
/about                         (new — Gabriel's story, E-E-A-T)
/blog                          (new — seasonal advice for SD homeowners)
/contact                       (existing)
```

---

## Crawl Limitations

- This audit used direct HTTP fetches (`curl`) and `WebFetch` rather than a full headless crawler. Wix renders much content client-side; some elements (rendered headings, schema injected post-load, lazy-loaded content) may differ. **Spot-check the live site in a browser with View Source / Lighthouse before acting on the H1 finding** — but the `noindex` and sitemap-404 findings were confirmed in the raw delivered HTML and are not rendering-dependent.

