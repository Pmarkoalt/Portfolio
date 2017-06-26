debounce = require('./helpers').debounce;

//===============================
//      MISC FUNCTIONALITY
//===============================

document.addEventListener('DOMContentLoaded', function() {

    var about = document.getElementById('about');
    about.classList.add('visible');

    var scrollAnimate = debounce(function() {
        var about   = document.getElementById('about'),
            work    = document.getElementById('work'),
            contact = document.getElementById('contact');

        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

        var scroll   = window.pageYOffset + (h / 3),
            aboutTop = about.getBoundingClientRect().top,
            workTop  = work.getBoundingClientRect().top;

        // if(scroll > aboutTop)
        //     about.classList.add('show-text');
        //
        // if(scroll < aboutTop)
        //     about.classList.remove('show-text');
        //
        // if(window.pageYOffset > workTop)
        //     contact.classList.add('visible');
        //
        // if(window.pageYOffset < workTop)
        //     contact.classList.remove('visible');


    }, 5);

    window.addEventListener('scroll', scrollAnimate);

});
