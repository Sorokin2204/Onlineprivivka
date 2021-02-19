$(function () {
  $('.discounts__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.discounts__slider-nav-left'),
    variableWidth: true,
    nextArrow: $('.discounts__slider-nav-right'),

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          // slidesToShow: 3.5,
        },
      },
    ],
  });

  function mobileServicesSlider() {
    $('.services__menu').slick({
      infinite: false,
      slidesToShow: 3,

      prevArrow: $('.services__slider-nav-left'),
      variableWidth: true,

      nextArrow: $('.services__slider-nav-right'),
    });
  }

  function mobileNewsSlider() {
    $('.news__menu').slick({
      arrows: false,
      infinite: false,
      slidesToShow: 1.5,
      variableWidth: true,
    });
  }

  function mobileFeebBackSlider() {
    $('.feedback__menu').slick({
      arrows: false,
      infinite: false,
      slidesToShow: 1,
      variableWidth: true,
    });
  }

  if (window.innerWidth <= 930) {
    mobileServicesSlider();
  }
  if (window.innerWidth <= 730) {
    mobileNewsSlider();
    mobileFeebBackSlider();
  }

  $(window).resize(function (e) {
    if (window.innerWidth <= 930) {
      if (!$('.services__menu').hasClass('slick-initialized')) {
        mobileServicesSlider();
      }
    } else {
      if ($('.services__menu').hasClass('slick-initialized')) {
        $('.services__menu').slick('unslick');
      }
    }
  });

  $(window).resize(function (e) {
    if (window.innerWidth <= 730) {
      if (!$('.news__menu').hasClass('slick-initialized')) {
        mobileNewsSlider();
      }
      if (!$('.feedback__menu').hasClass('slick-initialized')) {
        mobileFeebBackSlider();
      }
    } else {
      if ($('.news__menu').hasClass('slick-initialized')) {
        $('.news__menu').slick('unslick');
      }
      if ($('.feedback__menu').hasClass('slick-initialized')) {
        $('.feedback__menu').slick('unslick');
      }
    }
  });

  $('.awesomeRating').awesomeRating({
    valueInitial: 'D',
    values: ['A', 'B', 'C', 'D', 'E'],
    targetSelector: 'span.awesomeRatingValue',
  });

  $('.menu').on('click', function () {
    $('.menu-mobile').toggleClass('menu-mobile--active');
    $('.menu-over').toggleClass('menu-over--active');
  });

  $('.menu-mobile__close').on('click', function () {
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('.menu-over').removeClass('menu-over--active');
  });

  $('.menu-over').on('click', function () {
    $('.menu-mobile').removeClass('menu-mobile--active');
    $('.menu-over').removeClass('menu-over--active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  let wrapper = document.querySelector('.about__text');
  let options = {
    callback: function (isTruncated) {},
    /* Function invoked after truncating the text.
         Inside this function, "this" refers to the wrapper. */

    ellipsis: '... Читать полностью',
    /* The text to add as ellipsis. */
    /// >970
    ///height: 360,

    /// >730
    ///height: 260,
    height: 260,
    /* The (max-)height for the wrapper:
         null: measure the CSS (max-)height ones;
         a number: sets a specific height in pixels;
         "watch": re-measures the CSS (max-)height in the "watch". */

    keep: null,
    /* Query selector for elements to keep after the ellipsis. */

    tolerance: 0,
    /* Deviation for the measured wrapper height. */

    truncate: 'word',
    /* How to truncate the text: "node", "word" or "letter". */

    watch: true,
    /* Whether to update the ellipsis:
         true: Monitors the wrapper width and height;
         "window": Monitors the window width and height. */
  };

  new Dotdotdot(wrapper, options);
});
