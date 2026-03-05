# Preparing the site for AI platforms

This doc describes how the site is set up for AI crawlers, AI search (e.g. Perplexity, ChatGPT, Google AI Overviews), and LLM-friendly discovery.

## What’s in place

### 1. llms.txt (LLM-friendly summary)

- **URL:** `https://www.goodtoknowrealtor.com/llms.txt`
- **Source:** `src/app/llms.txt/route.ts`
- **Spec:** [llmstxt.org](https://llmstxt.org/) — Markdown at `/llms.txt` for AI/LLM consumption.

The file includes:

- **H1 + blockquote:** Site name and one-line description (Dr. Jan Duffy, Top 1%, Las Vegas/Henderson expertise).
- **About & contact:** Home, About, Contact with clear CTA (702-222-1964).
- **Services & listings:** Listings, Luxury, Services, Home value.
- **Areas & neighborhoods:** Communities index, key area pages (Summerlin, Henderson, Green Valley), and a short note that 120+ expert neighborhoods have pages under `/areas/[slug]`.
- **Guides & tools:** Buyer/seller guides, assessments, Why list with us.
- **Optional:** Blog, Market insights, Testimonials, Sitemap (for when context allows).

Use this when:

- Submitting the site to AI directories (e.g. [directory.llmstxt.cloud](https://directory.llmstxt.cloud/)).
- Checking that AI assistants can describe the business and link to the right pages.

### 2. robots.txt (crawler access)

- **URL:** `https://www.goodtoknowrealtor.com/robots.txt`
- **Source:** `src/app/robots.ts`

Rules:

- **Default:** `User-agent: *` — `Allow: /`.
- **AI crawlers allowed:** GPTBot, ChatGPT-User, ClaudeBot, Claude-Web, PerplexityBot, OAI-SearchBot, Applebot-Extended, Bytespider, Google-Extended, CCBot, cohere-ai, Meta-ExternalAgent.
- **Sitemap:** Canonical sitemap URL (from `SEO_CONFIG.siteUrl`).
- **Host:** Canonical host (production URL).

No paths are disallowed for these bots; the site is open for indexing and AI ingestion.

### 3. Sitemap

- **URL:** `https://www.goodtoknowrealtor.com/sitemap.xml`
- **Source:** `src/app/sitemap.ts`

Includes main pages, area/neighborhood pages, blog posts, and blog categories. Referenced in `robots.txt` so crawlers and GSC can discover all indexable URLs.

### 4. Structured data (JSON-LD)

- **Location:** Root layout and key pages (`src/lib/seo.ts`, page-level scripts).
- **Types:** RealEstateAgent (LocalBusiness), WebSite, FAQPage, Review, Service, BreadcrumbList where applicable.

Helps search engines and AI systems understand the business, NAP, services, and reviews.

### 5. NAP and content consistency

- **NAP:** Matches Google Business Profile; single source in `SEO_CONFIG` and schema.
- **Expert neighborhoods:** Canonical list in `src/data/neighborhoods.ts`; used in llms.txt, area pages, and Cursor/Claude rules so AI can cite correct area names.

## How to update for AI platforms

| Task | Where |
|------|--------|
| Change site summary or key links for AI | `src/app/llms.txt/route.ts` |
| Allow or disallow an AI crawler | `src/app/robots.ts` |
| Add or remove sitemap URLs | `src/app/sitemap.ts` |
| Change business info (NAP, name, phone) | `src/lib/seo.ts` (SEO_CONFIG + schema helpers) |
| Change expert neighborhood list | `src/data/neighborhoods.ts` (then refresh llms.txt copy if you mention neighborhoods there) |

## Optional: Submit llms.txt to directories

- [directory.llmstxt.cloud](https://directory.llmstxt.cloud/)
- [llmstxt.site](https://llmstxt.site/)

Submitting `https://www.goodtoknowrealtor.com/llms.txt` can improve discoverability by AI tools that use these indexes.

## Related

- [GOOGLE-SEARCH-CONSOLE.md](GOOGLE-SEARCH-CONSOLE.md) — Verification and sitemap submission for Google.
- [NAP-GBP-AUDIT.md](NAP-GBP-AUDIT.md) — Monthly NAP/GBP alignment (relevant for local and AI answers).
- [AI-RULES.md](AI-RULES.md) — Project and AI rule files for this repo.
