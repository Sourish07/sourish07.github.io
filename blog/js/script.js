const nonTechnicalContent = $("#non-technical-content").detach();
const technicalContent = $("#technical-content").detach();
$(".blog-container").append(nonTechnicalContent);

$("#non-technical-link").on("click", function () {
    const nonTechnicalLink = $("#non-technical-link")
    nonTechnicalLink.addClass("reading-level-selected");
    nonTechnicalLink.removeClass("reading-level-unselected");

    const technicalLink = $("#technical-link");
    technicalLink.removeClass("reading-level-selected");
    technicalLink.addClass("reading-level-unselected");

    $(".content").html(nonTechnicalContent);
})

$("#technical-link").on("click", function () {
    const technicalLink = $("#technical-link");
    technicalLink.addClass("reading-level-selected");
    technicalLink.removeClass("reading-level-unselected");

    const nonTechnicalLink = $("#non-technical-link")
    nonTechnicalLink.removeClass("reading-level-selected");
    nonTechnicalLink.addClass("reading-level-unselected");

    $(".content").html(technicalContent);
})