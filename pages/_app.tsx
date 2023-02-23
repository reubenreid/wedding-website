import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar } from "../components/Navbar";
import Head from "next/head";
import dynamic from "next/dynamic";
import { NotificationsProvider } from '@mantine/notifications';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>{`Reuben & Grace`}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <NotificationsProvider>
        <div className="h-screen font-cormorant bg-[url('/mobbg.png')] lg:bg-[url('/bg.png')] w-screen h-screen bg-cover">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </NotificationsProvider>

    </div>
  );
}

export default dynamic(() => Promise.resolve(MyApp), {
  ssr: false,
});