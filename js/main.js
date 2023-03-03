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
            $(this).css('transform', 'translateX(calc(-'+ (i * 100) +'%))');
            i++;
        });
    });
    $('.catalog-slider__content-item input').change(function () {
        $(this).parent().siblings('.catalog-slider__content-item').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents('.catalog-slider').find('.catalog-slider__tabs').css('--active', $(this).parent().index() + 1);
    });

    // Brand
    $('.brand__item').each(function (i) {
        $(this).css('--top', i * 1.2 + 'rem');
        $('.brand__container').css('--top', i * 1.2 + 'rem');
        let item = $(this);

        $(document).scroll(function () {
            if (item.next().length) {
                let top = item.position().top,
                    nextTop = item.next().position().top - rem(2.1),
                    scale = (nextTop - top) / (item.outerHeight() + rem(25)) * 0.03;

                item.css('--scale', scale);

                if (nextTop - top - rem(5) <= 0) {
                    item.addClass('hide');
                } else {
                    item.removeClass('hide');
                }
            }
        });
    });

});