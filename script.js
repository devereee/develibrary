(function($) {

"use strict";

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-conent]')

tabs.forEach(tab => {
tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabtTarget)
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
        tab.classList.remove('active')
    })
    tab.classList.add('active')
    target.classList.add('active')
})
});


const hamburgert = document.querySelector(".hamburger");
const navMenu = document.querySelector(".menu-list");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
hamburger.classList.toggle("active");
navMenu.classList.toggle("responsive");
}

const navLink = document.querySelector(",nav-link");

navLink.forEach(n => n.addEventListener("click", closemenu));

function closemenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("responsive");
}

var initScrollNav = function() {
    var scroll = $(window).scrollTop();

    if (scroll >=200) {
        $('#header').addClass("fixed-top");
    }else[
        $('#header').removeClass("fixed-top")
    ]
}

$(window).scroll(function(){
    initScrollNav();
})

$(document).ready(function(){
    initScrollNav();
    Chocolat(document.querySelectorAll('image-link'), {
        imageSize: 'contain',
        loop: true,
    })
    $('#header-wrap').on('click', '.search-toggle', function(e) {
        var selector = $(this).data('selector');

        $(selector).toggleClass('show').find('search-input').focus();
        $(this).toggleClass('active');

        e.preventDefault();
    });
    $(document).on('click touchstart', function (e){
        if (!$(e.target).is('.search-toggle, .search-toggle *, #header-wrap, #header-wrap *'

        )){
            $('.search-toggle').removeClass('active');
            $('#header-wrap').removeClass('show');
        }
    });
    $('.main-slider').slick({
        autoplay: false,
        autoplayspeed: 4000,
        fade: true,
        dots: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),

    });
    $('.product-grid').slick({
        slidesToShow: 4,
        slideToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slideToScroll: 1
                }
            },
            {
                breakpoint: 999,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1
                }
            },
            {
                breakpoint: 660,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1
                }
            }

        ]
        });

        AOS.init({
            duration: 1200,
            once: true,
        })

        jQuery('.stellarnav').stellarNav({
            themeL: 'plain',
            closingDelay: 250,
            // mobileMode: false,
        });

});

})(jQuery);