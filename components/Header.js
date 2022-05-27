import Head from 'next/head'
import Image from 'next/image'
import styles from '/components/Header.module.css'
import Link from 'next/link'

export default function Home() {
    return (
      <div className={styles.pageHeader}>
            <p className={styles.headerLink}><Link href="/">Josh Nelson</Link></p>
      </div>
    )
}