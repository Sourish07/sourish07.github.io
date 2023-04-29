import Date from '@/components/blog/date';
import Head from '@/components/blog/head';
import Layout from '@/components/blog/layout';
import blogStyles from '@/styles/blog/Blog.module.css';
import styles from '@/styles/blog/Post.module.css';
import Link from 'next/link';
import { allPosts } from '@/.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks'
import { MultiLevelArticleContent } from '@/components/blog/cspost';

export function getStaticPaths() {
    const paths = allPosts.map((post) => {
        return {
            params: {
                id: post.id.toString(),
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
    const post = allPosts.find((post) => {
        return post.id === params.id;
    });
    const postData = {
        ...post,
    };
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    console.log(postData);
    const PostBody = useMDXComponent(postData.body.code)
    return (
        <>
            <Head
                title={postData.title}
                description={postData.subheader}
                siteName={`sourish.dev/blog/${postData.category}/${postData.id}`}
            />
            <Layout>
                <div className={styles.title}>{postData.title}</div>
                <div className={styles.subheader}>{postData.subheader}</div>
                <div className={styles.postInfo}>
                    <Date dateString={postData.date} />
                    <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "5px" }}>
                        <Link href={`/blog/${postData.category}`} className={blogStyles.category}>
                            {postData.category}
                        </Link>
                        <div className={styles.author}>By Sourish Kundu</div>
                    </div>
                </div>
                <div id="content" style={{ width: "100%" }}>
                    <link rel="stylesheet" href="/blogAssets/css/blog.css" />
                    {/* Passing in the Cscode component so it can split the content between technical and non-technical */}
                    <PostBody components={{MultiLevelArticleContent}} />
                </div>
            </Layout>
        </>
    )
}

