import Head from "next/head";
import Image from "next/image";
import Card from "../components/card";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import CardController from "../components/cardController";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board - Sai Shanmukkha</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavigationBar className={styles.nav}/>
        <CardController />
        <div className={styles.grid}>
          <Card />
        </div>
      </div>
    </div>
  );
}
