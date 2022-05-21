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

            <Header />
        
            <div className={styles.projectHeader}>
                <p className={styles.base}>CBS Sports</p>
                <p className={styles.base}>Product Design</p>
                <p className={styles.baseSecondary}>Jan 2021 – Aug 2021</p>
            </div>


            <video className={styles.video} src="/cbs1.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>I led the re-design for 247 Sports homepage and college properties that shipped as an MVP earlier this year. This design had to suit a national brand, as well as over 50 college sites that each had their own individual organizational needs.</p>
                <div className={styles.dividerSmall}></div>
            </div>

            <video className={styles.video} src="/cbs2.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>I led the re-design for 247 Sports homepage and college properties that shipped as an MVP earlier this year. This design had to suit a national brand, as well as over 50 college sites that each had their own individual organizational needs.</p>
            </div>

            <video className={styles.video} src="/cbs3.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>I led the re-design for 247 Sports homepage and college properties that shipped as an MVP earlier this year. This design had to suit a national brand, as well as over 50 college sites that each had their own individual organizational needs.</p>
                <div className={styles.dividerSmall}></div>
            </div>

            <Footer />
        </div>

    )
}