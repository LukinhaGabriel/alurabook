const swiper = new Swiper(".swiper", {
  speed: 400,
  slidesPerView: 2.4,
  spaceBetween: 20,
  centeredSlides: true,
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: 'bullets',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

