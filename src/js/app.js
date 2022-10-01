import * as flsFunction from "./function.js";
import WOW from "../../node_modules/wowjs/dist/wow.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
  new WOW.WOW({
    mobile: false,
  }).init();
  new Swiper('.experiense-swiper', {
    
    slidesPerView: 1,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });
  new Swiper('.company-swiper', {
    loop: true,
    slidesPerView: 6.5,
    spaceBetween: 30,
    grabCursor: true,
    breakpoints: {
      1440:{
        slidesPerView: 6.5,
      },
      920:{
        slidesPerView: 5,
      },
      540:{
        slidesPerView: 3,
      },
      480:{
        slidesPerView: 3,
      },
      340:{
        slidesPerView: 1,
      },
      200:{
        slidesPerView: 1,
      }
    },
  });
});
