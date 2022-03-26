import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Josh Nelson | Designer</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <div className={styles.textContainer}>
        <p className={styles.header}>Josh Nelson</p>
        <p className={styles.base}>Designer at <span className={styles.textLink}><a href="https://instagram.com" target="_blank">Instagram</a></span> in SF. <span className={styles.textLink}><a href="https://joshn.substack.com" target="_blank">Writer</a></span>. Working weekends on <span className={styles.textLink}><a href="https://atmosphere.software" target="_blank">Atmosphere</a></span>.</p>
      </div>

      <div className={styles.linkContainer}>
        <p className={styles.base}>
          <span className={styles.textLink}><a href="https://read.cv/josh" target="_blank">CV</a></span> • 
          <span className={styles.textLink}><a href="https://twitter.com/jnelly2" target="_blank">Twitter</a></span> • <span className={styles.textLink}><a href="https://linkedin.com/in/jshn" target="_blank">LinkedIn</a></span> • <span className={styles.textLink}><a href="mailto:josh@joshn.io" target="_blank">Email</a></span>
          </p>
      </div>

    </div>
  )
}
