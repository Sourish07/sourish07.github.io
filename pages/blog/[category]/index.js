import Head from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import PostList from "@/components/blog/postList";
import styles from "@/styles/blog/Blog.module.css";
import Link from "next/link";
import { allPosts } from '@/.contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns'

export function getStaticPaths() {
    let paths = allPosts.map((post) => {
        return {
            params: {
                category: post.category.toLowerCase(),
            },
        };
    });
    return {
        paths,
        fallback: false, // Returns 404 when pages isn't found
    };
}

export async function getStaticProps({ params }) {
    const filteredPosts = allPosts.filter((post) => {
        return post.category.toLowerCase() === params.category;
    });
    const postsData = filteredPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date))
    })
    return {
        props: {
            postsData,
            category: params.category,
        }
    };
}

export default function BlogCategory({ category, postsData }) {
    return (
        <>
            <Head
                title={`Category: ${category} - Sourish Shares`}
                description="Here, I write about various topics about CS, the broader tech industry, and life."
                siteName={`sourish.dev/blog/${category}`}
            />
            <Layout>
                <h1 className={styles.pageTitle}>Category: {category}</h1>
                <Link href="/blog" style={{ width: "100%", textAlign: "end" }}>Back to all posts</Link>
                <PostList posts={postsData} />
            </Layout>
        </>
    );
}