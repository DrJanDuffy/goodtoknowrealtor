# Best practices (Dr. Jan Duffy — Good To Know REALTOR®)

## Branding & NAP

- **Name:** Always use **Dr. Jan Duffy** (never "Janet") in copy, meta, schema, aria-labels, and alt text.
- **Phone:** Primary CTA **702-222-1964**; use `tel:702-222-1964` and `sms:702-222-1964`. Keep in sync with `SEO_CONFIG.phone` in `src/lib/seo.ts`.
- **NAP:** Match Google Business Profile exactly (visible text + JSON-LD). Run the [NAP/GBP audit](NAP-GBP-AUDIT.md) monthly.

## SEO & schema

- **Schema:** Use `RealEstateAgent` (subtype of LocalBusiness) on all pages. Include `name`, `telephone`, `address`, `url`; add `openingHours`, `geo`, `aggregateRating`, `image` where available.
- **FAQ:** Add `FAQPage` schema to any page with FAQ content.
- **Listings:** Use `RealEstateListing` schema on individual property/listing pages.
- **Single source of truth:** Update `src/lib/seo.ts` (`SEO_CONFIG` and schema helpers) when NAP or site URL changes; then run a quick grep to ensure no hardcoded duplicates.

## Code

- **Build:** Prefer `vercel build` for production. Cloudflare: DNS only (gray cloud), no proxy.
- **RealScout:** Load script once in root layout; widgets via `dangerouslySetInnerHTML`. CSP must include both `em.realscout.com` and `www.realscout.com` (script-src and connect-src).
- **IDX/MLS:** Always show MLS disclaimer and listing attribution. Do not change `components/idx/*` without explicit approval.
- **Before large changes:** Summarize task, assumptions, and plan; get confirmation. No file deletion or broad refactors without approval.

## Content & links

- **Communities:** Expert neighborhood names are in `src/data/neighborhoods.ts`; use these exact names. Primary routes: `/areas/[slug]`, `/communities`, `/listings`, `/listings/communities`.
- **Anchor text:** Use localized, descriptive links (e.g. "Luxury homes in Summerlin", "Homes for sale in Green Valley").
- **Images:** Alt text should include location or service where relevant; never use "Janet" in alt text.

## Related

- [AI-RULES.md](AI-RULES.md) — AI rule files and quick reference  
- [NAP-GBP-AUDIT.md](NAP-GBP-AUDIT.md) — Monthly NAP/GBP checklist  
