import Head from 'next/head'
import Image from 'next/image'
import styles from '/components/Header.module.css'
import Link from 'next/link'

export default function Home() {
    return (
    <div className={styles.pageHeader}>
        <div className={styles.leftContainer}>
            <p className={styles.headerLink}><Link href="/">Josh Nelson</Link></p>
        </div>

        <div className={styles.rightContainer}>
          <div className={styles.textContainerRight}>
            <p className={styles.baseTitle}>Now {'\u2192'} Designing at <span className={styles.textLink}><a className={styles.link} href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></span>, writing about <span className={styles.textLink}><a className={styles.link} href="https://joshn.substack.com/" target="_blank" rel="noreferrer">Interfaces</a></span></p>
            <p className={styles.secondary}>Previously {'\u2192'}  <span className={styles.strikethruLink}><Link href="/almanac">Almanac</Link></span>, <span className={styles.strikethruLink}><Link href="/cbs">CBS Sports</Link></span>, +  <span className={styles.strikethru}>startups </span>.</p>
          </div>
        </div>
      </div>
    )
}