'use strict';

$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 2000;
    var pause = 4000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});
function myFunction(x) {
    x.classList.toggle("change");
}
// function init(){
//     $("#hide").click(function(){
//     $("#content").hide();
// });
//     $("#show").click(function(){
//     $("#content").show();
// });



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}






// window.onload = init;

// function init(){
//   $("#hide").click(function(){
//   $("#content").hide();
// });
//   $("#show").click(function(){
//     $("#content").show();
// });