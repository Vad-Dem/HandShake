import * as flsFunction from "./function.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
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
  });
});
