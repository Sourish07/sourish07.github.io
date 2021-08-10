var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll", function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-120px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

$(".sidebar-nav li").on("click", function () {
    $(this).find("a")[0].click()
})