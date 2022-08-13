import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/card'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tasks Board</title>
        <meta name="description" content="Tasks Managing Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.grid}>
        <Card className={styles.card}/> 
      </div>


    </div>
  )
}
