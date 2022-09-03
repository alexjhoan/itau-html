$(window).on('load', function () {
  $('header').load('components/header.html')
  $('#contact').load('components/contact.html')
  $('footer').load('components/footer.html')
  $('body').css('opacity', '1')

  /*-------------------------------Nav-Bar----------------------------------*/

  setTimeout(() => {
    let url = window.location.href.split('/').pop()
    if (url.includes('#')) {
      url = url.split('#')[0]
    }
    $(`.nav-link[href="/${url}"]`).addClass('active')
    if (screen.width > 991) {
      $('.dropdown-trigger')
        .mouseover(() => {
          $('.nav-dropdown').addClass('opened')
          $('.link-dropdown-icon').addClass('opened')
        })
        .mouseout(() => {
          $('.nav-dropdown').removeClass('opened')
          $('.link-dropdown-icon').removeClass('opened')
        })
    } else {
      $('.dropdown-trigger').on('click', () => {
        $('.nav-dropdown').toggleClass('opened')
        $('.link-dropdown-icon').toggleClass('opened')
      })
    }
  }, 100)
})

let offset

if (screen.width > 768) {
  offset = 200
} else {
  offset = 0
}

new WOW({ offset: offset, scrollContainer: null }).init()

/*-------------------------------Banner----------------------------------*/
const swiperbanner = new Swiper('.gallery-banner', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})
/*-------------------------------Opcions----------------------------------*/
const swiperopcions = new Swiper('.slider-opcions', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-nexta',
    prevEl: '.swiper-button-preva'
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})
/*-------------------------------Brands----------------------------------*/
const swiperbrands = new Swiper('.slider-brands', {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-nextb',
    prevEl: '.swiper-button-prevb'
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 40
    }
  }
})

// ------------------------------form-search--------------------------------

const formSearch = (event) => {
  event.preventDefault()
  const dataForm = new FormData(event.target)
  const formObjet = {}
  for (const [name, value] of dataForm) {
    formObjet[name] = value
  }
  console.log(formObjet)
}
