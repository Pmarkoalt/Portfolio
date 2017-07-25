var debounce = require('./helpers').debounce;

var $ = require("jquery");

$(document).ready(function () {
  var splashHeight = $('#splash').height();
  var portHeight
  var scrollAnimate = debounce(function() {
  if (window.matchMedia("(min-width: 900px)").matches) {
    portHeight = $(document).height() - $("#portfolio").height() - $("#contactMe").height() - 50;
  } else if (window.matchMedia("(min-width: 550px)").matches) {
    portHeight = 3500;
  } else {
    portHeight = 4500;
  }
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

      $("#aboutLink").on('click', function(e) {
             // Prevent a page reload when a link is pressed
           e.preventDefault();
             // Call the scroll function
             goToByScroll($(this).attr("id"));
       });

       $("#languagesLink").on('click', function(e) {
              // Prevent a page reload when a link is pressed
            e.preventDefault();
              // Call the scroll function
              goToByScroll($(this).attr("id"));
        });

        $("#portfolioLink").on('click', function(e) {
               // Prevent a page reload when a link is pressed
             e.preventDefault();
               // Call the scroll function
               goToByScroll($(this).attr("id"));
         });

       $("#contactMeLink").on('click', function(e) {
              // Prevent a page reload when a link is pressed
              e.preventDefault();
         // Call the scroll function
         goToByScroll($(this).attr("id"));


        });
      });
