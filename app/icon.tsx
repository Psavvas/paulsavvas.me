import { ImageResponse } from 'next/og';

export const dynamic = 'force-static';

export const size = {
  width: 64,
  height: 64,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff',
        color: '#171717',
        fontSize: 30,
        fontWeight: 900,
        letterSpacing: '-0.75px',
        lineHeight: 1,
        fontFamily: 'Arial Black, Arial, Helvetica, sans-serif',
      }}
    >
      PS
    </div>,
    {
      ...size,
    }
  );
}
