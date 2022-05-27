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
        <div className={styles.content}>

          <div className={styles.textContainer}>
              <p className={styles.t1}>I&apos;m an interface designer, fanatically obsessed with the craft and interactions that shape software. I&apos;m currently living in San Francisco, designing sharing experiences for <span className={styles.textLink}><Link className={styles.link} href="/instagram">Instagram</Link></span>. I previously designed for <span className={styles.textLink}><Link className={styles.link} href="/almanac">Almanac</Link></span>, <span className={styles.textLink}><Link className={styles.link} href="/cbs">CBS Sports</Link></span>, + a few startups.</p>
          </div>

          <div className={styles.linkContainer}>

              <span className={styles.textLink}><a className={styles.link} href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">josh@joshn.io</a></span>
              <span className={styles.textLink}><a className={styles.link} href="https://joshn.substack.com" target="_blank" rel="noreferrer">joshn.substack.com</a></span>

              <p className={styles.socialsContainer}>
                <span className={styles.textLink}><a className={styles.link} href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">Twitter</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">LinkedIn</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://are.na/josh-nelson" target="_blank" rel="noreferrer">Are.na</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://read.cv/josh" target="_blank" rel="noreferrer">CV</a></span>
              </p>

          </div>
        </div>
      </div>
  )
}