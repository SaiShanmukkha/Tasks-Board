import styles from "@styles/LandingPage.module.css";
import Image from "next/image";
import Link from 'next/link';
import Img from "@assets/LandingOneA.jpg"

const LandingPage = () => {
  return (
    <>
      <div className={styles.LandingPage}>
        <h1 className={styles.LandingTitle}>Welcome to Tasks Board</h1>

        <div className={styles.LandingPageDescriptionOne}>
          <div className={styles.ImageOne}>
            <Image
              src={Img}
              alt="Tasks-Board Image"
              width={300}
              height={200}
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
            <p>we also have persistent version of this Tasks Board. For more info <Link href={"mailto:ssshanmukkha@gmail.com"}>mail me</Link></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
