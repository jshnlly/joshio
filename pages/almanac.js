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

        <Header />
         
            <div className={styles.projectHeader}>
                <p className={styles.base}>Almanac</p>
                <p className={styles.base}>Product Design</p>
                <p className={styles.baseSecondary}>Aug 2021 – Dec 2021</p>
            </div>


            <video className={styles.video} src="/almanac1.mp4" autoPlay muted loop controls></video>
        
            <div className={styles.videoDescription}>
                <p className={styles.base}>Almanac’s file manager was designed to be fully customizable, maximizing user control. We wanted users to be able to have the information important to them in as little as possible.</p>
            </div>

            <video className={styles.video} src="/almanac2.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>Almanac has the largest collection of open source documents that double as templates within each workspace, keeping those accessible was also top of mind.</p>
                <div className={styles.dividerSmall}></div>
            </div>

            <video className={styles.video} src="/almanac3.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>Almanac’s search was designed from the ground up to be fast. We wanted users to feel like any document, person, or group could be found in a second.</p>
            </div>

            <video className={styles.video} src="/almanac4.mp4" autoPlay muted loop controls></video>

            <div className={styles.videoDescription}>
                <p className={styles.base}>As with the rest of the product; we wanted users to have full control of their experience. We designed rich filtering that user’s could save as views to find anything easier.</p>
                <div className={styles.dividerSmall}>
            </div>

            <Footer />
        </div>
    </div>
    )
}