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
    moreButton = $('.more-button');

moreButton.on('click', function(){
    var self = $(this),
        parent = self.parent(),
        body = parent.parent();
    // anitmate smooth scroll to next section     
    body.animate({scrollTop: '+=640'}, 750);

})


// end 
});