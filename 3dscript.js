$(document).ready(function() {

var slideContainer = $ ('.slide-container');
slideContainer.slick({
  autoplay: false,
  slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.heading',

});
var slideHeading = $ ('.heading');
slideHeading.slick({
  autoplay: false,
  slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slide-container',

});

$('.clash-card__image img').hide();
$('.slick-active').find('.clash-card img').fadeIn(200);

// On before slide change
slideContainer.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
  $('.slick-active').find('.clash-card img').fadeOut(1000);
});

// On after slide change
slideContainer.on('afterChange', function(event, slick, currentSlide) {
  $('.slick-active').find('.clash-card img').fadeIn(200);
});
 
  
});