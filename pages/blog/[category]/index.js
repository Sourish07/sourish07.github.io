import { getAllPostCategories, getPostsInCategory } from "@/utils/processPosts";

import Head from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import PostList from "@/components/blog/postList";
import styles from "@/styles/blog/Blog.module.css";
import Link from "next/link";

export function getStaticPaths() {
    const paths = getAllPostCategories();
    return {
        paths,
        fallback: false, // Returns 404 when pages isn't found
    };
}

export async function getStaticProps({ params }) {
    const postsData = getPostsInCategory(params.category);
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