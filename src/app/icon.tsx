import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #6366F1, #8B5CF6)',
          borderRadius: '8px',
        }}
      >
        <span
          style={{
            fontSize: '22px',
            fontWeight: 800,
            color: 'white',
            fontFamily: 'system-ui, sans-serif',
            lineHeight: 1,
            marginTop: '-1px',
          }}
        >
          V
        </span>
      </div>
    ),
    { ...size }
  );
}
