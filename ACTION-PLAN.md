# Action Plan — sierraverdelandscaping.com

Prioritized by impact. **Stop after the Critical block, verify in Google Search Console, then proceed.** Nothing else matters until the site is indexable.

---

## 🔴 CRITICAL — Fix immediately (today)

### C1. Remove `noindex` from every page
**Where:** Wix Dashboard → SEO → SEO Settings → for each page (Home, Our Work, Contact): set "Let search engines index this page" to **ON**. (If you have a global "Hide site from search engines" toggle in Wix → Settings → SEO, that is the master switch — flip it off first.)
**Verify:** After saving and publishing, re-check `view-source:https://www.sierraverdelandscaping.com/` — the `<meta name="robots" content="noindex">` line should be **gone** (or read `index, follow`).
**Why this is #1:** Google obeys `noindex` literally. As long as it's there, every other SEO improvement on this site is wasted effort.

### C2. Fix the XML sitemap
**Where:** Wix Dashboard → SEO → Tools → Sitemap. Confirm "Auto-generate sitemap" is ON. Re-publish the site.
**Verify:** `https://www.sierraverdelandscaping.com/sitemap.xml` should return valid XML listing your pages (not a Wix 404 page).
**Then:** Submit the sitemap in Google Search Console → Sitemaps → enter `sitemap.xml`.

### C3. Fix canonical host inconsistency
**Where:** Wix Dashboard → Domains → set `www.sierraverdelandscaping.com` as the **primary** domain (or non-www, your choice — just pick one). Then in SEO settings, verify the canonical URL pattern matches.
**Verify:** Homepage canonical should read `<link rel="canonical" href="https://www.sierraverdelandscaping.com/"/>` (or non-www if you chose that).

---

## 🟠 HIGH — Fix within 1 week (after Critical block is live and verified indexed)

### H1. Rewrite the homepage title and add a meta description
- **Title (60 chars max):** `San Diego Landscaping & Lawn Care | Sierra Verde Landscaping`
- **Meta description (150–160 chars):** `Family-owned landscaping in San Diego. Lawn maintenance, irrigation, pruning, and hedge trimming for La Jolla, North Park, Kensington & more. Free quote.`
- **Where:** Wix Dashboard → SEO Settings (per page).

### H2. Add a proper heading hierarchy
- One H1 per page, descriptive and keyword-aware.
  - Home: `San Diego Lawn Care & Landscape Maintenance`
  - Our Work: `Our Landscaping Projects in San Diego`
  - Contact: `Contact Sierra Verde Landscaping`
- Then H2s for major sections (Services, About, Service Areas, Testimonials).
- **In Wix:** select each text block → set the Tag in the text editor (Title → H1, Subtitle → H2, etc.).

### H3. Add LocalBusiness (GardeningService) JSON-LD
Paste in Wix Dashboard → Settings → Custom Code → Add Custom Code → `<head>` section (apply to all pages):

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "GardeningService",
  "name": "Sierra Verde Landscaping",
  "image": "https://www.sierraverdelandscaping.com/og-image.jpg",
  "url": "https://www.sierraverdelandscaping.com/",
  "telephone": "+1-619-384-1705",
  "email": "gabriel@sierraverdelandscaping.com",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "San Diego",
    "addressRegion": "CA",
    "addressCountry": "US"
  },
  "areaServed": [
    {"@type": "City", "name": "La Jolla"},
    {"@type": "City", "name": "North Park"},
    {"@type": "City", "name": "Kensington"},
    {"@type": "City", "name": "Talmadge"},
    {"@type": "City", "name": "Sorrento Valley"},
    {"@type": "City", "name": "San Diego"}
  ],
  "sameAs": [
    "REPLACE_WITH_FACEBOOK_URL",
    "REPLACE_WITH_INSTAGRAM_URL",
    "REPLACE_WITH_YOUTUBE_URL",
    "REPLACE_WITH_PINTEREST_URL",
    "REPLACE_WITH_GOOGLE_BUSINESS_PROFILE_URL"
  ],
  "founder": {"@type": "Person", "name": "Gabriel"},
  "foundingDate": "2021"
}
</script>
```
**Validate after publishing:** [search.google.com/test/rich-results](https://search.google.com/test/rich-results) — paste your homepage URL.

### H4. Claim / optimize the Google Business Profile
- Confirm GBP is claimed and verified
- Add the same NAP, hours, service-area cities, and 5+ photos of recent work
- Add services list matching the schema above
- Enable messaging if available

### H5. Add an `og:image` and Twitter card meta
Wix lets you set a default social share image in SEO Settings. Use a high-quality landscape photo (1200×630px). Without this, links shared on Facebook/Twitter/LinkedIn render with no preview image.

### H6. Remove the deprecated `keywords` meta tag
The `<meta name="keywords" content="Lawn Care, Lawn Maintenance., Landscaping, Lawn.">` does nothing for Google and signals outdated optimization. Wix usually has a checkbox for this in SEO Settings — uncheck or clear it.

---

## 🟡 MEDIUM — Fix within 1 month

### M1. Build 5 dedicated service pages
One page per service: lawn maintenance, irrigation, hedge trimming, weed control, pruning. **Minimum 600 words each**, with:
- Description of the service
- What's included (bullet list)
- Typical project examples (with photos from /our-work)
- Pricing transparency or "starting from" guidance
- FAQ section (3–5 questions in plain HTML — no FAQPage schema needed)
- CTA to the contact form

### M2. Build 3 service-area pages (start with the highest-value neighborhoods)
Suggested first three based on real-estate value and lawn-care demand in San Diego: **La Jolla, North Park, Kensington**. Each page needs to be **genuinely unique** (per quality gates — at least 60% unique content), not a template with the city name swapped in. Include:
- Specific knowledge of local climate / soil / HOA constraints for that neighborhood
- Photos of actual work done in that neighborhood
- 1–2 named-client testimonials from that area (with permission)

### M3. Add a real About page
Gabriel's story, photo, why they started in 2021, credentials/licenses if any, philosophy ("community, values, long-lasting relationships" is already on the home page — expand it). This is the strongest E-E-A-T signal a small service business can deploy.

### M4. Fix image alt text and filenames
Rename Wix media files to descriptive names. Write alt text following the pattern `[what] in [where]: [detail]` — e.g., "Drought-tolerant front yard in La Jolla with succulents and decomposed granite path."

### M5. Add Review / AggregateRating schema after Reviews are pulled in
Once the GBP is active and has 5+ reviews, add `aggregateRating` to the LocalBusiness schema. Pull individual reviews onto the home page (with reviewer first name + neighborhood) and mark with `Review` schema.

### M6. Wrap the phone number in a `tel:` link
Mobile users tapping `(619) 384-1705` should get a call-prompt, not a text-selection cursor.

---

## 🟢 LOW — Backlog

### L1. Start a small blog (1 post / month)
Seasonal SD landscaping topics: "When to plant in San Diego," "Drought-resistant lawn alternatives," "How often to water lawns in summer SD." These are high-volume, low-competition local searches and they feed AI Overview citations.

### L2. Add `/llms.txt`
A simple text file at the root describing the business and key URLs for LLM crawlers. Low effort, modest upside.

### L3. Add breadcrumb schema once inner pages exist
Once `/services/lawn-maintenance` etc. are live, add `BreadcrumbList` JSON-LD to each.

### L4. Run PageSpeed Insights after content additions
Track LCP and INP. Wix lazy-loads aggressively; the main risk is large hero images. Compress to WebP and serve under 200 KB each.

### L5. Set up Google Search Console + Bing Webmaster
After `noindex` is removed and the sitemap is valid, submit the property to both. Watch for "Discovered – currently not indexed" errors over the first 2 weeks.

---

## Verification checklist (run this 48 hours after fixing the Critical items)

- [ ] `view-source:https://www.sierraverdelandscaping.com/` — no `noindex` line
- [ ] `https://www.sierraverdelandscaping.com/sitemap.xml` returns valid XML
- [ ] `https://www.sierraverdelandscaping.com/robots.txt` still references the (now valid) sitemap
- [ ] Google Search Console: property verified, sitemap submitted, no manual actions
- [ ] `site:sierraverdelandscaping.com` in Google → at minimum the homepage appears within 7–14 days
- [ ] Rich Results Test on homepage → LocalBusiness schema detected with no errors
- [ ] All three pages have unique titles, unique meta descriptions, one H1 each

---

## What I did NOT check (and why)

| Item | Reason | How to get it |
|------|--------|---------------|
| Real Core Web Vitals field data | No Google API credentials configured | Run `python scripts/google_auth.py setup` then `/seo google cwv https://www.sierraverdelandscaping.com/` |
| Backlink profile | No Moz/Bing/DataForSEO credentials | `/seo backlinks https://www.sierraverdelandscaping.com/` after configuring an API |
| Live SERP positions for "landscaping san diego" | No DataForSEO MCP available | Install DataForSEO extension, then `/seo dataforseo serp "landscaping san diego"` |
| Geo-grid local rank tracking around San Diego | No DataForSEO + Maps API | `/seo maps geo-grid` once DataForSEO is set up |
| Headless render of Wix JS-rendered content | Not in this audit's scope | Run `/seo page https://www.sierraverdelandscaping.com/` for a deeper single-page render |
