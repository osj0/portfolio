//메인 슬라이드
var swiper = new Swiper(".mainsl-bx", {
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//cont1 국내내
var swiper = new Swiper(".ktrl", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView:2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });

  //cont2 해외
var swiper = new Swiper(".ftrl", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView:2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    }
  });