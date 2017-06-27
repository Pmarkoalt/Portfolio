debounce = require('./helpers').debounce;

var $ = require("jquery");

$(document).ready(function () {
  var splashHeight = $('#splash').height();
  var portHeight = $(document).height() - $("#portfolio").height() - $("#contactMe").height() - 50;
    var scrollAnimate = debounce(function() {
      splashHeight = $('#splash').height();

      if ($(window).scrollTop() > splashHeight - $("#sticky-nav").height()) {
          $('#sticky-nav').addClass('sticky-navigation-fixed');
          $('#sticky-nav').removeClass('sticky-navigation');
      } else {
          $('#sticky-nav').removeClass('sticky-navigation-fixed');
          $('#sticky-nav').addClass('sticky-navigation');
      };

      if ($(window).scrollTop() > portHeight) {
          $('#contactMe').addClass('show-contact');
          $('#contactMe').removeClass('hide-contact');
      } else {
          $('#contactMe').removeClass('show-contact');
          $('#contactMe').addClass('hide-contact');
      };


    }, 5);

    $(window).scroll(scrollAnimate);

    function goToByScroll(id){
      // Reove "link" from the ID
    id = id.replace("Link", "");
      // Scroll
    $('html,body').animate({
        scrollTop: $("#"+id).offset().top},
        'slow');
      }

      $(".splash__menu__item > a").on('click', function(e) {
             // Prevent a page reload when a link is pressed
           e.preventDefault();
             // Call the scroll function
             goToByScroll($(this).attr("id"));
       });

       $("#contactMeLink").on('click', function(e) {
         $('html,body').animate({
             scrollTop: $(document).height()},
             'slow');

        });
      });
