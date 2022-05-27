import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import Post from '../components/Post.js'
import {sortByDate} from '../utils'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Josh Nelson | Designer</title>
        <link rel="icon" href="/signature.png" type="image/x-icon" />
      </Head>
        <div className={styles.infoContainer}>

        <Header />

          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I&apos;m an interface designer,</p>
              <p className={styles.baseBio}>fanatically obsessed with the craft and interactions that shape software.</p>
          </div>

          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I currently design at Instagram,</p>
              <p className={styles.baseBio}>where I focus on <span className={styles.textLink}><Link href="/instagram">sharing experiences</Link></span>.</p>
          </div>

          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I previously designed for <span className={styles.textLink}><a href="https://almanac.io" target="_blank" rel="noreferrer">Almanac</a></span>, <span className={styles.textLink}><a href="https://cbssports.com" target="_blank" rel="noreferrer">CBS Sports</a></span>, and a few startups, </p>
              <p className={styles.baseBio}>where I focused on <span className={styles.textLink}><Link href="/almanac">file organization</Link></span>, <span className={styles.textLink}><Link href="/cbs">fan experiences</Link></span>, and a bit of everything, respectively.</p>
          </div>

          <div className={styles.textContainer}>
              <p className={styles.baseBio}>I spend my free time thinking, and <span className={styles.textLink}><a href="https://joshn.substack.com" target="_blank" rel="noreferrer">writing</a></span>, about how interface design can unlock human potential.</p>
          </div>

          <div className={styles.textContainer}>
              <p className={styles.baseBio}>You can get in touch by <span className={styles.textLink}><a href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">email</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">linkedin</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">twitter</a></span>, or my <span className={styles.textLink}><a className={styles.link} href="https://read.cv/josh" target="_blank" rel="noreferrer">cv</a></span>.</p>
          </div>

        </div>
      </div>
  )
}