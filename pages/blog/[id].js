import { getAllPostIds, getPostData } from '@/utils/processPosts';

import Layout from '@/components/blog/layout';
import styles from '@/styles/blog/Post.module.css';
import blogStyles from '@/styles/blog/Blog.module.css';
import Date from '@/components/blog/date';

export function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false, // Returns 404 when pages isn't found
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    // console.log(postData);
    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout title={postData.title}>
            <div className={styles.title}>{postData.title}</div>
            <div className={styles.subheader}>{postData.subheader}</div>
            <div className={styles.postInfo}>
                <Date dateString={postData.date} />
                <div style={{ display: "flex", alignItems: "center", width: "100%", marginTop: "5px" }}>
                    <div className={blogStyles.category} >
                        {postData.categories}
                    </div>
                    <div className={styles.author}>By Sourish Kundu</div>
                </div>
            </div>
            {postData.cspost ? cspost(postData) : <div id="content" className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
        </Layout>
    )
}

export function cspost(postData) {
    return (
        <>
            <div className={styles.readingLevel}>
                <div id="nonTechnicalLink" className={styles.readingLevelSelected} onClick={chooseNonTechnical}>Non-Technical</div>
                <div id="technicalLink" className={styles.readingLevelUnselected} onClick={chooseTechnical}>Technical</div>
            </div>
            <div id="nonTechnicalContent" className={styles.content} dangerouslySetInnerHTML={{ __html: postData.nonTechnicalContent }} />
            <div id="technicalContent" className={styles.content} style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: postData.technicalContent }} />
        </>
    )
}

export function chooseNonTechnical() {
    const nonTechnicalLink = document.querySelector("#nonTechnicalLink")
    const technicalLink = document.querySelector("#technicalLink")
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    if (nonTechnicalLink.classList.contains("readingLevelSelected")) {
        return;
    }

    nonTechnicalLink.classList.add(styles.readingLevelSelected)
    nonTechnicalLink.classList.remove(styles.readingLevelUnselected)

    technicalLink.classList.remove(styles.readingLevelSelected)
    technicalLink.classList.add(styles.readingLevelUnselected)


    technicalContent.style.display = "none";
    nonTechnicalContent.style.display = "block";
}

export function chooseTechnical() {
    const nonTechnicalLink = document.querySelector("#nonTechnicalLink")
    const technicalLink = document.querySelector("#technicalLink")
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    if (technicalLink.classList.contains(styles.readingLevelSelected)) {
        return;
    }

    technicalLink.classList.add(styles.readingLevelSelected)
    technicalLink.classList.remove(styles.readingLevelUnselected)

    nonTechnicalLink.classList.remove(styles.readingLevelSelected)
    nonTechnicalLink.classList.add(styles.readingLevelUnselected)

    nonTechnicalContent.style.display = "none";
    technicalContent.style.display = "block";
}