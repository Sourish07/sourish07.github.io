import BlogHead from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import styles from "@/styles/blog/Blog.module.css";
import postStyles from "@/styles/blog/Post.module.css";
import { allTexts } from '@/.contentlayer/generated';

export async function getStaticProps() {
    let whyText = allTexts.filter((text) => text.title === "why")[0];
    return {
        props: {
            whyText,
        },
    };
}


export default function Why({ whyText }) {
    return (
        <>
            <BlogHead title="Why Sourish Writes" >
                <link rel="canonical" href="https://www.sourish.dev/blog/why" />
            </BlogHead>
            <Layout>
                <h1 className={styles.pageTitle}>Why I Write</h1>
                <div className={styles.subheader} style={{ marginBottom: "30px", textAlign: "center" }}>I don't want to be on my death bed thinking, "Damn I've written more in the language of computers than in the language of humans."</div>
                
                <div className={postStyles.content} dangerouslySetInnerHTML={{ __html: whyText.body.html }} style={{ width: "100%" }}></div>
            </Layout>
        </>
    )
}