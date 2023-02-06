import Layout from "@/components/blog/layout";
import PostList from "@/components/blog/postList";
import styles from "@/styles/blog/Blog.module.css";
import { getAllPostCategories, getPostsInCategory } from "@/utils/processPosts";

export function getStaticPaths() {
    const paths = getAllPostCategories();
    return {
        paths,
        fallback: false, // Returns 404 when pages isn't found
    };
}

export async function getStaticProps({ params }) {
    let x = params.category;
    const postsData = getPostsInCategory(params.category);
    return {
        props: {
            postsData,
            category: params.category,
        }
    };
}

export default function BlogCategory({ category, postsData }) {
    console.log("PROPS: " + postsData)
    return (
        <Layout>
            <h1 className={styles.pageTitle}>Category: {category}</h1>
            <PostList posts={postsData} />
            {console.log(postsData)}
        </Layout>
    );
}