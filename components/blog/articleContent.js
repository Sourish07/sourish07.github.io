import { useState, useMemo } from 'react';
import styles from '@/styles/blog/Post.module.css';

export function ArticleContent({ children }) {
    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}

export function MultiLevelArticleContent({ children }) {
    const [showNonTech, setShowNonTech] = useState(true);

    // useMemo is used to store the results of this calculation
    const { nonTechnicalContent, technicalContent } = useMemo(() => {
        let index = children.findIndex((child) => child.type === 'split');;
        let nonTechnicalContent = children.slice(0, index);
        let technicalContent = children.slice(index + 1);
        return { nonTechnicalContent, technicalContent };
    }, [children]);

    return (
        <>
            <div className={styles.readingLevel}>
                <div id="nonTechnicalLink" className={showNonTech ? styles.readingLevelSelected : styles.readingLevelUnselected} onClick={() => { setShowNonTech(true); showNonTechnical() }}>Non-Technical</div>
                <div id="technicalLink" className={showNonTech ? styles.readingLevelUnselected : styles.readingLevelSelected} onClick={() => { setShowNonTech(false); showTechnical() }}>Technical</div>
            </div>
            <div id="nonTechnicalContent" className={styles.content}>
                {nonTechnicalContent}
            </div>
            <div id="technicalContent" className={styles.content} style={{ display: "none" }}>
                {technicalContent}
            </div>
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