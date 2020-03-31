$(document).ready(function () {
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      updateOnWindowResize: true,

      spaceBetween: 30,

      slidesPerView: 1,

      breakpoints:{
        320:{
          slidesPerView: 1,
        },

        600:{
          slidesPerView: 2,
          spaceBetween: 60
        },

        950:{
          slidesPerView: 3,
          spaceBetween: 60
        },

        1500:{
          slidesPerView: 5,
          spaceBetween: 40
        }
      }

    })
});