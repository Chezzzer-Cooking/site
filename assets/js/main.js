page('*', (ctx) => {
    page.currentPage = ctx;
    let path = ctx.path == "/" ? "home" : ctx.path;
    $(window).scrollTop(0);
    $.ajax({
        url: `/pages/${path}.html`,
        success: (content) => {
            $("#content").html(content);
            $(".header-link").removeClass("active");
            $(`.header-link[href='${ctx.path}']`).addClass("active");
        },
        error: (e) => {
            alert(`${e.status} ${e.statusText}`);
            page.back();
        }
    })
})

if (location.host == "chezzer.cooking") {
    page()
} else {
    page({
        hashbang:true
    })
}

window.addEventListener('scroll', function() {
    if (window.pageYOffset == 0) {
        $("header").removeClass("active")
    } else {
        $("header").addClass("active")
    }
});