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
        slidesToScroll: 10
    });

    $('.article-slider__box').slick({
        prevArrow: '<button class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slider-left.svg" alt="arrow left"></button>',
        nextArrow: '<button class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slider-right.svg" alt="arrow right"></button>',
    });

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living-room'
        }
    });
})