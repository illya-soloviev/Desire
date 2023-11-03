$(function () {

    $('.header__btn').on('click', () => {
        $('.rightside-menu').addClass('rightside-menu--show');
    });

    $('.rightside-menu__close').on('click', () => {
        $('.rightside-menu').removeClass('rightside-menu--show');
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

    var mixer = mixitup('.gallery__inner', {
        load: {
            filter: '.living-room'
        }
    });
})