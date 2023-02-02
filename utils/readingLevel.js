
alert("HI");

const nonTechnicalContent = document.querySelector("#nonTechincalContent")
const technicalContent = document.querySelector("#technicalContent")

const content = document.querySelector("#content")

const nonTechnicalLink = document.querySelector("#nonTechnicalLink")
const technicalLink = document.querySelector("#technicalLink")

nonTechnicalLink.addEventListener("click", function () {
    if (nonTechnicalLink.classList.contains("readingLevelSelected")) {
        return;
    }

    nonTechnicalLink.classList.add("readingLevelSelected")
    nonTechnicalLink.classList.remove("readingLevelUnselected")

    technicalLink.classList.remove("readingLevelSelected")
    technicalLink.classList.add("readingLevelUnselected")

    content.style.display = "none"
    content.innerHTML = nonTechnicalContent.innerHTML
    content.style.display = "block"
})

technicalLink.addEventListener("click", function () {
    if (technicalLink.classList.contains("readingLevelSelected")) {
        return;
    }

    technicalLink.classList.add("readingLevelSelected")
    technicalLink.classList.remove("readingLevelUnselected")

    nonTechnicalLink.classList.remove("readingLevelSelected")
    nonTechnicalLink.classList.add("readingLevelUnselected")

    content.style.display = "none"
    content.innerHTML = technicalContent.innerHTML
    content.style.display = "block"
})