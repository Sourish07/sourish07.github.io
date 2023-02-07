import { getAllPostCategories, getPostsInCategory } from "@/utils/processPosts";

import Layout from "@/components/blog/layout";
import Link from "next/link";
import PostList from "@/components/blog/postList";
import styles from "@/styles/blog/Blog.module.css";

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
        <Layout>
            <h1 className={styles.pageTitle}>Category: {category}</h1>
            <Link href="/blog" style={{width: "100%", textAlign: "end"}}>Back to all posts</Link>
            <PostList posts={postsData} />
        </Layout>
    );
}