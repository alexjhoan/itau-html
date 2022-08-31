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
