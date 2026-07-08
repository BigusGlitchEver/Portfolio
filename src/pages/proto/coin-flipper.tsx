import Head from 'next/head';

export default function CoinFlipperPlay() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: '#c9b98f' }}>
      <Head>
        <title>Coin Flipper — Prototype</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <iframe
        src="/proto/games/coin-flipper.html"
        title="Coin Flipper"
        style={{ border: 'none', width: '100%', height: '100%' }}
      />
    </div>
  );
}
