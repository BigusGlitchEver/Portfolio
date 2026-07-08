import Head from 'next/head';

export default function MusicMayhemPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#1b1420' }}>
      <Head>
        <title>Musical Mayhem — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <iframe
        src="/proto/games/music-mayhem.html"
        title="Musical Mayhem"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
