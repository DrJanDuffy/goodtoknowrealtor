# Monthly NAP & GBP audit checklist

Use this checklist each month so NAP, CTAs, and schema stay aligned with the Google Business Profile. Per project rules: NAP must match GBP on every page (visible text + JSON-LD).

## 1. Google Business Profile

- [ ] Log into GBP and note current **name**, **address**, **phone**, **hours**, **website**.
- [ ] If anything changed, update this repo and complete steps 2–5.

## 2. Single source of truth (this repo)

- [ ] **Phone:** Matches GBP exactly. Primary CTA: **702-222-1964**; use `tel:702-222-1964` and `sms:702-222-1964` in links.
- [ ] **Name:** Dr. Jan Duffy (never "Janet") everywhere — copy, meta, OG, schema, image filenames/alt text. To find "Janet" references: `rg -i "janet" --type-add 'web:*.{tsx,ts,jsx,js}' -t web src` and fix to "Jan".
- [ ] **Address:** Matches GBP in visible NAP blocks and in JSON-LD (e.g. `src/lib/seo.ts` and any schema helpers).
- [ ] **Hours:** If you expose hours on the site, they match GBP.

Check at least:

- `src/lib/seo.ts` — `SEO_CONFIG.phone`, `address`, and any default titles/descriptions.
- Root layout and footer for visible NAP and schema.
- OG/default meta image strings (no "Janet").

## 3. CTA consistency

- [ ] All click-to-call / click-to-text use **702-222-1964** (no other numbers unless intentionally different, e.g. office).
- [ ] No hardcoded alternate numbers in components unless documented.

Quick check from repo root:

```bash
rg "tel:|sms:|702-" --type-add 'web:*.{tsx,ts,jsx,js}' -t web src
```

Confirm every number is 702-222-1964 (or an approved exception).

## 4. Schema (JSON-LD)

- [ ] Every page has LocalBusiness/RealEstateAgent schema (or inherits from layout).
- [ ] Schema includes: `name`, `telephone`, `address`, `url`; optionally `openingHours`, `geo`, `aggregateRating`, `image`.
- [ ] Schema `telephone` and `address` match GBP exactly.
- [ ] FAQ pages/sections have FAQPage schema where appropriate.
- [ ] Listing pages use RealEstateListing schema where applicable.

## 5. Key pages spot-check

- [ ] Homepage: NAP in visible text and in schema; primary CTA is 702-222-1964.
- [ ] Contact page: NAP, map, Call/Directions/Reviews; schema present.
- [ ] Area/community pages: Correct agent name and CTA; schema present.
- [ ] Any page with FAQ: FAQ schema if you use it.

## 6. After changes

- [ ] Run a production build: `vercel build` (or `npm run build`).
- [ ] Test a few URLs with [Google Rich Results Test](https://search.google.com/test/rich-results) or schema validator.
- [ ] If GBP changed, request re-crawl for updated URLs in Search Console.

## 7. Quick verification commands (one-liners)

Run from repo root to verify NAP/CTA and naming consistency:

```bash
# Find any "Janet" (should be "Jan") in src
rg -i "janet" --type-add 'web:*.{tsx,ts,jsx,js}' -t web src

# List all tel/sms and 702-* usages (confirm 702-222-1964 only)
rg "tel:|sms:|702-" --type-add 'web:*.{tsx,ts,jsx,js}' -t web src

# Confirm RealEstateAgent / LocalBusiness in schema
rg "RealEstateAgent|LocalBusiness" src/lib/seo.ts src/app/layout.tsx

# Check SEO_CONFIG is single source (phone, address)
rg "SEO_CONFIG\.(phone|address)" src
```

Use monthly or after any GBP change.

---

**Reference:** Agent and rule context — see [AI-RULES.md](./AI-RULES.md). NAP/CTA rules are also in `.cursorrules` and `SKILL.md`.
