import Link from 'next/link';
import Image from 'next/image';

import Date from '@/components/blog/date';
import Head from '@/components/blog/head';
import Layout from '@/components/blog/layout';
import blogStyles from '@/styles/blog/Blog.module.css';
import styles from '@/styles/blog/Post.module.css';
import blogCode from '@/styles/blogCode';

import { allPosts } from '@/.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer2/hooks'
import { ArticleContent, MultiLevelArticleContent } from '@/components/blog/articleContent';
import Hiatus from '@/dynamic-content/hiatus';

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
        fallback: false, // Returns 404 when page isn't found
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
    const PostBody = useMDXComponent(postData.body.code);

    const components = {
        a: ({ href, children }) => <Link href={href.toString()}>{children}</Link>,
        img: ({ src, alt }) => <Image src={src} alt={alt} width={1000} height={300} />,
        ArticleContent: postData.multilevelarticle ? MultiLevelArticleContent : ArticleContent,
        Hiatus
    };


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
                <div style={{ width: "100%" }}>
                    <style jsx>{blogCode}</style>
                    {/* If MultiLevelArticleContent component is passed in, it's so it can split the content between technical and non-technical */}
                    <PostBody components={components} />
                </div>
            </Layout>
        </>
    )
}

