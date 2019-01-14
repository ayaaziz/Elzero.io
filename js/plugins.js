//Add class active on hover and focus
$("header .navbar-inverse .navbar-nav > li:not(:last-child) a").focus(function () {
    $(this).parent().addClass("active");
})

$("header .navbar-inverse .navbar-nav > li:not(:last-child) a").blur(function () {
    $(this).parent().removeClass("active");
})

$("header .navbar-inverse .navbar-nav > li:not(:last-child) a").hover(function () {
    $(this).parent().toggleClass("active");
})


//Slide Carousel
$(".carousel").carousel({
    interval: 5000
});

//Button Scroll Top
var scrollButton = $("#scroll-top");

$(window).scroll(function () {
    $(this).scrollTop() >= 700 ? scrollButton.show() : scrollButton.hide()
})

scrollButton.click(function () {
    //$(window).scrollTop(0);
    //or
    $("html,body").animate({ scrollTop: 0 }, 4000);
})

//Loading Page
$(document).ready(function () {
    $(".sk-fading-circle").fadeOut(3000, function () {
        $(this).parent().fadeOut(2000, function () {
            $("body").css("overflow","auto");
        })
    });
})

//Change Color From Color Box
var LiButton = $("#color-box ul li");

LiButton
    .eq(0).css("backgroundColor", "#23A2DB").end()
    .eq(1).css("backgroundColor", "#3bb232").end()
    .eq(2).css("backgroundColor", "#811cd0").end()
    .eq(3).css("backgroundColor", "#f110af").end()

$("#color-box i").click(function () {
    LiButton.parent().toggle();
})

LiButton.click(function () {
    //console.log($(this).attr('data-value'));
    $("link[href *='theme']").attr('href', $(this).attr('data-value'));
})

//Using NiceScroll
$(function () {
    $("html").niceScroll();
})

//Change Language
$("a.lang").click(function () {
    if ($(this).hasClass("ar"))
    { 
        $("link[href *= 'bootstrap']").attr("href", $(this).attr("data-value"));
        $(this).text("E");
        $(this).attr("data-value", "css/bootstrap.css");
        $(this).removeClass("ar");
        $(this).addClass("en");
    }
    else if ($(this).hasClass("en"))
    {
        $("link[href *= 'rtl']").attr("href", $(this).attr("data-value"));
        $(this).text("ع");
        $(this).attr("data-value", "css/rtl.css");
        $(this).removeClass("en");
        $(this).addClass("ar");
    }
})