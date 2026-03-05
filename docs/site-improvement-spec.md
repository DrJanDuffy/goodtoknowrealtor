# Goodtoknowrealtor site improvement spec (Artifact)

**Scope:** Goodtoknowrealtor — Dr. Jan Duffy, Next.js 15, Las Vegas/Henderson.  
**Use:** Prioritized list; implement by section or by item. File/area hints for each.

---

## 1. SEO

| # | Current / gap | Desired | File / area |
|---|----------------|---------|--------------|
| 1.1 | Metadata can drift per page | All pages use `generatePageMetadata()` or PAGE_SEO from `src/lib/seo.ts`; no hardcoded titles that bypass template | `src/app/**/page.tsx` |
| 1.2 | Schema: RealEstateAgent in layout | Keep; ensure every key page has or inherits RealEstateAgent; add FAQPage where FAQ sections exist | `src/app/layout.tsx`, `src/lib/seo.ts`, pages with FAQ |
| 1.3 | NAP/GBP | Single source: `SEO_CONFIG` in `src/lib/seo.ts`; visible NAP and JSON-LD match GBP; "Dr. Jan Duffy" (never "Janet") everywhere | `src/lib/seo.ts`, Footer, Contact, schema helpers |
| 1.4 | Internal linking | Localized anchor text (e.g. "Luxury homes in Summerlin"); links to `/areas/[slug]`, `/communities`, `/listings` | Content in `src/app`, `src/components` |
| 1.5 | Canonicals | Each page has correct canonical; use `metadataBase` + path or explicit alternate in metadata | `src/lib/seo.ts`, page metadata |
| 1.6 | Listing pages | RealEstateListing schema on individual listing/property pages if applicable | Listing detail pages, `src/lib/seo.ts` |

---

## 2. Performance

| # | Current / gap | Desired | File / area |
|---|----------------|---------|--------------|
| 2.1 | Images | Use `next/image` where possible; width/height or fill; priority for above-fold hero images | `src/app`, `src/components` |
| 2.2 | Lazy loading | Below-fold images: `loading="lazy"` or Next Image default; avoid eager for non-hero | Components with `<img>` or `next/image` |
| 2.3 | Format | Prefer WebP/AVIF via Next Image; avoid large PNG/JPG for new assets | `next.config.*`, image sources |
| 2.4 | Bundle | Keep client components minimal; dynamic import heavy widgets (e.g. RealScout) if needed | `src/app/layout.tsx`, widget wrappers |
| 2.5 | Fonts | Layout uses `next/font` with `display: 'swap'` — keep | `src/app/layout.tsx` |
| 2.6 | Core Web Vitals | WebVitalsMonitor present; fix any LCP/CLS/INP issues (images, layout shift) | `src/app/layout.tsx`, hero sections |

---

## 3. Accessibility

| # | Current / gap | Desired | File / area |
|---|----------------|---------|--------------|
| 3.1 | Semantic HTML | Use `<main>`, `<nav>`, `<section>`, `<article>`, headings in order (h1 → h2 → h3) | All pages and layouts |
| 3.2 | ARIA | Buttons/links that are icon-only or ambiguous have `aria-label`; CTAs: e.g. "Call Dr. Jan Duffy (702) 222-1964" | `MobileStickyCTA`, `StandardCTA`, Navigation, Footer |
| 3.3 | Focus | Visible focus styles; no focus traps; skip link to main content where applicable | `globals.css`, layout, Navigation |
| 3.4 | Contrast | Text meets WCAG AA (4.5:1 normal, 3:1 large); avoid low-contrast gray on gray | Tailwind classes, `globals.css` |
| 3.5 | Form labels | Every form field has a visible `<label>` or `aria-label`; errors associated with `aria-describedby` | Forms in `src/components`, contact/seller forms |
| 3.6 | Screen reader | ScreenReaderAnnouncementsProvider in layout — keep | `src/app/layout.tsx` |

---

## 4. Content / UX

| # | Current / gap | Desired | File / area |
|---|----------------|---------|--------------|
| 4.1 | Primary CTA | All primary CTAs: Call/Text **702-222-1964**; use `tel:702-222-1964` and `sms:702-222-1964` | Site-wide; `SEO_CONFIG.phone` |
| 4.2 | Above-the-fold | Hero clearly states value prop and primary CTA; minimal clutter | `PageHero`, homepage, key landing pages |
| 4.3 | Mobile CTAs | Sticky or prominent Call/Text on mobile (e.g. MobileStickyCTA); tap targets ≥44px | `MobileStickyCTA`, Navigation |
| 4.4 | Trust signals | Testimonials, credentials, GBP link, review schema where appropriate | Homepage, Contact, Footer |
| 4.5 | Communities | Correct 120+ Las Vegas/Henderson names; links to `/areas/[slug]`, `/communities` | Copy and links across site |

---

## Implementation order (suggested)

1. **SEO:** 1.3 (NAP/GBP + Dr. Jan), 1.1 (metadata consistency), 1.4 (internal linking).
2. **Performance:** 2.1–2.3 (images), 2.6 (CWV check).
3. **Accessibility:** 3.1 (semantic), 3.2 (ARIA on CTAs), 3.5 (form labels).
4. **Content/UX:** 4.1 (CTA consistency), 4.3 (mobile CTAs), 4.4 (trust).

Reference: [BEST-PRACTICES.md](./BEST-PRACTICES.md), [NAP-GBP-AUDIT.md](./NAP-GBP-AUDIT.md), [architecture-route-map.md](./architecture-route-map.md).

---

*This document is the Site improvement spec Artifact. Implement by section (e.g. "Implement the SEO section") or by item.*
