import Link from 'next/link'

export default function Post({ post }) {
    return (
        <Link href={`/p/${post.slug}`}>
            <p>{post.frontmatter.title}</p>
        </Link>
    )
}