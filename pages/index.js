import Head from "next/head";
import styles from "../styles/Home.module.css";
import NavigationBar from "../components/NavigationBar";
import HomePage from "../components/Home";
import LandingPage from "../components/landingPage";
import { ReactNotifications } from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css'
export default function Home() {
  

  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board - Sai Shanmukkha</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <ReactNotifications />
        <NavigationBar />
        <HomePage />
        {/* <LandingPage /> */}
      </div>
    </div>
  );
}
