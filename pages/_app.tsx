import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{`Reuben & Grace`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar />
      <div className="h-screen font-cormorant">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
