import "@/styles/globals.css";
import Head from "next/head";
import Loading from "./Loading";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Nicol Wesołowska</title>
        <meta name="description" content="Portfolio app"></meta>
        <link rel="shortcut icon" type="image/png" href="/logotab.png" />
      </Head>
      {loading? <Loading /> : <Component {...pageProps} />}
    </>
  );
}
