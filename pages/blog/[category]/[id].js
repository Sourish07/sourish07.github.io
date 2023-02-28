import { getAllPostIds, getPostData } from '@/utils/processPosts';

import Date from '@/components/blog/date';
import Head from '@/components/blog/head';
import Layout from '@/components/blog/layout';
import blogStyles from '@/styles/blog/Blog.module.css';
import styles from '@/styles/blog/Post.module.css';
import Link from 'next/link';
import { useState } from 'react';

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // Returns 404 when pages isn't found
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
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
                    <link rel="stylesheet" href="/blogAssets/css/code.css" />
                    {postData.cspost ? cspost(postData) : <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
                </div>
            </Layout>
        </>
    )
}

export function cspost(postData) {
    const [showNonTech, setShowNonTech] = useState(true);

    return (
        <>
            <div className={styles.readingLevel}>
                <div id="nonTechnicalLink" className={showNonTech ? styles.readingLevelSelected : styles.readingLevelUnselected} onClick={() => { setShowNonTech(true); showNonTechnical() }}>Non-Technical</div>
                <div id="technicalLink" className={showNonTech ? styles.readingLevelUnselected : styles.readingLevelSelected} onClick={() => { setShowNonTech(false); showTechnical() }}>Technical</div>
            </div>
            <div id="nonTechnicalContent" className={styles.content} dangerouslySetInnerHTML={{ __html: postData.nonTechnicalContent }} />
            <div id="technicalContent" className={styles.content} style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: postData.technicalContent }} />
        </>
    )
}

export function showNonTechnical() {
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    fadeOut(technicalContent);
    technicalContent.style.display = "none";
    nonTechnicalContent.style.display = "block";
    fadeIn(nonTechnicalContent);
}

export function showTechnical() {
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    fadeOut(nonTechnicalContent);
    nonTechnicalContent.style.display = "none";
    technicalContent.style.display = "block";
    fadeIn(technicalContent);
}

let intervalID;

function fadeOut(fade) {
    clearInterval(intervalID);
    var opacity = 1;
    fade.style.opacity = 1;
    intervalID = setInterval(function () {

        if (opacity > 0) {
            opacity = opacity - 0.02;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);
}

function fadeIn(fade) {
    clearInterval(intervalID);
    var opacity = 0;
    fade.style.opacity = 0;
    intervalID = setInterval(function () {

        if (opacity < 1) {
            opacity = opacity + 0.02;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);
}