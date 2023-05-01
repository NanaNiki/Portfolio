import "@/styles/globals.css";
import Head from "next/head";
import Loading from "./Loading";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Nicol Wesołowska</title>
        <meta name="description" content="Portfolio app"></meta>
        <link rel="shortcut icon" type="image/png" href="/logotab.png" />
      </Head>
      {loading ? (
        <Loading className="blur"/>
      ) : (
        <div className="fade-in">
          <Component {...pageProps} />
        </div>
      )}
    </>
  );
}
