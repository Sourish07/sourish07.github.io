import Head from '@/components/blog/head';
import Layout from '@/components/blog/layout';
import PostList from '@/components/blog/postList';
import styles from '@/styles/blog/Blog.module.css';
import { getSortedPostsData } from '@/utils/processPosts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Blog({ allPostsData }) {
    return (
        <>
            <Head 
                title="Sourish Shares - Welcome to my blog!"
                description="Here, I write about various topics about CS, the broader tech industry, and life."
                siteName="sourish.dev/blog"
            />
            <Layout>
                <h1 className={styles.pageTitle}>Posts</h1>
                <PostList posts={allPostsData} />
            </Layout>
        </>
    );
}