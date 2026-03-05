/**
 * Dr. Jan Duffy's areas of expertise — Las Vegas / Henderson neighborhoods.
 * Single source of truth for AI rules, SEO copy, and site content.
 * Keep in sync with .cursorrules, .cursor/rules/jan-duffy-realtor.mdc, SKILL.md, CLAUDE.md.
 */
export const EXPERT_NEIGHBORHOODS: readonly string[] = [
  'Aliante',
  'Alta Mira',
  'Anthem',
  'Anthem Country Club',
  'Anthem Highlands',
  'Ardiente',
  'Arlington Ranch',
  'Artesia',
  'Ascaya',
  'Black Mountain Vistas',
  'Burson Ranch',
  'Cadence',
  'Calico Ridge',
  'Canyon Estates',
  'Canyon Gate',
  'Centennial Hills',
  'Champion Village',
  'Comstock Park',
  'Coronado Ranch',
  'Cottonwoods',
  'Desert Greens',
  'Desert Inn Country Club',
  'Desert Shores',
  'Desert Trails',
  'Eldorado',
  'Elkhorn Ranch',
  'Elkhorn Springs',
  'Foothills at Mac Donald Ranch',
  'Green Valley',
  'Green Valley Ranch',
  'Green Valley South',
  'Highlands Ranch',
  'Hillsboro',
  'Inspirada',
  'Iron Mountain Ranch',
  'Lake Las Vegas',
  'Las Casitas',
  'Las Vegas Country Club',
  'Legacy',
  'Lone Mountain',
  'Lone Mountain West',
  'Los Prados',
  'Lynbrook',
  'MacDonald Highlands',
  'MacDonald Ranch',
  'Madeira Canyon',
  'McNeill',
  'Mesa Verde',
  'Mira Villa',
  'Mission Hills',
  'Monaco',
  'Montecito',
  'Mountain Falls',
  'Mountains Edge',
  'Mt. Charleston Golf Estates',
  'Nevada Trails',
  'North Shores',
  'Painted Desert',
  'Paradise Hills',
  'Park Highlands',
  'Peccole Ranch',
  'Pleasant Valley',
  'Providence',
  'Queensridge',
  'Rancho Circle',
  'Rancho Las Palmas',
  'Red Rock Country Club',
  'Rhodes Ranch',
  'Riverstone',
  'Roma Hills',
  'Scotch 80s',
  'Seven Hills',
  'Shadow Hills',
  'Siena',
  'Silver Springs',
  'Silverado Ranch',
  'Silverstone Ranch',
  'Skye Canyon',
  'Solera',
  'South Shore',
  'South Valley Ranch',
  'Southern Highlands',
  'Southern Terrace',
  'Southfork',
  'Southwest Ranch',
  'Spanish Hill',
  'Spanish Oaks',
  'Spanish Trail',
  'Spring Mountain Ranch',
  'Spring Valley',
  'Stallion Mountain',
  'Summerlin',
  'Summerlin Hills',
  'Summerlin North',
  'Summerlin South',
  'Summerlin West',
  'Sun City Aliante',
  'Sun City Anthem',
  'Sun City MacDonald Ranch',
  'Sun City Summerlin',
  'Sunridge at Mac Donald Ranch',
  'The Bluffs',
  'The Cliffs',
  'The Lakes',
  'The Mesa',
  'The Pueblo',
  'The Ridges',
  'The Vineyards',
  'The Vistas',
  'The Willows',
  'Tierra De Las Palmas',
  'Town Center',
  'Tuscany',
  'Valley Vista',
  'Whitney Ranch',
  'Winery',
  'Woodcrest',
] as const;

/** Convert neighborhood display name to URL slug (lowercase, spaces to hyphens, strip . and ') */
export function nameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/\./g, '')
    .replace(/'/g, '')
    .trim();
}

/** Map slug -> display name for lookup in dynamic route */
export const SLUG_TO_NAME: Readonly<Record<string, string>> = Object.fromEntries(
  EXPERT_NEIGHBORHOODS.map((name) => [nameToSlug(name), name])
);

/** All neighborhood slugs for generateStaticParams and sitemap */
export const NEIGHBORHOOD_SLUGS: readonly string[] = Object.keys(SLUG_TO_NAME);

/** Get neighborhood display name by slug, or undefined if not found */
export function getNeighborhoodBySlug(slug: string): string | undefined {
  return SLUG_TO_NAME[slug];
}
