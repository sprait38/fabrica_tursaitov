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


var swiper3 = new Swiper('.swiper_portner', {
    breakpoints: {
        320: {
            slidesPerView: 3,
            spaceBetween: 40,
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

var swiper4 = new Swiper('.swiper_seminar', {
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1019: {
            slidesPerView: 3,
            spaceBetween: 30,
            allowSlideNext: true,
            allowSlidePrev: true,
        },
        1339: {
            slidesPerView: 3,
            spaceBetween: 31,
        }
    },
    freeMode: true,
    mousewheel: true,
    keyboard: true,
    loop: true,
    allowTouchMove: false,
    pagination: {
        el: '.swiper-pagination5',
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next5",
        prevEl: ".swiper-button-prev5",
    },
});


let btns = document.querySelectorAll('.btn');
for (btn of btns) {
  btn.addEventListener('click', function() {

    let seminar_slide = this.closest('.seminar_slide')
    let dots = seminar_slide.querySelector('.dots');
    let more = seminar_slide.querySelector('.more');

    if(dots.style.display === 'none') {
      dots.style.display = 'inline';
      more.style.display = 'none';
      this.textContent = 'Подробнее';
    } else {
      dots.style.display = 'none';
      more.style.display = 'inline';
      this.textContent = 'Скрыть';
    }
  });
}

new Accordion(".accordion-list", {
    elementClass: "accordion",
    triggerClass: "faq__btn",
    panelClass: "accordion__content",
    activeClass: "accordion--active",
  });