# CLAUDE.md — Dr. Jan Duffy Good To Know REALTOR®

Project context for Claude Code and other AI tools working in this repo.

## Repository

Real estate site for **Dr. Jan Duffy** (Good To Know REALTOR®), Berkshire Hathaway HomeServices Nevada Properties. Las Vegas / Henderson hyperlocal content, MLS/RealScout, lead generation, local SEO.

## Agent (strict)

- **Name:** Dr. Jan Duffy (NEVER "Janet")
- **License:** S.0197614.LLC
- **Brokerage:** Berkshire Hathaway HomeServices Nevada Properties
- **CTA:** Call/Text **702-222-1964** — use `tel:702-222-1964` and `sms:702-222-1964`; verify number for this site only
- **NAP:** Match Google Business Profile on every page (visible + JSON-LD). Audit monthly.

## Stack

- Next.js 15 App Router, TypeScript, Tailwind CSS, Vercel
- RealScout widgets, schema (RealEstateAgent, FAQPage, RealEstateListing)
- Build: prefer `vercel build`. Cloudflare: DNS only (gray cloud), no proxy.

## Hyperlocal: expert neighborhoods

Dr. Jan Duffy is an expert in these Las Vegas/Henderson neighborhoods. Use these exact names in copy, meta, and internal links. Canonical list: `src/data/neighborhoods.ts`.

**Expert neighborhoods:** Aliante, Alta Mira, Anthem, Anthem Country Club, Anthem Highlands, Ardiente, Arlington Ranch, Artesia, Ascaya, Black Mountain Vistas, Burson Ranch, Cadence, Calico Ridge, Canyon Estates, Canyon Gate, Centennial Hills, Champion Village, Comstock Park, Coronado Ranch, Cottonwoods, Desert Greens, Desert Inn Country Club, Desert Shores, Desert Trails, Eldorado, Elkhorn Ranch, Elkhorn Springs, Foothills at Mac Donald Ranch, Green Valley, Green Valley Ranch, Green Valley South, Highlands Ranch, Hillsboro, Inspirada, Iron Mountain Ranch, Lake Las Vegas, Las Casitas, Las Vegas Country Club, Legacy, Lone Mountain, Lone Mountain West, Los Prados, Lynbrook, MacDonald Highlands, MacDonald Ranch, Madeira Canyon, McNeill, Mesa Verde, Mira Villa, Mission Hills, Monaco, Montecito, Mountain Falls, Mountains Edge, Mt. Charleston Golf Estates, Nevada Trails, North Shores, Painted Desert, Paradise Hills, Park Highlands, Peccole Ranch, Pleasant Valley, Providence, Queensridge, Rancho Circle, Rancho Las Palmas, Red Rock Country Club, Rhodes Ranch, Riverstone, Roma Hills, Scotch 80s, Seven Hills, Shadow Hills, Siena, Silver Springs, Silverado Ranch, Silverstone Ranch, Skye Canyon, Solera, South Shore, South Valley Ranch, Southern Highlands, Southern Terrace, Southfork, Southwest Ranch, Spanish Hill, Spanish Oaks, Spanish Trail, Spring Mountain Ranch, Spring Valley, Stallion Mountain, Summerlin, Summerlin Hills, Summerlin North, Summerlin South, Summerlin West, Sun City Aliante, Sun City Anthem, Sun City MacDonald Ranch, Sun City Summerlin, Sunridge at Mac Donald Ranch, The Bluffs, The Cliffs, The Lakes, The Mesa, The Pueblo, The Ridges, The Vineyards, The Vistas, The Willows, Tierra De Las Palmas, Town Center, Tuscany, Valley Vista, Whitney Ranch, Winery, Woodcrest.

Primary areas with `/areas/*` pages: Las Vegas, Summerlin, Henderson, North Las Vegas, Downtown Las Vegas, Green Valley. Use localized internal links to `/areas/[slug]`, `/communities`, `/listings`, `/listings/communities`.

## Rules

- **Schema:** RealEstateAgent on all pages; FAQPage on FAQ sections; RealEstateListing on listing pages.
- **SEO/GBP:** Localized titles, meta, H1s; hours, map, Call/Directions/Reviews; review schema; FAQ from GBP.
- **IDX:** Always show MLS disclaimer and attribution; do not change `/components/idx/*` without approval.
- **RealScout:** One script load in root layout; widgets via `dangerouslySetInnerHTML`. CSP: `em.realscout.com` and `www.realscout.com` in script-src and connect-src.
- **Process:** Summarize task/assumptions/plan before major changes; no file deletion or refactor without approval.

## Never

- "Janet" for Dr. Jan Duffy; NAP/CTA mismatch with GBP; missing IDX disclaimer/attribution; Cloudflare proxy (orange) with Vercel.
