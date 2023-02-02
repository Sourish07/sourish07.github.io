import Link from 'next/link';

import styles from '@/styles/blog/Blog.module.css';
import Layout from '@/components/blog/layout';

import { getSortedPostsData } from '@/utils/processPosts';
import Date from '@/components/blog/date';

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
            {allPostsData.map(({ id, date, title, subheader, categories }) => (
                <div className={styles.post} key={id}>
                    <Link href={`/blog/${id}`}>
                        <div className={styles.postTitle}>
                            {title}
                        </div>
                        <div className={styles.subheader}>
                            {subheader}
                        </div>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div className={styles.category}>
                                {categories}
                            </div>
                            <div className={styles.date}>
                                <Date dateString={date} />
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </Layout>
    );
}