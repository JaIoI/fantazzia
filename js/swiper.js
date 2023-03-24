// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const main_intro_slider = new Swiper('.main-intro__slider', {
    direction: 'vertical',
    slidesPerView: 1,

    navigation: {
        nextEl: '.main-intro .next',
        prevEl: '.main-intro .prev',
    },

    thumbs: {
        swiper: new Swiper('.main-intro__pagination', {
            speed: 250,

            breakpoints: {
                0: {
                    direction: 'horizontal',
                    slidesPerView: 3,
                },
                769: {
                    direction: 'vertical',
                    slidesPerView: 4,
                    spaceBetween: rem(1.8),
                },
            },
        }),
        multipleActiveThumbs: false,
    },

    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        769: {
            direction: 'vertical',
        },
    },

    on: {
        slideChange: function () {
            let activeNum,
                icon = $('.main-intro__icon-bg'),
                rotate = icon.data('rotate') + 60;

            if ($(window).width() <= 768) {
                activeNum = $('.main-intro__pagination-num.swiper-slide-thumb-active').position().left;
            } else {
                activeNum = $('.main-intro__pagination-num.swiper-slide-thumb-active').position().top;
            }

            icon.data('rotate', rotate);
            $('.main-intro__pagination').css('--pos', activeNum + 'px');
            icon.css('transform', 'rotate('+ rotate +'deg)');
        },
        slideNextTransitionStart: function (slider) {
            slider.thumbs.swiper.slideNext()
        },
        slidePrevTransitionStart: function (slider) {
            slider.thumbs.swiper.slidePrev()
        },
    },
});

$('.catalog-slider__slider').each(function () {
    new Swiper($(this)[0], {
        direction: 'horizontal',

        navigation: {
            nextEl: $(this).siblings('.slider-nav').find('.next')[0],
            prevEl: $(this).siblings('.slider-nav').find('.prev')[0],
        },

        breakpoints: {
            0: {
                slidesPerView: 2,
                spaceBetween: rem(1.1),
            },
            769: {
                slidesPerView: 4,
                spaceBetween: rem(2.2),
            },
        },

        thumbs: {
            swiper: new Swiper ($(this).siblings('.slider-nav').find('.swiper')[0], {
                direction: 'horizontal',
                slidesPerView: 4,
                speed: 250,

                on: {
                    beforeInit: function (slider) {
                        if ($(window).width() <= 768) {
                            $(slider.$el).find('.swiper-slide:last-child').remove();
                        } else {
                            $(slider.$el).find('.swiper-slide:nth-last-child(-n+3)').remove();
                        }
                    },
                }
            }),
            multipleActiveThumbs: false,
        },

        on: {
            slideChange: function (slider) {
                let activeNum = $(slider.$el).siblings('.slider-nav').find('.swiper-slide-thumb-active').position().left;
                $(slider.$el).siblings('.slider-nav').find('.slider-nav__pagination').css('--left', activeNum + 'px');
            },
            slideNextTransitionStart: function (slider) {
                slider.thumbs.swiper.slideNext()
            },
            slidePrevTransitionStart: function (slider) {
                slider.thumbs.swiper.slidePrev()
            },
        },
    });
});

const video_slider = new Swiper('.video-slider__slider', {
    direction: 'horizontal',

    navigation: {
        nextEl: '.video-slider .next',
        prevEl: '.video-slider .prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: rem(3),

            grid: {
                fill: 'row',
                rows: 2,
            },
        },
        769: {
            slidesPerView: 2,
            spaceBetween: rem(2),
        },
    },

    thumbs: {
        swiper: new Swiper ('.video-slider__slider-nav .slider-nav__pagination.swiper', {
            direction: 'horizontal',
            slidesPerView: 4,
            speed: 250,

            on: {
                beforeInit: function (slider) {
                    let qty = $(slider.$el).find('.swiper-slide').length;

                    if ($(window).width() <= 768) {
                        $(slider.$el).find('.swiper-slide:nth-last-child(-n+'+ Math.floor(qty/2) +')').remove();
                    } else {
                        $(slider.$el).find('.swiper-slide:nth-last-child(-n+1)').remove();
                    }
                },
            }
        }),
        multipleActiveThumbs: false,
    },

    on: {
        slideChange: function (slider) {
            let activeNum = $(slider.$el).siblings('.slider-nav').find('.swiper-slide-thumb-active').position().left;
            $(slider.$el).siblings('.slider-nav').find('.slider-nav__pagination').css('--left', activeNum + 'px');
        },
        slideNextTransitionStart: function (slider) {
            slider.thumbs.swiper.slideNext()
        },
        slidePrevTransitionStart: function (slider) {
            slider.thumbs.swiper.slidePrev()
        },
    },
});

$('.news-slider__slider').each(function () {
    new Swiper($(this)[0], {
        direction: 'horizontal',

        navigation: {
            nextEl: $(this).siblings('.slider-nav').find('.next')[0],
            prevEl: $(this).siblings('.slider-nav').find('.prev')[0],
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: rem(3),

                grid: {
                    fill: 'row',
                    rows: 2,
                },
            },
            769: {
                slidesPerView: 3,
                spaceBetween: rem(2),
            },
        },

        thumbs: {
            swiper: new Swiper ($(this).siblings('.slider-nav').find('.swiper')[0], {
                direction: 'horizontal',
                slidesPerView: 4,
                speed: 250,

                on: {
                    beforeInit: function (slider) {
                        if ($(window).width() <= 768) {
                            $(slider.$el).find('.swiper-slide:last-child').remove();
                        } else {
                            $(slider.$el).find('.swiper-slide:nth-last-child(-n+2)').remove();
                        }
                    },
                }
            }),
            multipleActiveThumbs: false,
        },

        on: {
            slideChange: function (slider) {
                let activeNum = $(slider.$el).siblings('.slider-nav').find('.swiper-slide-thumb-active').position().left;
                $(slider.$el).siblings('.slider-nav').find('.slider-nav__pagination').css('--left', activeNum + 'px');
            },
            slideNextTransitionStart: function (slider) {
                slider.thumbs.swiper.slideNext()
            },
            slidePrevTransitionStart: function (slider) {
                slider.thumbs.swiper.slidePrev()
            },
        },
    });
});

const product_info_slider = new Swiper('.product-info__content', {
    direction: 'horizontal',
    slidesPerView: 1,
    autoHeight: true,
    effect: "fade",
    fadeEffect: {
        crossFade: true
    },
    allowTouchMove: false,
});

$('.product-info__tab').click(function () {
    let width = $(this).outerWidth(),
        left = $(window).width() > 768 ? $(this).position().left + rem(1.68) : $(this).position().left + rem(0.84);

    product_info_slider.slideTo($(this).index());
    $('.product-info__tabs-box').css({
        '--width': width + 'px',
        '--left': left + 'px',
    });

    if ($(this).index() === ($('.product-info__tab').length - 1)) {
        $('.product-info__tab-bg').addClass('last');
    } else {
        $('.product-info__tab-bg').removeClass('last');
    }
});

const product_thumb_slider = new Swiper('.product__slider-thumb', {
    direction: 'vertical',
    slidesPerView: 4,
    spaceBetween: rem(2.5),

    navigation: {
        nextEl: '.product__thumb-arrow.next',
        prevEl: '.product__thumb-arrow.prev',
    },
});

const product_slider = new Swiper('.product__slider', {
    slidesPerView: 1,
    spaceBetween: rem(10),

    pagination: {
        el: '.product__slider-pagination',
        type: 'bullets',
    },

    thumbs: {
        swiper: product_thumb_slider,
        multipleActiveThumbs: false,
    },

    breakpoints: {
        0: {
            direction: 'horizontal',
        },
        769: {
            direction: 'vertical',
        },
    },
});

const product_type_slider = new Swiper('.product__type-slider', {
    direction: 'horizontal',
    slidesPerView: 4,
    spaceBetween: rem(2),

    navigation: {
        nextEl: '.product__type-arrow.next',
        prevEl: '.product__type-arrow.prev',
    },

    breakpoints: {
        0: {
            spaceBetween: rem(1.5),
        },
        769: {
            spaceBetween: rem(2),
        },
    },
});

$('.photo__slider').each(function () {
    new Swiper($(this)[0], {
        direction: 'horizontal',
        spaceBetween: rem(2),

        navigation: {
            nextEl: $(this).siblings('.slider-nav').find('.next')[0],
            prevEl: $(this).siblings('.slider-nav').find('.prev')[0],
        },

        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            769: {
                slidesPerView: 3,
            },
        },

        thumbs: {
            swiper: new Swiper ($(this).siblings('.slider-nav').find('.swiper')[0], {
                direction: 'horizontal',
                slidesPerView: 4,
                speed: 250,

                on: {
                    beforeInit: function (slider) {
                        if ($(window).width() > 768) {
                            (slider.$el).find('.swiper-slide:nth-last-child(-n+3)').remove();
                        }
                    },
                }
            }),
            multipleActiveThumbs: false,
        },

        on: {
            slideChange: function (slider) {
                let activeNum = $(slider.$el).siblings('.slider-nav').find('.swiper-slide-thumb-active').position().left;
                $(slider.$el).siblings('.slider-nav').find('.slider-nav__pagination').css('--left', activeNum + 'px');
            },
            slideNextTransitionStart: function (slider) {
                slider.thumbs.swiper.slideNext();
            },
            slidePrevTransitionStart: function (slider) {
                slider.thumbs.swiper.slidePrev();
            },
        },
    });
});