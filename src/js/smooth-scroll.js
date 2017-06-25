document.addEventListener('DOMContentLoaded', function() {

    // Feature Test
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        // Function to animate the scroll
        var smoothScroll = function (anchor, duration, easing) {

            // Function to control easing
            var easingPattern = function (type, time) {
                return time < 0.5 ? 4 * time * time * time : (time - 1) * (2 * time - 2) * (2 * time - 2) + 1;
            };

            // Calculate how far and how fast to scroll
            // http://www.quirksmode.org/blog/archives/2008/01/using_the_assig.html
            var startLocation = window.pageYOffset;
            var endLocation = function (anchor) {
                var distance = 0;
                if (anchor.offsetParent) {
                    do {
                        distance += anchor.offsetTop;
                        anchor = anchor.offsetParent;
                    } while (anchor);
                }
                return distance + 25;
            };
            var distance = endLocation(anchor) - startLocation;
            var increments = distance / (duration / 16);
            var timeLapsed = 0;
            var percentage, position, stopAnimation;

            // Scroll the page by an increment, and check if it's time to stop
            var animateScroll = function () {
                timeLapsed += 16;
                percentage = ( timeLapsed / duration );
                percentage = ( percentage > 1 ) ? 1 : percentage;
                position = startLocation + ( distance * easingPattern(easing, percentage) );
                window.scrollTo(0, position);
                stopAnimation();
            };

            // Stop the animation
            if ( increments >= 0 ) { // If scrolling down
                // Stop animation when you reach the anchor OR the bottom of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( (travelled >= (endLocation(anchor) - increments)) || ((window.innerHeight + travelled) >= document.body.scrollHeight) ) {
                        clearInterval(runAnimation);
                    }
                };
            } else { // If scrolling up
                // Stop animation when you reach the anchor OR the top of the page
                stopAnimation = function () {
                    var travelled = window.pageYOffset;
                    if ( travelled <= endLocation(anchor) || travelled <= 0 ) {
                        clearInterval(runAnimation);
                    }
                };
            }

            // Loop the animation function
            var runAnimation = setInterval(animateScroll, 16);

        };

        // For each smooth scroll link
        var scrollToggle = document.querySelectorAll('.smooth-scroll');
        [].forEach.call(scrollToggle, function(toggle) {

            // When the smooth scroll link is clicked
            toggle.addEventListener('click', function(e) {

                // Prevent the default link behavior
                e.preventDefault();

                // Get anchor link and calculate distance from the top
                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');
                var dataEasing = toggle.getAttribute('data-easing');

                // If the anchor exists
                if (dataTarget) {
                    // Scroll to the anchor
                    smoothScroll(dataTarget, dataSpeed || 500, dataEasing || 'easeInOutCubic');
                }

            }, false);

        });

    }

});
