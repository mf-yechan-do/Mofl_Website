import Top from "../component/top";
import Footer from "../component/footer";
import { GlobalStyle } from "../styles/globals";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon 16x16.ico" />
        <title>mofl Inc.</title>
        <meta name="description" content="AI-based Economics Solving Firm" />
      </Head>
      <GlobalStyle />
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
