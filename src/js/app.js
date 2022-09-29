import * as flsFunction from "./function.js";
document.addEventListener("DOMContentLoaded", function () {
  flsFunction.isWebp();
  new Swiper('.experiense-swiper', {
  
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
});
