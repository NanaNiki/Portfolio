import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
    <Head>
        <title>Nicol Wesołowska Portfolio</title>
        <meta name="description" content="Portfolio app"></meta>
      </Head>
      <Component {...pageProps} />
  </> 
  )
}
