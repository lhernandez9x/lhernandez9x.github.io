$(document).ready(function(){
    "use strict";

function isMobile () {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
    return true;
  }
}

var body = $('body'),
    moreButton = $('.more-info'),
    openButton = $('.open-button'),
    closeButton = $('.close-button');

moreButton.on('click', function(){
    body.animate({scrollTop: window.innerHeight}, 750);
});

// Toggle class on click 
openButton.on('click', function () {
    var self = $(this),
        buttonParent = self.parent(),
        processContainer = buttonParent.parent();

    processContainer.animate({'max-height': '400px'}, 750);

    setTimeout(function(){
        self.css('visibility', 'hidden');
    },800);
});

closeButton.on('click', function () {
    var self = $(this),
        buttonParent = self.parent(),
        processContainer = buttonParent.parent();

    processContainer.animate({'max-height': '70px'}, 750);

    setTimeout(function(){
        $('.open-button').css('visibility', 'visible');
    },1500);
});


// end 
});