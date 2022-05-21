import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import StaticBar from "../components/StaticBar";

const Home: NextPage = () => {
  const barCount = 20;

  return (
    <div className={styles.container}>
      <Head>
        <title>radio wave</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.wavebar}>
          {Array.from(Array(barCount).keys()).map((index) => {
            return <StaticBar key={index.toString()} />;
          })}
        </div>
      </main>
    </div>
  );
};

export default Home;
