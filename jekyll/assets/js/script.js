
const nonTechnicalContent = $("#non-technical-content").detach();
const technicalContent = $("#technical-content").detach();
technicalContent.css("display", "block");

const content = $(".content")
content.html(nonTechnicalContent);

$("#non-technical-link").on("click", function () {
    
    const nonTechnicalLink = $("#non-technical-link")
    if (nonTechnicalLink.hasClass("reading-level-selected")) {
        return
    }

    nonTechnicalLink.addClass("reading-level-selected");
    nonTechnicalLink.removeClass("reading-level-unselected");

    const technicalLink = $("#technical-link");
    technicalLink.removeClass("reading-level-selected");
    technicalLink.addClass("reading-level-unselected");
    content.fadeOut(200, function () {
        content.html(nonTechnicalContent);
    });

    content.fadeIn();
})

$("#technical-link").on("click", function () {    
    const technicalLink = $("#technical-link");
    if (technicalLink.hasClass("reading-level-selected")) {
        return
    }

    technicalLink.addClass("reading-level-selected");
    technicalLink.removeClass("reading-level-unselected");

    const nonTechnicalLink = $("#non-technical-link")
    nonTechnicalLink.removeClass("reading-level-selected");
    nonTechnicalLink.addClass("reading-level-unselected");

    content.fadeOut(200, function () {
        content.html(technicalContent);
    });
    content.fadeIn();
})