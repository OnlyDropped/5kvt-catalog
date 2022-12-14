$('.banner-slider').slick({
  arrows: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  useTransform: true,
  cssEase: 'ease-in-out',
  adaptiveHeight: true,
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',

})

$('.products-content').slick({
  arrows: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  // cssEase: 'ease-in-out',
  // prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  // nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',  
})