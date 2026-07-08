import Head from 'next/head';

export default function MusicMayhemPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#1b1420' }}>
      <Head>
        <title>Musical Mayhem — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <a
        href="/proto"
        style={{
          position: 'fixed', top: 10, left: 10, zIndex: 100,
          fontFamily: 'Arial, Helvetica, sans-serif', fontSize: 13, fontWeight: 700,
          color: '#1b1420', background: '#f5ecd7', border: '2px solid #1b1420',
          borderRadius: 8, padding: '6px 12px', textDecoration: 'none',
        }}
      >
        ← Back to prototypes
      </a>
      <iframe
        src="/proto/games/music-mayhem.html"
        title="Musical Mayhem"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
