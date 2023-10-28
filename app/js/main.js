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

})