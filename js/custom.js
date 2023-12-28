(function ($) {
    
    "use strict";


/* =================================
===  STICKY NAV                 ====
=================================== */
    $('.main-navigation').onePageNav({
        scrollThreshold: 0.2, // Adjust if Navigation highlights too early or too late
        scrollOffset: 75, //Height of Navigation Bar
        filter: ':not(.external)',
        changeHash: true
    }); 

    /* NAVIGATION VISIBLE ON SCROLL / NOTE: In this style, Navigation always visible. I kept the code so you can hide it if you want. */

    mainNav();
    $(window).scroll(function () {
        mainNav();
    });

    function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
        else $('.sticky-navigation').stop().animate({
            "opacity": '1',
            "top": '0'
        });
    }


/* =================================
===  OWL CROUSEL               ====
=================================== */
    var owl = $("#screenshots");
    owl.owlCarousel({
        items: 3, //3 items above 1000px browser width
        itemsDesktop: [1000, 3], //3 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //1 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: false, // Show next and prev buttons
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 5000,
        stopOnHover: true
    });

    var owl = $("#feedbacks");
    owl.owlCarousel({
        items: 3, //3 items above 1000px browser width
        itemsDesktop: [1000, 2], //2 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //1 items between 600 and 0
        itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
        navigation: false, // Show next and prev buttons
        stopOnHover: true
    });


/* =================================
===  Nivo Lightbox              ====
=================================== */
    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

/* =================================
===  Netlify              ====
=================================== */


/* $(document).ready(function() {
    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();
    
        fetch("/", {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(response => {
            if (response.ok) {
                // Show custom success message
                document.getElementById('custom-success-message').style.display = 'block';
            } else {
                // Show custom error message
                document.getElementById('custom-error-message').style.display = 'block';
            }
        })
        .catch(error => {
            // Show custom error message
            document.getElementById('custom-error-message').style.display = 'block';
        });
    }, { passive:false });}); */


    document.getElementById('contact').addEventListener('submit', function(event) {
        event.preventDefault();
    
        fetch("/", {
            method: "POST",
            body: new FormData(event.target)
        })
        .then(response => {
            if (response.ok) {
                document.getElementById('custom-success-message').classList.add('visible');
                document.getElementById('custom-error-message').classList.remove('visible');
            } else {
                document.getElementById('custom-error-message').classList.add('visible');
                document.getElementById('custom-success-message').classList.remove('visible');
            }
        })
        .catch(error => {
            document.getElementById('custom-error-message').classList.add('visible');
            document.getElementById('custom-success-message').classList.remove('visible');
        });
    });

/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
    $('.expand-form').simpleexpand({
        'defaultTarget': '.expanded-contact-form'
    });


/* =================================
===  DOWNLOAD BUTTON CLICK SCROLL ==
=================================== */
    $('#cta-1, #cta-2, #cta-3, #cta-4, #cta-5').localScroll({
        duration: 1000
    });



/* =================================
===  RESPONSIVE VIDEO             ==
=================================== */
    $(".video-container").fitVids();


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function (event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function () {
            window.location.hash = target;
        });
    });


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement('style')
        msViewportStyle.appendChild(
        document.createTextNode('@-ms-viewport{width:auto!important}'))
        document.querySelector('head').appendChild(msViewportStyle)
    }
})(jQuery);




$(window).resize(function () {

    "use strict";

    var ww = $(window).width();
    
    /* COLLAPSE NAVIGATION ON MOBILE AFTER CLICKING ON LINK */
    
    if (ww < 480) {
        $('.main-navigation a').on('click', function () {
            $(".navbar-toggle").click();
        });
    }
});