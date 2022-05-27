import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import Header from '../../components/Header.js'
import styles from '../../styles/Home.module.css'
import { marked } from 'marked'

export default function PostView({frontmatter: {title, date, category}, slug, content}) {
    return <div className={styles.container}>

    <Head>
        <title>Josh Nelson | {title}</title>
        <link rel="icon" href="/signature.png" type="image/x-icon" />
      </Head>

        <Header />

        <div className={styles.metadata}>
            <p className={styles.title}>{title}</p>
            <p className={styles.secondaryInfo}>{date}</p>
            <p className={styles.secondaryInfo}>{category}</p>
        </div>

        <div className={styles.postBody}>
            <div dangerouslySetInnerHTML={{__html: marked(content) }}></div>
        </div>
    </div>
}

export async function getStaticPaths() {

    const files = fs.readdirSync(path.join('posts'))

    const paths = files.map((filename)=> ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    console.log(paths)

    return {
        paths,
        fallback: false,
    }

}

export async function getStaticProps({ params: {slug} }) {

    const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(markdownWithMeta)

    return {
        props: {
            frontmatter,
            slug, 
            content,
        }
    }
}