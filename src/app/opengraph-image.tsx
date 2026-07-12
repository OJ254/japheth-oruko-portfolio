import { ImageResponse } from 'next/og';

import { USER } from '@/data/user';

export const alt =
  'Japheth Oruko portfolio - Product Designer, Product Manager, Frontend Developer, and AI-assisted product builder';
export const contentType = 'image/png';
export const size = {
  width: 1200,
  height: 630,
};

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f7f4ed',
          color: '#141414',
          padding: 64,
          fontFamily: 'Inter, Arial, sans-serif',
          border: '1px solid #d9d3c7',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: 26,
            fontWeight: 700,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 72,
                height: 72,
                border: '1px solid #141414',
                borderRadius: 12,
                fontFamily: 'monospace',
                fontSize: 24,
              }}
            >
              JO
            </div>
            <div>{USER.displayName}</div>
          </div>
          <div style={{ color: '#706a60', fontSize: 22 }}>{USER.location}</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              maxWidth: 980,
              fontSize: 68,
              lineHeight: 1.04,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Product design, product management, and frontend implementation for
            buildable digital products.
          </div>
          <div
            style={{
              maxWidth: 920,
              color: '#4f4a43',
              fontSize: 30,
              lineHeight: 1.35,
            }}
          >
            Lead Product Designer and Frontend Developer at PixeSci. React,
            Next.js, design systems, UX documentation, Claude, and Codex.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            gap: 14,
            color: '#141414',
            fontSize: 23,
            fontWeight: 700,
          }}
        >
          {['PixeSci', 'React.js', 'Next.js', 'Figma', 'Claude', 'Codex'].map(
            item => (
              <div
                key={item}
                style={{
                  border: '1px solid #c9c1b3',
                  borderRadius: 999,
                  padding: '10px 18px',
                  background: '#fffaf0',
                }}
              >
                {item}
              </div>
            )
          )}
        </div>
      </div>
    ),
    size
  );
}
