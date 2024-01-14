import styles from "@styles/Home.module.css";
import NavigationBar from "@components/NavigationBar";
import LandingPage from "@components/landingPage";
// import { ReactNotifications } from 'react-notifications-component';
// import "animate.css";
// import 'react-notifications-component/dist/theme.css'


export default function Home() {

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {/* <ReactNotifications /> */}
        <NavigationBar />
        <LandingPage />
      </div>
    </div>
  );
}
