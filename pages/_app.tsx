import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";

import "../styles/global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
