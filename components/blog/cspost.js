import { useState, useMemo } from 'react';
import styles from '@/styles/blog/Post.module.css';

export function Cspost({ children }) {
    const [showNonTech, setShowNonTech] = useState(true);

    const { nonTechnicalContent, technicalContent } = useMemo(() => {
        let index = children.findIndex((child) => child.type === 'split');;
        let nonTechnicalContent = children.slice(0, index);
        let technicalContent = children.slice(index + 1);
        console.log("HI")
        return { nonTechnicalContent, technicalContent };
    }, [children]);

    // const { nonTechnicalContent, technicalContent } = useMemo(() => {
    //     return children.reduce(
    //         (acc, child) => {
    //             if (child.type === 'split') {
    //                 acc.beforeSplit = false;
    //             } else {
    //                 acc.beforeSplit
    //                     ? acc.nonTechnicalContent.push(child)
    //                     : acc.technicalContent.push(child);
    //             }
    //             console.log("HI");
    //             return acc;
    //         },
    //         { nonTechnicalContent: [], technicalContent: [], beforeSplit: true }
    //     );
    // }, [children]);


    return (
        <>
            <div className={styles.readingLevel}>
                <div id="nonTechnicalLink" className={showNonTech ? styles.readingLevelSelected : styles.readingLevelUnselected} onClick={() => { setShowNonTech(true); showNonTechnical() }}>Non-Technical</div>
                <div id="technicalLink" className={showNonTech ? styles.readingLevelUnselected : styles.readingLevelSelected} onClick={() => { setShowNonTech(false); showTechnical() }}>Technical</div>
            </div>
            {/* <div id="nonTechnicalContent" className={styles.content} dangerouslySetInnerHTML={{ __html: postData.nonTechnicalContent }} /> */}
            {/* <div id="technicalContent" className={styles.content} style={{ display: "none" }} dangerouslySetInnerHTML={{ __html: postData.technicalContent }} /> */}
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