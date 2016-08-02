$(document).ready(function(){
    "use strict";

function isMobile () {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
    return true;
  }
}

//vars for smooth scrolling
var moreButton = $('.more-button');

moreButton.on('click', function() {
    var self = $(this),
        nextSection = self[0].firstChild.data,
        top = window.innerHeight,
        body = $('body');

    // anitmate smooth scroll to next section
    if(nextSection == 'Dedication') {
        body.animate({scrollTop: top}, 750);
    } else if(nextSection == 'Passion') {
        body.animate({scrollTop: top * 2}, 750);
    } else if(nextSection == 'Projects') {
        body.animate({scrollTop: top * 3}, 750);
    }
});


// end 
});