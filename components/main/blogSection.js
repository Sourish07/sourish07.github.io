import Section from "./section";
import Link from "next/link";
import Date from "../blog/date";
import styles from "@/styles/blog/Blog.module.css";
import { SectionSubheader } from "./section";

export default function Blog({ posts }) {
    return (
        <Section id="blog" title="Blog">
            <style jsx>
                {`
                    #blogLink {
                        text-decoration: underline;
                    }

                    #blogLink:hover {
                        color: var(--red);
                    }
                `}
            </style>
            <SectionSubheader>
                See my recent articles below or my full blog <Link href="/blog"><span id="blogLink">here</span></Link>!
            </SectionSubheader>
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