$(function () {
  $('.discounts__slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: $('.discounts__slider-nav-left'),

    nextArrow: $('.discounts__slider-nav-right'),
  });

  $('.awesomeRating').awesomeRating({
    valueInitial: 'D',
    values: ['A', 'B', 'C', 'D', 'E'],
    targetSelector: 'span.awesomeRatingValue',
  });
});
