var timer = "";
var i = 0;
var a = 0;
var b = 0;
var c = 0;
$(window).load(function () {
    $('.demo__section').height($(window).height());
    $('#who,#News,#Investors,#Careers').height($(window).height());
    $('#lunbo').height($('#lunbo img').height())
    startTime();
    $("#lunbo a").on("swipeleft", function () {
        clearInterval(timer);
        $(this).prev().show().siblings('a').hide();
        startTime();
    });
    $("#lunbo a").on("swiperight", function () {
        clearInterval(timer);
        $(this).next().show().siblings('a').hide();
        startTime();
    });
    $('#who .navigation>a:eq(0)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        if (a == 0) {
            a = $('#who .carousel-content>div').length;
        }
        a--;
        $('#who .carousel-content>div').eq(a).show(200).siblings('div').hide();
        $('#who .pagination>span:eq(0)').text(a + 1);

    });
    $('#who .navigation>a:eq(1)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        a++;
        if (a == $('#who .carousel-content>div').length) {
            a = 0;
        }
        $('#who .carousel-content>div').eq(a).show(200).siblings('div').hide();
        $('#who .pagination>span:eq(0)').text(a + 1);
    });
    /***********/
    $('#Investors .navigation>a:eq(0)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        if (a == 0) {
            a = $('#Investors .carousel-content>div').length;
        }
        a--;
        $('#Investors .carousel-content>div').eq(a).show(200).siblings('div').hide();
        $('#Investors .pagination>span:eq(0)').text(a + 1);

    });
    $('#Investors .navigation>a:eq(1)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        a++;
        if (a == $('#Investors .carousel-content>div').length) {
            a = 0;
        }
        $('#Investors .carousel-content>div').eq(a).show(200).siblings('div').hide();
        $('#Investors .pagination>span:eq(0)').text(a + 1);
    });
    /**************/
    $('.demo__section-3').click(function () {
        $('#innovation .text-wrapper h1').fadeIn(200).animate({opacity: 1}, 2000);
        $('#innovation .text-wrapper p').fadeIn(200).animate({opacity: 1}, 2000);
    })
    $('.demo__section-1,.demo__section-2,.demo__section-4').click(function () {
        $('#innovation .text-wrapper h1').animate({opacity: 0});
        $('#innovation .text-wrapper p').animate({opacity: 0});
    })
    $('.lift-up .navigation>a:eq(0)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        if (b == 0) {
            b = $('.lift-up .carousel-content>div').length;
        }
        b--;
        $('.lift-up .carousel-content>div').eq(b).show(200).siblings('div').hide();
        $('.lift-up .pagination>span:eq(0)').text(b + 1);

    });
    $('.lift-up .navigation>a:eq(1)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        b++;
        if (b == $('.demo__section-3 .lift-up  .carousel-content>div').length) {
            b = 0;
        }
        $('.lift-up .carousel-content>div').eq(b).show(200).siblings('div').hide();
        $('.lift-up .pagination>span:eq(0)').text(b + 1);
    });
    $('.lift-down .navigation>a:eq(0)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        if (b == 0) {
            b = $('.lift-down .carousel-content>div').length;
        }
        b--;
        $('.lift-down .carousel-content>div').eq(b).show(200).siblings('div').hide();
        $('.lift-down .pagination>span:eq(0)').text(b + 1);

    });
    $('.lift-down .navigation>a:eq(1)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        b++;
        if (b == $('.demo__section-3 .lift-down .carousel-content>div').length) {
            b = 0;
        }
        $('.lift-down .carousel-content>div').eq(b).show(200).siblings('div').hide();
        $('.lift-down .pagination>span:eq(0)').text(b + 1);
    });
    if ($(window).width() >= 768) {
        $('.demo__section-3 #innovation video').css({"left": "0", "width": "100%"});
    }
    /******************************/
    $('.fblog .navigation>a:eq(0)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        if (c == 0) {
            c = $('.fblog .carousel-content>div').length;
        }
        c--;
        $('.fblog .carousel-content>div').eq(c).show(200).siblings('div').hide();
        $('.fblog .pagination>span:eq(0)').text(c + 1);

    });
    $('.fblog .navigation>a:eq(1)').click(function (event) {
        $(this).css({"background-color": "#124191", "color": "#fff"}).siblings('a').css({
            "background-color": "",
            "color": "#124191"
        })
        c++;
        if (c == $('.demo__section-3 .fblog .carousel-content>div').length) {
            c = 0;
        }
        $('.fblog .carousel-content>div').eq(c).show(200).siblings('div').hide();
        $('.fblog .pagination>span:eq(0)').text(c + 1);
    });
    $('.Section').height($('Section>img').height())
    $('#Section_1>a').css({"left": ($('#Section_1').width() - $('#Section_1>a').width()) / 2 + "px"})
    $('#product>#img_show a').eq(0).show().siblings('a').hide();
    $('#product>ul li').click(function (event) {
        $(this).css({"border": " 1px solid #000"}).siblings('li').css({"border": " 1px solid transparent"})
        var index = $(this).index();
        $('#product>#img_show a').eq(index).show().siblings('a').hide();
    });
    $('#product>#tablan>a').click(function (event) {
        $(this).css({"background-color": "#283242", "color": "#fff"}).siblings('a').css({
            "background-color": "#fff",
            "color": "#283242"
        });
        var index = $(this).index();
        $('#product>#tab_show>div').eq(index).show().siblings('div').hide();
    });
    $('#product>#tab_show').height($('#product>#tab_show div ul').outerHeight(true) + 20);
    $('.navigation-bar>a').click(function (event) {
        window.location.href = "login.html";
    });

    $("#vid").click(function () {
        var my = document.getElementById("myvideo");
        my.play();
    })

});

function startTime() {
    timer = setInterval(function () {
        i++;
        if (i > $('#lunbo a').length) {
            i = 0;
        }
        show();
    }, 3000)
}

function show() {
    $('#lunbo a').eq(i).show().siblings('a').hide();
}
