$(window).on("load", function () {
  $("body").css("opacity", "1");
  $("header").load("components/header.html");
  $("footer").load("components/footer.html");

  /*-------------------------------Nav-Bar----------------------------------*/

  if (screen.width > 991) {
    setTimeout(() => {
      $(".dropdown-trigger")
        .mouseover(() => {
          $(".nav-dropdown").addClass("opened");
          $(".link-dropdown-icon").addClass("opened");
        })
        .mouseout(() => {
          $(".nav-dropdown").removeClass("opened");
          $(".link-dropdown-icon").removeClass("opened");
        });
    }, 300);
  } else {
    setTimeout(() => {
      $(".dropdown-trigger").on("click", () => {
        $(".nav-dropdown").toggleClass("opened");
        $(".link-dropdown-icon").toggleClass("opened");
      });
    }, 300);
  }
});

let offset;

if (screen.width > 768) {
  offset = 200;
} else {
  offset = 0;
}

new WOW({ offset: offset, scrollContainer: null }).init();

/*-------------------------------Banner----------------------------------*/
const swiperbanner = new Swiper(".gallery-banner", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
/*-------------------------------Opcions----------------------------------*/
const swiperopcions = new Swiper(".slider-opcions", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-nexta",
    prevEl: ".swiper-button-preva",
  },
  breakpoints: {
    "320": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "768": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "992": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
/*-------------------------------Brands----------------------------------*/
const swiperbrands = new Swiper(".slider-brands", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-nextb",
    prevEl: ".swiper-button-prevb",
  },
  breakpoints: {
    "320": {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    "576": {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    "1024": {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
});
