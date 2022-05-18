import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Cbs.module.css'
import Link from 'next/link'

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.pageHeader}>
            <div className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.headerLink}><Link href="/">Josh Nelson</Link></span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.textContainerRight}>
                    <p className={styles.base}>Now {'\u2192'} Designing at <span className={styles.textLink}><a className={styles.link} href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></span>, writing about <span className={styles.textLink}><a className={styles.link} href="https://joshn.substack.com/" target="_blank" rel="noreferrer">Interfaces</a></span></p>
                    <p className={styles.secondary}>Previously {'\u2192'}  <span className={styles.strikethruLink}><Link href="/almanac">Almanac</Link></span>,  <span className={styles.strikethruLink}><Link href="/cbs">CBS Sports</Link></span>, +  <span className={styles.strikethru}>startups </span>.</p>
                </div>
            </div>
        </div>
        
        <div className={styles.projectHeader}>
            <p className={styles.base}>CBS Sports</p>
            <p className={styles.base}>Product Design</p>
            <p className={styles.baseSecondary}>Jan ‘21 – Aug ‘21</p>
        </div>


          <video className={styles.video} src="/cbs1.mp4" autoPlay muted loop controls></video>
          <video className={styles.video} src="/cbs2.mp4" autoPlay muted loop controls></video>
          <video className={styles.video} src="/cbs3.mp4" autoPlay muted loop controls></video>
      </div>
    )
}