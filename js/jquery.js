$(document).ready(function() {
    // 요소 사이즈 정의
    var w = window.innerWidth;
    var h = window.innerHeight;
    var wh = w / (h * 1920 / 1080);
    commonSizing = function(w, h, wh) {
        $(".poster>img").css("height", $(".poster>img").width() * (2715 / 1920));
    }
    pcSizing = function(w, h, wh) {
        $("#box1, #box1>*").removeAttr("style");
        if (wh > 1) {
            $("#box1, #box1>*").css("width", w);
        }
        if (wh <= 1) {
            $("#box1, #box1>*").css("height", h);
            $(".video1").css("left", (w - (h * 1920 / 1080)) / 2);
        }
    }
    tabletSizing = function(w, h, wh) {
        $("#box1, #box1>*").removeAttr("style");
        if (wh > 1) {
            $("#box1, #box1>*").css("width", w);
            $("#box1").css("height", h);
        }
        if (wh <= 1) {
            $("#box1, #box1>*").css("width", "1200px");
        }
    }
    mobileSizing = function(w, h, wh) {
        $("#box1, #box1>*").removeAttr("style");
        if (wh > 1) {
            $("#box1, #box1>*").css("width", w);
            $("#box1").css("height", h);
        }
        if (wh <= 1) {
            $("#box1, #box1>*").css("width", "940px");
        }
    }
    commonSizing(w, h, wh);
    if (w > 1200) {
        pcSizing(w, h, wh);
    } else if (w > 940) {
        tabletSizing(w, h, wh);
    } else {
        mobileSizing(w, h, wh);
    }
    // if (matchMedia("screen and (min-width: 1200px)").matches) {
    //     pcSizing(w, h, wh);
    // } else if (matchMedia("screen and (min-width: 940px)").matches) {
    //     tabletSizing(w, h, wh);
    // } else {
    //     mobileSizing(w, h, wh);
    // }
    window.onresize = function(event) {
        var w = window.innerWidth;
        var h = window.innerHeight;
        var wh = w / (h * 1920 / 1080);
        commonSizing(w, h, wh);
        if (w > 1200) {
            pcSizing(w, h, wh);
        } else if (w > 940) {
            tabletSizing(w, h, wh);
        } else {
            mobileSizing(w, h, wh);
        }
        // if (matchMedia("screen and (min-width: 1200px)").matches) {
        //     pcSizing(w, h, wh);
        // } else if (matchMedia("screen and (min-width: 940px)").matches) {
        //     tabletSizing(w, h, wh);
        // } else {
        //     mobileSizing(w, h, wh);
        // }
    };
    // 스크롤 이벤트 정의
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50 ){
            $('.bg_trans').addClass('show');
            $('.fixed').css("height", "80px");
            $('.fixed ul').css("width", "640px");
            $('.fixed li').css("font-size", "0.9rem");
            $('.fixed li').css("letter-spacing", "4px");
            $('.fixed li').css("line-height", "80px");
        } else {
            $('.bg_trans').removeClass('show');
            $('.fixed').css("height", "100px");
            $('.fixed ul').css("width", "800px");
            $('.fixed li').css("font-size", "1.1rem");
            $('.fixed li').css("letter-spacing", "3px");
            $('.fixed li').css("line-height", "100px");
        };
    });
    $("li:nth-child(1)").click(function(){
        $('html, body').animate({
            scrollTop : $("#box1").offset().top
        }, 800);
    });
    $("li:nth-child(2)").click(function(){
        $('html, body').animate({
            scrollTop : $("#box2").offset().top
        }, 800);
    });
    $("li:nth-child(3)").click(function(){
        $('html, body').animate({
            scrollTop : $("#box3").offset().top
        }, 800);
    });
    $("li:nth-child(4)").click(function(){
        $('html, body').animate({
            scrollTop : $("#box4").offset().top
        }, 800);
    });
    $("li:nth-child(5)").click(function(){
        $('html, body').animate({
            scrollTop : $("#box5").offset().top
        }, 800);
    });
    $('.scroll').on('click', function(e){		
        e.preventDefault()
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 1000);
    });
    // 비디오 이벤트 정의
    // $('video').each(function() {
    //     $(this).on('ended',function(){
    //         $(this).remove();
    //     });
    // });
});