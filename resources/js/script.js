$(".sidebar-nav li").on("click", function () {
    $(this).find("a")[0].click();
})

const nav = $(".mobile-sidebar-nav");
$(".header-nav li:first-child").on("click", function (e) {
    nav.css("width", "180px");
})

nav.on("click", function (e) {
    e.stopPropagation();
})

nav.find("a").on("click", function () {
    nav.css("width", 0);
})

$(document).on("click", function (e) {
    const nav = $(".mobile-sidebar-nav");
    if (nav.css("width") !== "0px") {
        nav.css("width", 0);
    }
})


