import { ImageResponse } from 'next/og';

const WIDTH = 1200;
const HEIGHT = 630;
const PRIMARY_GRADIENT = 'linear-gradient(135deg, #0b1426 0%, #12315b 45%, #c28b37 100%)';
const BRAND_COLOR = '#fef3c7';

const clampText = (value: string, maxLength: number) => {
  if (value.length <= maxLength) {
    return value;
  }
  return `${value.slice(0, maxLength - 1)}…`;
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const title = clampText(
    searchParams.get('title')?.trim() || 'Las Vegas Luxury Real Estate Intelligence',
    110,
  );

  const subtitle = clampText(
    searchParams.get('subtitle')?.trim() || 'Guiding buyers, sellers, and investors with data-backed strategy from Dr. Janet Duffy.',
    160,
  );

  const badge = clampText(
    searchParams.get('badge')?.trim() || 'Summerlin • Henderson • Strip Corridor',
    60,
  );

  const highlightParams = searchParams.getAll('highlight');
  const highlights = (highlightParams.length ? highlightParams : [
    'Top 1% Las Vegas REALTOR®',
    '$127M+ Sales Volume',
  ])
    .slice(0, 3)
    .map((item) => clampText(item, 60));

  const phone = clampText(searchParams.get('phone')?.trim() || '(702) 222-1964', 20);
  const urlText = clampText(searchParams.get('url')?.trim() || 'www.goodtoknowrealtor.com', 60);

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundImage: PRIMARY_GRADIENT,
          color: 'white',
          padding: '60px 80px',
          fontFamily: 'Inter, Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 1 }}>Dr. Janet Duffy</div>
          <div
            style={{
              fontSize: 18,
              fontWeight: 600,
              color: BRAND_COLOR,
              letterSpacing: 1,
              textTransform: 'uppercase',
            }}
          >
            Berkshire Hathaway HomeServices Premier Properties
          </div>
        </div>

        <div style={{ marginTop: 40, flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '10px 22px',
              borderRadius: 9999,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: BRAND_COLOR,
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: 1,
              textTransform: 'uppercase',
              width: 'fit-content',
            }}
          >
            {badge}
          </div>

          <div style={{ fontSize: 78, fontWeight: 800, lineHeight: 1.05, marginTop: 40, maxWidth: '90%' }}>
            {title}
          </div>

          <div style={{ fontSize: 30, fontWeight: 400, opacity: 0.92, marginTop: 24, maxWidth: '80%' }}>
            {subtitle}
          </div>

          <div style={{ display: 'flex', gap: 28, marginTop: 48 }}>
            {highlights.map((item, index) => (
              <div
                key={`${item}-${index}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '18px 26px',
                  borderRadius: 18,
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  fontSize: 24,
                  fontWeight: 600,
                }}
              >
                <span style={{ display: 'inline-block', width: 14, height: 14, borderRadius: '50%', backgroundColor: BRAND_COLOR }} />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 22 }}>
          <div style={{ fontWeight: 600 }}>{urlText}</div>
          <div
            style={{
              padding: '12px 28px',
              borderRadius: 9999,
              border: `2px solid ${BRAND_COLOR}`,
              color: BRAND_COLOR,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            Call {phone}
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, immutable, no-transform, s-maxage=604800, max-age=0',
      },
    },
  );
}
