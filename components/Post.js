import Link from 'next/link'

export default function Post({ post }) {
    return (
        <Link href={`/p/${post.slug}`} key={id}>
            <p>{post.frontmatter.title}</p>
        </Link>
    )
}