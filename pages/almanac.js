import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Almanac.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>

        <Head>
            <title>Josh Nelson | Almanac</title>
            <link rel="icon" href="/signature.png" type="image/x-icon" />
        </Head>
         
            <div className={styles.content}>

            <div className={styles.textContainer}>
                <p className={styles.t1}><span className={styles.textLink}><Link className={styles.link} href="/">joshn.io</Link></span> / Almanac</p>
            </div>

              <div className={styles.textContainer}>
                <p className={styles.t1}>Navigation and Search</p>
                <p className={styles.t2}>Shipped Fall &apos;21</p>
            </div>

            <video className={styles.video} src="/videos/almanac1.mp4" type="video/mp4" autoPlay muted playsInline loop></video>

            <video className={styles.video} src="/videos/almanac2.mp4" type="video/mp4" autoPlay muted playsInline loop></video>

            <video className={styles.video} src="/videos/almanac3.mp4" type="video/mp4" autoPlay muted playsInline loop></video>

            <video className={styles.video} src="/videos/almanac4.mp4" type="video/mp4" autoPlay muted playsInline loop></video>

            </div>

    </div>
    )
}