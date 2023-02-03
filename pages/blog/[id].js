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
            <div id="content" style={{width: "100%"}}>
                {postData.cspost ? cspost(postData) : <div className={styles.content} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />}
            </div>
            <style>
                {`
                    /*
                    Atom One Dark by Daniel Gamage
                    Original One Dark Syntax theme from https://github.com/atom/one-dark-syntax
                    base:    #282c34
                    mono-1:  #abb2bf
                    mono-2:  #818896
                    mono-3:  #5c6370
                    hue-1:   #56b6c2
                    hue-2:   #61aeee
                    hue-3:   #c678dd
                    hue-4:   #98c379
                    hue-5:   #e06c75
                    hue-5-2: #be5046
                    hue-6:   #d19a66
                    hue-6-2: #e6c07b
                    */
                    
                    pre {
                      padding: 10px;
                      overflow: auto;
                      border-radius: 5px;
                      margin-bottom: 15px;
                    }
                    
                    pre + pre {
                      margin-top: 15px;
                    }
                    
                    code {
                      background-color: #eef;
                      font-size: 1rem;
                      font-family: 'Source Code Pro', monospace;
                      font-weight: 400;
                    }

                    p code {
                        padding: 0 5px;
                        border-radius: 3px;
                    }
                    
                    pre,
                    .hljs {
                      color: #abb2bf;
                      background: #282c34;
                      font-size: 1rem;
                    }
                    
                    .hljs-comment,
                    .hljs-quote {
                      color: #5c6370;
                      font-style: italic;
                    }
                    
                    .hljs-doctag,
                    .hljs-keyword,
                    .hljs-formula {
                      color: #c678dd;
                    }
                    
                    .hljs-section,
                    .hljs-name,
                    .hljs-selector-tag,
                    .hljs-deletion,
                    .hljs-subst {
                      color: #e06c75;
                    }
                    
                    .hljs-literal {
                      color: #56b6c2;
                    }
                    
                    .hljs-string,
                    .hljs-regexp,
                    .hljs-addition,
                    .hljs-attribute,
                    .hljs-meta .hljs-string {
                      color: #98c379;
                    }
                    
                    .hljs-attr,
                    .hljs-variable,
                    .hljs-template-variable,
                    .hljs-type,
                    .hljs-selector-class,
                    .hljs-selector-attr,
                    .hljs-selector-pseudo,
                    .hljs-number {
                      color: #d19a66;
                    }
                    
                    .hljs-symbol,
                    .hljs-bullet,
                    .hljs-link,
                    .hljs-meta,
                    .hljs-selector-id,
                    .hljs-title {
                      color: #61aeee;
                    }
                    
                    .hljs-built_in,
                    .hljs-title.class_,
                    .hljs-class .hljs-title {
                      color: #e6c07b;
                    }
                    
                    .hljs-emphasis {
                      font-style: italic;
                    }
                    
                    .hljs-strong {
                      font-weight: bold;
                    }
                    
                    .hljs-link {
                      text-decoration: underline;
                    }
                `}
            </style>
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
            <div id="technicalContent" className={styles.content} style={{display: "none"}} dangerouslySetInnerHTML={{ __html: postData.technicalContent }} />
        </>
    )
}

export function chooseNonTechnical() {
    const nonTechnicalLink = document.querySelector("#nonTechnicalLink")
    const technicalLink = document.querySelector("#technicalLink")
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    if (nonTechnicalLink.classList.contains(styles.readingLevelSelected)) {
        return;
    }

    nonTechnicalLink.className = styles.readingLevelSelected;
    technicalLink.className = styles.readingLevelUnselected;


    fadeOut(technicalContent);
    technicalContent.style.display = "none";
    nonTechnicalContent.style.display = "block";
    fadeIn(nonTechnicalContent);
}

export function chooseTechnical() {
    const nonTechnicalLink = document.querySelector("#nonTechnicalLink")
    const technicalLink = document.querySelector("#technicalLink")
    const nonTechnicalContent = document.querySelector("#nonTechnicalContent")
    const technicalContent = document.querySelector("#technicalContent")

    if (technicalLink.classList.contains(styles.readingLevelSelected)) {
        return;
    }

    technicalLink.className = styles.readingLevelSelected;
    nonTechnicalLink.className = styles.readingLevelUnselected;
    
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
    intervalID = setInterval(function() {
  
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
    intervalID = setInterval(function() {
  
        if (opacity < 1) {
            opacity = opacity + 0.02;
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 10);
}