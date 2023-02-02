
const nonTechnicalContent = $("#non-technical-content")//.detach();
const technicalContent = $("#technical-content")//.detach();
//technicalContent.css("display", "block");

const content = $(".content")
//content.html(nonTechnicalContent);

const nonTechnicalLink = $("#non-technical-link");
const technicalLink = $("#technical-link");


$("#non-technical-link").on("click", function () {
    if (nonTechnicalLink.hasClass("reading-level-selected")) {
        return;
    }

    nonTechnicalLink.addClass("reading-level-selected");
    nonTechnicalLink.removeClass("reading-level-unselected");

    technicalLink.removeClass("reading-level-selected");
    technicalLink.addClass("reading-level-unselected");

    content.fadeOut(200, function () {
        content.html(nonTechnicalContent);
    });

    content.fadeIn();
})

$("#technical-link").on("click", function () {    
    if (technicalLink.hasClass("reading-level-selected")) {
        return;
    }

    technicalContent.css("display", "block");

    technicalLink.addClass("reading-level-selected");
    technicalLink.removeClass("reading-level-unselected");

    nonTechnicalLink.removeClass("reading-level-selected");
    nonTechnicalLink.addClass("reading-level-unselected");

    content.fadeOut(200, function () {
        content.html(technicalContent);
    });
    
    content.fadeIn();
})