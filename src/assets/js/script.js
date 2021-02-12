$(function () {
  $('.discounts__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.discounts__slider-nav-left'),

    nextArrow: $('.discounts__slider-nav-right'),
    variableWidth: false,
    // responsive: [
    //   {
    //     breakpoint: 1200,
    //     settings: {
    //       centerMode: false,
    //       slidesToShow: 3,
    //     },
    //   },
    // ],
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
