import Head from "@/components/blog/head";
import Layout from "@/components/blog/layout";
import PostList from "@/components/blog/postList";
import styles from "@/styles/blog/Blog.module.css";
import { compareDesc } from "date-fns";
import { allPosts } from "contentlayer/generated";
import blogGlobal from "@/styles/blogGlobal";

export async function getStaticProps() {
    let posts = allPosts.sort((a, b) => {
        return compareDesc(new Date(a.date), new Date(b.date));
    });

    posts = posts.map(({ body, ...post }) => post);

    return { props: { posts } };
}

export default function Blog({ posts }) {
    return (
        <>
            <Head 
                title="Sourish Shares - Welcome to my blog!"
                description="Here, I write about various topics about CS, the broader tech industry, and life."
                siteName="sourish.dev/blog"
            />
            <Layout>
                <h1 className={styles.pageTitle}>Posts</h1>
                <PostList posts={posts} />
            </Layout>
        </>
    );
}