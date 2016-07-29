$(document).ready(function(){
    "use strict";

function isMobile () {
  if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.userAgent.match(/Opera Mini/i) || navigator.userAgent.match(/IEMobile/i)) {
    return true;
  }
}

var processContainer = $('.process-container');

// Toggle class on click 
    processContainer.on('click', function () {
        if ($(this).attr('style') === undefined || $(this).attr('style') == 'transform: rotateY(0deg);'){
            $(this).css('transform','rotateY(360deg)');
        } else {
            $(this).css('transform','rotateY(0deg)');
        }
        var titleContent = $(this).children('div .title-content'),
            bodyContent = $(this).children('div .body-content');
     
        //delay toggle class 
        setTimeout(function(){
            titleContent.toggleClass('content-hidden');
            bodyContent.toggleClass('content-hidden');
        },300);
  });

var body = $('body'),
    moreButton = $('.more-info');

moreButton.on('click', function(){
    body.animate({scrollTop: '610vh'}, 1000);
    return false;
})


// end 
});