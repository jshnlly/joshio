import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post.js'
import {sortByDate} from '../utils'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>

        <Head>
            <title>Josh Nelson | Writing</title>
            <link rel="icon" href="/signature.png" type="image/x-icon" />
        </Head>

        <Header />

        <p className={styles.headerLink}>All Posts</p>
        <div className={styles.burstList}>
            {posts.map((id, post, index) => (
                <div key={id} className={styles.burstLinkContainer}>&nbsp;&nbsp;{'\u2192'}&nbsp;&nbsp;<span className={styles.burstLink}><Post post={post} /></span></div>
            ))}
        </div>

        {/* <Footer />  */}
    </div>
  )
}

export async function getStaticProps() {

    // get files from post directory
  
    const files = fs.readdirSync(path.join('posts'))
  
    // get slug & frontmatter from posts
  
    const posts = files.map(filename => {
  
      const slug = filename.replace('.md', '')
  
      // get frontmatter
  
      const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
  
      const {data: frontmatter} = matter(markdownWithMeta)
  
      return {
        slug,
        frontmatter,
      }
  
    })
  
    console.log(posts)
  
    
  
    return {
      props: {
        posts: posts.sort(sortByDate),
      },
    }
  }