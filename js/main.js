function isMobile () {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
    return true
  }
}

// menu toggle

$('.menu-icon').click(function () {
  $('.menu-list').toggleClass('menu-open')
})

var processContainer = $('.process-container')

// Toggle class on clickt
if (isMobile()) {
  processContainer.click(function () {
    var titleContent = $(this).children('div .title-content'),
      bodyContent = $(this).children('div .body-content')

    titleContent.toggleClass('content-hidden')
    bodyContent.toggleClass('content-hidden')
  })
} else {
  // toggle class on mouse enter
  processContainer.mouseenter(function () {
    var titleContent = $(this).children('div .title-content'),
      bodyContent = $(this).children('div .body-content')

    titleContent.toggleClass('content-hidden')
    bodyContent.toggleClass('content-hidden')
  })

  // toggle class on mouse leave
  processContainer.mouseleave(function () {
    var titleContent = $(this).children('div .title-content'),
      bodyContent = $(this).children('div .body-content')

    titleContent.toggleClass('content-hidden')
    bodyContent.toggleClass('content-hidden')
  })
}
