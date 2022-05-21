import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import WaveBar from "../components/WaveBar";

const Home: NextPage = () => {
  const maxHeight = 1000;
  const barCount = 20;

  const [heights, setHeights] = useState(new Array(barCount));

  useEffect(() => {
    const newHeight = [...heights].map(() =>
      Math.floor(Math.random() * maxHeight)
    );
    setHeights(newHeight);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>radio wave</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello World!</h1>
        <div className={styles.wavebar}>
          {heights.map((x, index) => {
            return <WaveBar key={index.toString()} height={x} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
