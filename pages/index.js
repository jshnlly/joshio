import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Nelson | Designer</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.pageHeader}>
        <div className={styles.leftContainer}>
          <p className={styles.headerLink}><Link href="/">Josh Nelson</Link></p>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.textContainerRight}>
            <p className={styles.base}>Now {'\u2192'} Designing at <span className={styles.textLink}><a className={styles.link} href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></span>, writing about <span className={styles.textLink}><a className={styles.link} href="https://joshn.substack.com/" target="_blank" rel="noreferrer">Interfaces</a></span></p>
            <p className={styles.secondary}>Previously {'\u2192'}  <span className={styles.strikethruLink}><Link href="/almanac">Almanac</Link></span>, <span className={styles.strikethruLink}><Link href="/cbs">CBS Sports</Link></span>, +  <span className={styles.strikethru}>startups </span>.</p>
          </div>
        </div>
      </div>

        <div className={styles.infoContainer}>
          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I'm a product designer at Instagram in SF, working on sharing experiences across Feed, Stories, and Reels.</p>
              <p className={styles.baseBio}>I'm passionate about delightful software — through designing it with care and intention and building it with craft. My approach to design starts at a high fidelity where I spend most of my time prototyping, trying to make things worth making.</p>
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
