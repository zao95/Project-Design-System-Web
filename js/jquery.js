
// 메인 코드
$(document).ready(function() {
    sizeJustify();
    menuClickScroll();
    scrollEvent();
    // 비디오 이벤트 정의
    // $('video').each(function() {
    //     $(this).on('ended',function(){
    //         $(this).remove();
    //     });
    // });
    // 이미지 전환 이벤트 정의
    // $('#one').hover(function() {

    //     // increase the 500 to larger values to lengthen the duration of the fadeout 
    //        // and/or fadein
    //     $('#one').fadeOut(500, function() {
    //         $('#one').attr("src","/newImage.png");
    //         $('#one').fadeIn(500);
    //     });
    
    // });
});


// 영상 강제 재생 코드
jQuery.event.add(window,"load",function(){
    $(".video1").play();
});


// 메뉴 클릭 시 이동 이벤트
menuClickScroll = function() {
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
}


// 스크롤 이벤트 정의
scrollEvent = function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 50 ){
            $('.bg_trans').addClass('show');
            $('.fixed').css("height", "80px");
            $('.fixed li').css("color", "#fff");
            $('.fixed li').css("opacity", "1");
            $('.fixed li').css("font-size", "0.9rem");
            $('.fixed li').css("letter-spacing", "4px");
            $('.fixed li').css("line-height", "80px");
        } else {
            $('.bg_trans').removeClass('show');
            $('.fixed').css("height", "100px");
            $('.fixed li').css("color", "#000");
            $('.fixed li').css("opacity", "0.8");
            $('.fixed li').css("font-size", "1.1rem");
            $('.fixed li').css("letter-spacing", "3px");
            $('.fixed li').css("line-height", "100px");
        };
    });
}


// 요소 사이즈 정의
sizeJustify = function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    alert(h);
    // var h = window.innerHeight;
    var wh = w / (h * 1920 / 1080);
    commonSizing = function(w, h, wh) {
        $(".poster").css("height", $(".poster").width() * (2715 / 1920));
        $(".ticket").css("height", $(".ticket").width() * (1181 / 3307));
    }
    pcSizing = function(w, h, wh) {
        $(".fixed>ul").css("width", "800px");
    }
    tabletSizing = function(w, h, wh) {
        $(".fixed>ul").css("width", "800px");
    }
    mobileSizing = function(w, h, wh) {
        $(".fixed>ul").css("width", "640px");
    }
    commonSizing(w, h, wh);
    if (w > 1200) {
        pcSizing(w, h, wh);
    } else if (w > 940) {
        tabletSizing(w, h, wh);
    } else {
        mobileSizing(w, h, wh);
    }
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
    };
}