let headermenu = document.querySelector('.header-menu');
let menu = document.querySelector('.header-nav');
let menulinks = menu.querySelectorAll('.header-link');
headermenu.addEventListener('click',
    function() {
        headermenu.classList.toggle('header-menu--active');
        menu.classList.toggle('header-nav--active');
        document.body.classList.toggle('stop-scroll');
    })
menulinks.forEach(function(el) {
    el.addEventListener('click', function() {
        headermenu.classList.remove('header-menu--active');
        menu.classList.remove('header-nav--active');
        document.body.classList.remove('stop-scroll');
    })
});

var swiper2 = new Swiper('.mySwiper', {
    breakpoints: {
        360: {
            slidesPerView: 1,
            spaceBetween: 0,
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
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
     
});