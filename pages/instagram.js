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

        <Header />
         
            <div className={styles.projectHeader}>
                <p className={styles.headerLink}>Instagram</p>
            </div>

            <div className={styles.textContainer}>
              <p className={styles.projectTitle}>Quick Send v2</p>
              <p className={styles.projectDescription}>Shipped May ‘22 – prototypes made in Origami.</p>
            </div>


            <video className={styles.video} src="/videos/qs.mp4" autoPlay muted loop controls></video>
        
            <Footer />
    </div>
    )
}