import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import HomeLanding from "../components/HomeLanding";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{`Reuben & Grace`}</title>
        <link rel="icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Cormorant Garamond"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <HomeLanding />
      </main>
    </div>
  );
};

export default Home;
