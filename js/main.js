$(document).ready(function(){
    "use strict";

function isMobile () {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
    return true;
  }
}

//vars for smooth scrolling
var dedicationSection = $('.dedication'),
    passionSection = $('.passion'),
    projectSection = $('.projects'),
    contactSection = $('.contact'),
    moreButton = $('.more-button'),
    top = 0;

moreButton.on('click', function(){
    var self = $(this),
        parent = self.parent(),
        trueTop = top += window.innerHeight,
        body = parent.parent();
    // anitmate smooth scroll to next section     
    body.animate({scrollTop: trueTop}, 750);

})


// end 
});