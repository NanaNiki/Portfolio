import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Nicol Wesołowska</title>
        <meta name="description" content="Portfolio app"></meta>
        <link rel="shortcut icon" type="image/png" href="/logonw.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
