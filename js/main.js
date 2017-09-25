// carousels, 1. hero slide, 2. Feedbavk slide
$(function () {

    $(".owl-carousel-hero").owlCarousel({
        items: 1,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplaySpeed: 1000
    });

    $(".owl-carousel-client-feedback").owlCarousel({
        navContainer: '#customNav',
        items: 1,
        rewind: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplaySpeed: 3000,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });

});

// Portfolio filtering
$(function () {
    var selectedClass = "";
    $(".fil-cat").click(function () {
        // handling active class
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        // filtering images with data rel
        selectedClass = $(this).attr("data-rel");
        $("#portfolio_items").fadeTo(100, 0.1);
        $("#portfolio_items div.tile").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $("#portfolio_items").fadeTo(300, 1);
        }, 300);

    });
});

// navigation js, scrollspy, affix, active class
var lastId,
    topMenu = $("#navbar-custom"),
    topMenuHeight = topMenu.outerHeight() + 15,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) { return item; }
    });

$(window).scroll(function () { // affix
    // var sticky = $('.sticky'),
    var scroll = $(window).scrollTop();

    if (scroll >= 400) {
        topMenu.addClass('fixed');
    } else {
        topMenu.removeClass('fixed');
    }

    if (scroll >= 700) {
        $('.up-we-go').fadeIn(1000);
    } else if (scroll < 700) {
        $('.up-we-go').fadeOut();
    }
}); // end affix
// Bind click handler to menu items
// so we can get a fancy scroll animation

menuItems.click(function (e) {
    var href = $(this).attr("href"),
        offsetTop = href === "#" ? 0 : $(href).offset().top;
    $('html, body').stop().animate({
        scrollTop: offsetTop
    }, 300);
    e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
    // Get container scroll position
    var fromTop = $(this).scrollTop() + topMenuHeight;

    // Get id of current scroll item
    var cur = scrollItems.map(function () {
        if ($(this).offset().top < fromTop)
            return this;
    });
    // Get the id of the current element
    cur = cur[cur.length - 1];
    var id = cur && cur.length ? cur[0].id : "";

    if (lastId !== id) {
        lastId = id;
        // Set/remove active class
        menuItems
            .parent().removeClass("active")
            .end().filter("[href='#" + id + "']").parent().addClass("active");
    }
});

// hiede mobile menu on click
$(function () {
    var navMain = $("#bs-example-navbar-collapse-1");
    navMain.on("click", "a", null, function () {
        navMain.collapse('hide');
    });
});

// scroll to top btn animate
$(".up-we-go").click(function () {
    $('html, body').animate({
        scrollTop: $("#home").offset().top
    }, 2000);
});

$(function () {
    // initialize wow.js
    new WOW().init();
    $('#hero_slider  .slider-img').load(function () {
        $('.preloader').fadeOut();
    });
});