$(document).ready(function () {
    var mySwiper = new Swiper ('.b2-swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.b2-swiper-button-next',
        prevEl: '.b2-swiper-button-prev',
      },

      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
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
          spaceBetween: 20
        }
      }

    })

    var mySwiper = new Swiper ('.b3-swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.b3-swiper-button-next',
        prevEl: '.b3-swiper-button-prev',
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
          slidesPerColumn: 2,
          spaceBetween: 60
        },

        1500:{
          slidesPerView: 4,
          slidesPerColumn: 2,
          spaceBetween: 30
        }
      }

    })
});