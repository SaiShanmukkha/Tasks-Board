import styles from "../styles/LandingPage.module.css";
import Image from "next/dist/client/image";
import Link from 'next/link';

const LandingPage = () => {
  return (
    <>
      <div className={styles.LandingPage}>
        <div className={styles.LandingTitle}>
          <h1>Welcome to Tasks Board</h1>
        </div>
        <div className={styles.LandingPageDescriptionOne}>
          <div className={styles.ImageOne}>
            <Image
              src={"/assets/images/LandingOneA.jpg"}
              width={"300px"}
              height={"200px"}
            />
          </div>
          <div className={styles.LandingPageDescription}>
            <ul>
              <li>
                Simple and easy way to manage checklists, tasks and processes
                all in one place.
              </li>
              <li>
                Enabling tasks and processes to run smoothly, consistently and
                reduce mistakes.
              </li>
              <li>
                Increase productivity while guaranteeing things get done how you
                want every time!
              </li>
              <li>Empower yourself to fly and achieve more using checklists</li>
              <li>
                Checklists guide your team to get things done perfectly every
                time
              </li>
            </ul>
            <div className={styles.LandingPageAction}>
              <Link href={"/home"}>
                <button className={`${styles.buttonAction} ${styles.temperory}`}>
                  Get Started
                </button>
              </Link>
              {/* <button className={`${styles.buttonAction} ${styles.persistent}`}>
                Login/Register
              </button> */}
            </div>
            <p>we also have persistent version of this Tasks Board. For more info <Link href={"mailto:maesterpycoder@gmail.com"}>mail us</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
