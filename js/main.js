'use strict'

$(document).ready(function () {

    // Header search
    $('.header__search input').focusin(function () {
        $(this).parent().addClass('active');
    }).focusout(function () {
        $(this).parent().removeClass('active');
    });

    // Header burger
    $('.header__burger-btn').click(function () {
        $('body').toggleClass('lock');
        $(this).toggleClass('active');
        $('.header__menu-wrap').toggleClass('active');
    });

    // Catalog-slider content item
    $('.catalog-slider__content').each(function () {
        let i = 1;
        $(this).find('.catalog-slider__content-item:not(:first-child)').each(function () {
            if ($(window).width() <= 768) {
                $(this).css('transform', 'translateX(calc(-'+ (i * 100) +'% - '+ (i * 2.8) +'rem))');
            } else {
                $(this).css('transform', 'translateX(calc(-'+ (i * 100) +'% - '+ (i * 4) +'rem))');
            }
            i++;
        });
    });
    $('.catalog-slider__content-item input').change(function () {
        $(this).parent().siblings('.catalog-slider__content-item').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents('.catalog-slider').find('.catalog-slider__tabs').css('--active', $(this).parent().index() + 1);
    });

});