import Section from "./section";
import Link from "next/link";
import Date from "../blog/date";
import styles from "@/styles/blog/Blog.module.css";

export default function Blog({ posts }) {
    return (
        <Section id="blog" title="Blog" subheader="Feel free to read some of my blog posts!">
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                {posts.map((post) => (
                    <BlogPost key={post.id} post={post} />
                ))}
            </div>
        </Section>
    );
}

function BlogPost({ post }) {
    return (
        <>
            <style jsx>
                {`
                    #blogInfo:hover {
                        color: var(--red);
                    }
                
                `}
            </style>
            <div style={{ margin: "10px", padding: "10px", background: "white", borderRadius: "10px" }}>
                <Link href={`/blog/${post.category}/${post.id}`}
                    style={{
                        color: "black",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        width: "300px",
                        height: "125px",
                    }}>
                    <div id="blogInfo" >
                        <h3>{post.title}</h3>
                        <p>{post.subheader}</p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <span className={styles.category}>{post.category}</span>
                        <Date dateString={post.date} />
                    </div>
                </Link>
            </div>
        </>
    );
}