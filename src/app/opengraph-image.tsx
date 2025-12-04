import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Elias Jiminián - Full Stack Developer';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div style={{ fontSize: 72, fontWeight: 'bold', marginBottom: 20 }}>
          Elias Jiminián
        </div>
        <div style={{ fontSize: 48, opacity: 0.9 }}>
          Full Stack Developer
        </div>
        <div
          style={{
            fontSize: 32,
            opacity: 0.8,
            marginTop: 20,
            display: 'flex',
            gap: 20,
          }}
        >
          <span>React</span>
          <span>•</span>
          <span>Next.js</span>
          <span>•</span>
          <span>TypeScript</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
