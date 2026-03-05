# Dr. Jan Duffy — Good To Know REALTOR® (Project skill)

Use when working on this real estate site: persona, Las Vegas/Henderson hyperlocal content, NAP/CTA, schema, IDX, RealScout, and code standards.

## Agent & branding

| Field | Value |
|-------|-------|
| **Name** | Dr. Jan Duffy (NEVER "Janet") |
| **License** | S.0197614.LLC |
| **Brokerage** | Berkshire Hathaway HomeServices Nevada Properties |
| **Market** | Las Vegas / Henderson, NV |
| **Primary CTA** | Call/Text **702-222-1964** — `tel:702-222-1964`, `sms:702-222-1964` (verify for this site only) |
| **NAP** | Must exactly match Google Business Profile on every page (visible text + JSON-LD). Audit monthly. |

## Tech stack

- **Framework:** Next.js 15 App Router, TypeScript, Tailwind CSS
- **Hosting:** Vercel (prefer `vercel build` over local npm build)
- **Integrations:** RealScout (MLS/widgets), schema markup (RealEstateAgent, FAQPage, RealEstateListing)
- **DNS:** Cloudflare DNS only (gray cloud) when using Vercel — no orange proxy

## Hyperlocal: expert neighborhoods

Dr. Jan Duffy is an expert in these Las Vegas/Henderson neighborhoods. Use these exact names in copy, meta, and internal links. Canonical list: `src/data/neighborhoods.ts`.

**Expert neighborhoods:** Aliante, Alta Mira, Anthem, Anthem Country Club, Anthem Highlands, Ardiente, Arlington Ranch, Artesia, Ascaya, Black Mountain Vistas, Burson Ranch, Cadence, Calico Ridge, Canyon Estates, Canyon Gate, Centennial Hills, Champion Village, Comstock Park, Coronado Ranch, Cottonwoods, Desert Greens, Desert Inn Country Club, Desert Shores, Desert Trails, Eldorado, Elkhorn Ranch, Elkhorn Springs, Foothills at Mac Donald Ranch, Green Valley, Green Valley Ranch, Green Valley South, Highlands Ranch, Hillsboro, Inspirada, Iron Mountain Ranch, Lake Las Vegas, Las Casitas, Las Vegas Country Club, Legacy, Lone Mountain, Lone Mountain West, Los Prados, Lynbrook, MacDonald Highlands, MacDonald Ranch, Madeira Canyon, McNeill, Mesa Verde, Mira Villa, Mission Hills, Monaco, Montecito, Mountain Falls, Mountains Edge, Mt. Charleston Golf Estates, Nevada Trails, North Shores, Painted Desert, Paradise Hills, Park Highlands, Peccole Ranch, Pleasant Valley, Providence, Queensridge, Rancho Circle, Rancho Las Palmas, Red Rock Country Club, Rhodes Ranch, Riverstone, Roma Hills, Scotch 80s, Seven Hills, Shadow Hills, Siena, Silver Springs, Silverado Ranch, Silverstone Ranch, Skye Canyon, Solera, South Shore, South Valley Ranch, Southern Highlands, Southern Terrace, Southfork, Southwest Ranch, Spanish Hill, Spanish Oaks, Spanish Trail, Spring Mountain Ranch, Spring Valley, Stallion Mountain, Summerlin, Summerlin Hills, Summerlin North, Summerlin South, Summerlin West, Sun City Aliante, Sun City Anthem, Sun City MacDonald Ranch, Sun City Summerlin, Sunridge at Mac Donald Ranch, The Bluffs, The Cliffs, The Lakes, The Mesa, The Pueblo, The Ridges, The Vineyards, The Vistas, The Willows, Tierra De Las Palmas, Town Center, Tuscany, Valley Vista, Whitney Ranch, Winery, Woodcrest.

**Primary areas (have `/areas/*` pages):** Las Vegas, Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, Green Valley.

**Internal links:** Use localized anchor text (e.g. "Luxury homes in Summerlin", "Homes for sale in Green Valley"). Link to `/areas/[slug]`, `/communities`, `/listings`, `/listings/communities` as appropriate.

## Code & content standards

- **Schema:** LocalBusiness/RealEstateAgent on all pages (openingHours, telephone, address, geo); FAQPage on FAQ sections; RealEstateListing on listing pages.
- **SEO:** Localized title tags, meta descriptions, H1s; business type, services, primary service area; image alt text with location/service.
- **GBP:** Business hours, map embed, "Call", "Directions", "View Google Reviews" where relevant; review schema for star ratings; FAQ from typical GBP questions.
- **IDX/MLS:** Always display MLS disclaimer and listing attribution. Do not modify `/components/idx/*` without explicit approval.
- **RealScout:** Load script once in root layout; use `dangerouslySetInnerHTML` for widgets. CSP: both `em.realscout.com` and `www.realscout.com` in `script-src` and `connect-src`.
- **Process:** Before significant code changes, summarize task, assumptions, and plan; wait for confirmation. Never delete files or refactor without explicit approval.

## Never

- Use "Janet" for Dr. Jan Duffy
- Mismatch NAP or CTA phone with GBP
- Omit MLS disclaimer or attribution on IDX
- Proxy through Cloudflare (orange cloud) when using Vercel
