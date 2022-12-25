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
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',  
})


      $('.card__number').styler();
      $('.card-info__view').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/arrow-prev.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/arrow-next.svg" alt=""></button>',
      })



