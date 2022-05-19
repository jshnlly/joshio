import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Almanac.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>

        <Head>
            <title>Josh Nelson | Almanac</title>
            <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        </Head>

        <div className={styles.pageHeader}>
            <div className={styles.leftContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.headerLink}><Link href="/">Josh Nelson</Link></span>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.textContainerRight}>
                    <p className={styles.baseTitle}>Now {'\u2192'} Designing at <span className={styles.textLink}><a className={styles.link} href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></span>, writing about <span className={styles.textLink}><a className={styles.link} href="https://joshn.substack.com/" target="_blank" rel="noreferrer">Interfaces</a></span></p>
                    <p className={styles.secondary}>Previously {'\u2192'}  <span className={styles.strikethruLink}><Link href="/almanac">Almanac</Link></span>,  <span className={styles.strikethruLink}><Link href="/cbs">CBS Sports</Link></span>, +  <span className={styles.strikethru}>startups </span>.</p>
                </div>
            </div>
        </div>
         
            <div className={styles.projectHeader}>
                <p className={styles.base}>Almanac</p>
                <p className={styles.base}>Product Design</p>
                <p className={styles.baseSecondary}>Aug ‘21 – Dec ‘21</p>
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

            <div className={styles.footer}>
                <div className={styles.linkContainer}>
                    <p className={styles.base}>
                        <span className={styles.textLink}><a className={styles.link} href="https://read.cv/josh" target="_blank" rel="noreferrer">CV</a></span>, 
                        <span className={styles.textLink}><a className={styles.link} href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">Twitter</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">LinkedIn</a></span>, <span className={styles.textLink}><a className={styles.link} href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">Email</a></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}