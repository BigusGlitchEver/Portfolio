import Head from 'next/head';

export default function BeaverNecromancerPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#050308' }}>
      <Head>
        <title>Beaver Necromancer — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <a
        href="/proto"
        style={{
          position: 'fixed', top: 10, left: 10, zIndex: 100,
          fontFamily: 'Courier New, monospace', fontSize: 13, fontWeight: 700,
          color: '#050308', background: '#ffd54f', border: '2px solid #050308',
          borderRadius: 8, padding: '6px 12px', textDecoration: 'none',
        }}
      >
        ← Back to prototypes
      </a>
      <iframe
        src="/proto/games/beaver-necromancer.html"
        title="Beaver Necromancer"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
