import Head from "next/head";
import styles from "@styles/Home.module.css";
import NavigationBar from "@components/NavigationBar";
import HomePage from "@components/Home";
// import { ReactNotifications } from 'react-notifications-component';
// import "animate.css";
// import 'react-notifications-component/dist/theme.css'

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Sai Shanmukkha - Tasks Board | Home',
  description: 'Your ToDo Lists App.',
}

export default function Home() {
  
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* <ReactNotifications /> */}
        <NavigationBar />
        <HomePage />
      </div>
    </div>
  );
}
