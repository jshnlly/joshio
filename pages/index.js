import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Nelson | Designer</title>
        <link rel="icon" href="/signature.png" type="image/x-icon" />
      </Head>

        <Header />

        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I&apos;m a product designer at Instagram in SF, working on sharing experiences across Feed, Stories, and Reels.</p>
              <p className={styles.baseBio}>I&apos;m passionate about delightful software — through designing it with care and intention and building it with craft. My approach to design starts at a high fidelity where I spend most of my time prototyping, trying to make things worth making.</p>
              <p className={styles.baseBio}>Want to chat? Drop me an <span className={styles.textLink}><a className={styles.link} href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">email</a></span>.</p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.base}>
              <span className={styles.textLink}><a className={styles.link} href="https://read.cv/josh" target="_blank" rel="noreferrer">CV</a></span>, 
              <span className={styles.textLink}><a className={styles.link} href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">Twitter</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">LinkedIn</a></span>, <span className={styles.textLink}><a className={styles.link} href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">Email</a></span>
            </p>
          </div>
        </div>
      </div>
  )
}
