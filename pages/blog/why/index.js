import BlogHead from '@/components/blog/head';
import Layout from "@/components/blog/layout";
import styles from "@/styles/blog/Blog.module.css";

export default function Why() {
    return (
        <>
            <BlogHead title="Why Sourish Writes" >
                <link rel="canonical" href="https://www.sourish.dev/blog/why" />
            </BlogHead>
            <Layout>
                <h1 className={styles.pageTitle}>Why I Write</h1>
                {/* <div className={styles.subheader} style={{ marginBottom: "30px" }}>A collection of quotes that I've found interesting or inspiring.</div> */}
                <div className={styles.wrapper}>
                    Hello
                </div>
            </Layout>
        </>
    )
}