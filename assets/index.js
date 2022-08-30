$(window).on("load", function () {
  $("body").css("opacity", "1");
});

let offset;

if (screen.width > 768) {
  offset = 200;
} else {
  offset = 0;
}

new WOW({ offset: offset, scrollContainer: null }).init();

$("header").load("components/header.html");
$("footer").load("components/footer.html");

/*-------------------------------Nav-Bar----------------------------------*/

const navDropdownShow = () => {
  $(".nav-dropdown").addClass("opened");
  $(".link-dropdown").addClass("opened");
};

const navDropdownHide = () => {
  $(".nav-dropdown").removeClass("opened");
  $(".link-dropdown").removeClass("opened");
};

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
