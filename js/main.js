'use strict'

$(document).ready(function () {

    // Modal
    $.fancybox.defaults.smallBtn = false;
    $.fancybox.defaults.arrows = false;
    $.fancybox.defaults.infobar = false;
    $.fancybox.defaults.touch = false;
    $.fancybox.defaults.toolbar = false;

    // Modal video
    let videoWidth = $(window).width() > 768 ? rem(87.4) : rem(34.5),
        videoHeight = $(window).width() > 768 ? rem(50) : rem(20);
    $('.video__item[data-fancybox], .news-page__img-box[data-fancybox], .product__slide[data-fancybox]')
        .attr('data-width', videoWidth).attr('data-height', videoHeight)
        .fancybox({
            smallBtn: true,
            baseTpl:
                '<div class="fancybox-container" role="dialog" tabindex=" -1">' +
                    '<div class="fancybox-bg"></div>' +
                    '<div class="fancybox-stage modal__stage"></div>' +
                '</div>',
            btnTpl: {
                smallBtn:
                    '<button data-fancybox-close class="modal__close">' +
                        '<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M7.03125 7.96973L21.0928 22.0312" stroke="#373740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                            '<path d="M7.03125 22.0303L21.0928 7.96875" stroke="#373740" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                        '</svg>' +
                    "</button>",
            }
    });

    // Modal buy
    $('.popup-buy').click(function () {
        $.fancybox.open($('.modal-buy'));
    });

    // Modal image
    $('.photo__slide').fancybox({
        arrows: true,
        infobar: true,
        touch: true,
        toolbar: true,
    });

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
        $('.header__menu-wrap, .header__logo').toggleClass('active');
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

    // news tabs
    $('.news__tab').click(function () {
        $('.news__tab.active').removeClass('active');
        $(this).addClass('active');
        let item = $(this);

        function newsDotMove(item) {
            let tabLeft = item.position().left,
                tabWidth = item.outerWidth();

            $('.news__tabs').css('--left', (tabLeft + tabWidth / 2) + 'px');
        }

        newsDotMove(item);
        setTimeout(function () {newsDotMove(item)}, 100);
        setTimeout(function () {newsDotMove(item)}, 200);
    });

    // Career accordion
    $('.career__item-header').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active').siblings('.career__item-content').slideUp(300);
        } else {
            let contentActive =  $('.career__item-header.active').siblings('.career__item-content'),
                contentHeight = contentActive.length ? contentActive.outerHeight() : 0;

            if (contentActive.parent().index() < $(this).parent().index()) {
                $('body, html').animate({scrollTop: $(this).position().top - contentHeight - rem(20)}, 300);
            } else {
                $('body, html').animate({scrollTop: $(this).position().top - rem(20)}, 300);
            }

            $('.career__item-header').removeClass('active').siblings('.career__item-content').slideUp(300);
            $(this).addClass('active').siblings('.career__item-content').slideDown();
        }
    });

    // Product text
    $('.product__text-btn').click(function () {
        $(this).hide().siblings('.product__text').css('display', 'block');
    });

    // Catalog sort
    $('.catalog__sort-label input').change(function () {
        $('.catalog__sort-label.active').removeClass('active');
        $(this).parent().addClass('active');
    });


    // 15-04-2023

    $('.condition__btn').on('click', function(evt) {
        evt.preventDefault();
        $(this).toggleClass('active');
        $(this).closest('.condition').toggleClass('condition_full');
    });

    $('.dropdown_btn').on('click', function(evt) {
        evt.preventDefault();
        let $this = $(this);
        let $parent = $this.parent();
        let $content = $parent.find('.dropdown_content');
        $this.toggleClass('active');
        $content.slideToggle();
    });

    $(document).ready(function() {
        $('select').niceSelect();
    });

});