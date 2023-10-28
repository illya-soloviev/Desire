$(function () {

    $('.header__btn').on('click', () => {
        $('.rightside-menu').removeClass('rightside-menu--close');
    });

    $('.rightside-menu__close').on('click', () => {
        $('.rightside-menu').addClass('rightside-menu--close');
    });

})