import Layout from '@/components/blog/layout';
import Link from 'next/link';
import PostList from '@/components/blog/postList';
import { getSortedPostsData } from '@/utils/processPosts';
import styles from '@/styles/blog/Blog.module.css';

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
        <Layout title="Sourish Shares">
            <h1 className={styles.pageTitle}>Posts</h1>
            <PostList posts={allPostsData} />
        </Layout>
    );
}