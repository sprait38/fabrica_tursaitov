let headermenu = document.querySelector('.header-menu');
let menu = document.querySelector('.header-nav');
let menulinks = menu.querySelectorAll('.header-link');
headermenu.addEventListener('click',
    function () {
        headermenu.classList.toggle('header-menu--active');
        menu.classList.toggle('header-nav--active');
        document.body.classList.toggle('stop-scroll');
    })
menulinks.forEach(function (el) {
    el.addEventListener('click', function () {
        headermenu.classList.remove('header-menu--active');
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    })
});

var swiper1 = new Swiper('.mySwiper', {
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 26,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
        1339: {
            slidesPerView: 0,
            spaceBetween: 0,
        }
    },
    watchSlidesProgress: true,
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination1',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next1',
        prevEl: '.swiper-button-prev1',
    },

});

var swiper2 = new Swiper('.offis', {
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1019: {
            slidesPerView: 2,
            spaceBetween: 30,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
        1339: {
            slidesPerView: 0,
            spaceBetween: 31,
        }
    },
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
});


var swiper2 = new Swiper('.portner', {
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1019: {
            slidesPerView: 6,
            spaceBetween: 30,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
        1339: {
            slidesPerView: 8,
            spaceBetween: 31,
        }
    },
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    allowTouchMove: false,
    navigation: {
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
});