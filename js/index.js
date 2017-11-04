
window.onload = function() {

    initMenu();
};

function initMenu() {
    $(".nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");
    });
}
