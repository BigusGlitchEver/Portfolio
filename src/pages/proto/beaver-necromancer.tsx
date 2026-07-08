import Head from 'next/head';

export default function BeaverNecromancerPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#050308' }}>
      <Head>
        <title>Beaver Necromancer — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <iframe
        src="/proto/games/beaver-necromancer.html"
        title="Beaver Necromancer"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
