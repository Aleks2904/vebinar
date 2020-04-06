$(document).ready(function () {
    var mySwiper = new Swiper ('.b2-swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      slideToClickedSlide: true,
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

   /* $('.swiper-slide').on('click', function(){
      slideToClickedSlide: true;
    })*/

    var mySwiper2 = new Swiper ('.b3-swiper-container', {
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

    var menu = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    var mySwiper3 = new Swiper ('.b4-swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.wrap__pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        }
      },

      updateOnWindowResize: true,

      spaceBetween: 30,

      slidesPerView: 1,
    })

    var mySwiper4 = new Swiper ('.b4-swiper-container-slide', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },

      navigation: {
        nextEl: '.swiper-slid__next',
        prevEl: '.swiper-slid__prev',
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