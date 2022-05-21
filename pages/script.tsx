import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Script.module.css";
import WaveBar from "../components/WaveBar";

const Home: NextPage = () => {
  const maxHeight = 1000;
  const barCount = 20;

  const [heights, setHeights] = useState(new Array(barCount));
  useEffect(() => {
    setHeights([...heights].map(() => Math.floor(Math.random() * maxHeight)));
  }, []);

  const [time, setTime] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((now) => now + 1);
      const h = [...heights].map((current) =>
        Math.floor(current + Math.random() * 20 - 10)
      );
      if (!h.includes(NaN)) setHeights(h);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [heights]);

  return (
    <div className={styles.container}>
      <Head>
        <title>radio wave</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>time : {time}</h1>
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
