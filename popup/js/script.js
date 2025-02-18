/* 인기별 */
var swiper = new Swiper(".hot-cont-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop:true,
    //autoplay: {
    //  delay: 2500,
    //  disableOnInteraction: false,
    //},
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
          480: {
              slidesPerView: 2, // 화면 너비 640px 이상일 때 2개
              spaceBetween: 20
          },
          768: {
              slidesPerView: 3, // 화면 너비 768px 이상일 때 3개
              spaceBetween: 30
          },
          1024: {
              slidesPerView: 5, // 화면 너비 1024px 이상일 때 4개
              spaceBetween: 40
          }
      }
  });

  /* 커밍쑨 */
  var swiper_com = new Swiper(".com-cont-Swiper", {
      slidesPerView: 1,
      grid: {
        rows: 2,
      },
      spaceBetween: 0,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
      640: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    });

  /* 릴스 */
  var short_swiper = new Swiper(".short-cont-Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
    },
  });

/**/

  var swiper_hot = new Swiper(".hot-Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
    480: {
      slidesPerView: 2,
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
  },
  });