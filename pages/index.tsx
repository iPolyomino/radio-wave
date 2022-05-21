import type { NextPage } from "next";
import { useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import WaveBar from "../components/WaveBar";

const Home: NextPage = () => {
  const maxHeight = 10;
  const barCount = 20;

  const initialState = Array.from(Array(barCount).keys()).map((x) => x);
  const [heights, setHeights] = useState(initialState);

  const updateHeight = () => {
    const newHeight = [...heights].map(() =>
      Math.floor(Math.random() * maxHeight)
    );
    setHeights(newHeight);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>radio wave</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <button onClick={updateHeight}>Hello World!</button>
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
