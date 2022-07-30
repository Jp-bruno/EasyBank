import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>EasyBank</title>
        <link rel='icon' href='/favicon-32x32.png'></link>
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
