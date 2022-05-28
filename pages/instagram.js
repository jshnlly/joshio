import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Instagram.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

export default function Home() {
  return (
    <div className={styles.container}>

        <Head>
            <title>Josh Nelson | Instagram</title>
            <link rel="icon" href="/signature.png" type="image/x-icon" />
        </Head>

        <div className={styles.content}>
            <div className={styles.textContainer}>
                <p className={styles.t1}><span className={styles.textLink}><Link className={styles.link} href="/">joshn.io</Link></span> / Instagram</p>
            </div>

            <div className={styles.textContainer}>
                <p className={styles.t1}>Quick Send v2</p>
                <p className={styles.t2}>Shipped May &apos;22 – prototypes made in Origami.</p>
            </div>

            <video className={styles.video} autoPlay muted playsinline loop controls="false">
                <source src="/videos/qs.mp4" type="video/mp4" />
            </video>

        </div>
    </div>
    )
}