$(function () {

    $('.header__btn').on('click', () => {
        $('.rightside-menu').addClass('rightside-menu--show');
    });

    $('.rightside-menu__close').on('click', () => {
        $('.rightside-menu').removeClass('rightside-menu--show');
    });

    $('.header__btn-menu').on('click', () => {
        $('.menu').toggleClass('menu--open');
    });

    window.addEventListener('resize', () => {
        if ($(window).width() < 651) {
            $('.works-path__item--measuring').appendTo($('.works-path__items-box'));
        }
    });

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: true
    });

    $('.contact-slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 10,
        slidesToScroll: 10,
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 8,
                slidesToScroll: 8
              }
            },
            {
              breakpoint: 1511,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 6
              }
            },
            {
              breakpoint: 1201,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4
              }
            },
            {
                breakpoint: 841,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
                breakpoint: 551,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2
                }
            },
            {
                breakpoint: 376,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
            }
        ]
    });

    $('.article-slider__box').slick({
        prevArrow: '<button class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slider-right.svg" alt="arrow right"></button>',
    });

    try {
        var mixer = mixitup('.gallery__inner', {
            load: {
                filter: '.living-room'
            }
        });
    } catch (error) {}
})