import Top from "../component/top";
import Footer from "../component/footer";
import { GlobalStyle } from "../styles/globals";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Top />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
