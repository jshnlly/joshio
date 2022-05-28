import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Cbs.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>

        <Head>
            <title>Josh Nelson | CBS Sports</title>
            <link rel="icon" href="/signature.png" type="image/x-icon" />
        </Head>
        
            <div className={styles.content}>

            <div className={styles.textContainer}>
                <p className={styles.t1}><span className={styles.textLink}><Link className={styles.link} href="/">joshn.io</Link></span> / CBS Sports</p>
            </div>

            <div className={styles.textContainer}>
              <p className={styles.t1}>247 Sports Homepage</p>
              <p className={styles.t2}>Shipped Spring &apos;22</p>
            </div>


            <video className={styles.video} src="/videos/cbs1.mp4" autoPlay muted playsinline loop controls></video>

            <video className={styles.video} src="/videos/cbs2.mp4" autoPlay muted playsinline loop controls></video>

            <video className={styles.video} src="/videos/cbs3.mp4" autoPlay muted playsinline loop controls></video>

        </div>
    </div>
    )
}