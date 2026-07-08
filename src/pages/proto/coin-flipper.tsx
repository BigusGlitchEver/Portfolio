import Head from 'next/head';

export default function CoinFlipperPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#c9b98f' }}>
      <Head>
        <title>Coin Flipper — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <a
        href="/proto"
        style={{
          position: 'fixed', top: 10, left: 10, zIndex: 100,
          fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 700,
          color: '#3a2d1f', background: '#f5ecd7', border: '2px solid #3a2d1f',
          borderRadius: 8, padding: '6px 12px', textDecoration: 'none',
        }}
      >
        ← Back to prototypes
      </a>
      <iframe
        src="/proto/games/coin-flipper.html"
        title="Coin Flipper"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
