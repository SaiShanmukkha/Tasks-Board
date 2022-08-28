import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import HomePage from "../components/Home";


export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board - Sai Shanmukkha</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <NavigationBar />
        <HomePage />
      </div>
    </div>
  );
}
