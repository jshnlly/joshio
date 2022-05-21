import Head from 'next/head'
import Image from 'next/image'
import styles from '/components/Footer.module.css'
import Link from 'next/link'

export default function Home() {
    return (
    <div className={styles.footer}>
        <div className={styles.linkContainer}>
            <p className={styles.base}>
                <span className={styles.textLink}><a className={styles.link} href="https://read.cv/josh" target="_blank" rel="noreferrer">CV</a></span>, 
                <span className={styles.textLink}><a className={styles.link} href="https://twitter.com/jnelly2" target="_blank" rel="noreferrer">Twitter</a></span>, <span className={styles.textLink}><a className={styles.link} href="https://linkedin.com/in/jshn" target="_blank" rel="noreferrer">LinkedIn</a></span>, <span className={styles.textLink}><a className={styles.link} href="mailto:josh@joshn.io" target="_blank" rel="noreferrer">Email</a></span>
            </p>
        </div>
    </div>
    )
}