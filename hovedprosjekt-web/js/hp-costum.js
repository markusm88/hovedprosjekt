$(function () {

    //Variables
    var l = new Snap('#leftCable'),
        r = new Snap('#rightCable'),
        animateAlongPath,
        rightPowerballAnim,
        leftPowerballAnim,
        len;

    //Elements
    var powerball = l.circle(260, 234, 8),
        powerball2 = r.circle(260, 234, 8),
        $topSpark = $("#topSpark"),
        $botSpark = $("#botSpark");

    leftPowerballAnim = function () {
        animateAlongPath(l.select('#leftCablePath'), powerball, 0, 5000, rightPowerballAnim, 0);
    };

    rightPowerballAnim = function () {
        animateAlongPath(r.select('#rightCablePath'), powerball2, 1200, 9500, leftPowerballAnim, 1);
    };


    animateAlongPath = function (path, element, start, dur, callback, direction) {
        if (direction === 1) {
            len = 0;
        } else {
            len = Snap.path.getTotalLength(path);
        }

        Snap.animate(start, len, function (value) {
            // movePoint gets the path attributes at a certain frame
            var movePoint = Snap.path.getPointAtLength(path, value);

            // applies the attributes to our element
            element.attr({
                cx: movePoint.x,
                cy: movePoint.y,
                fill: '#3498db'
            });
        }, dur, mina.easein, function () {
            element.attr({
                fill: 'none'
            });
            $topSpark.fadeIn(80).delay(30).fadeOut(80, function () {
                $botSpark.fadeIn(80).delay(30).fadeOut(300, function () {
                    callback();
                });
            });

        });
    };

    setTimeout(leftPowerballAnim, 100);

    //Smooth scroll
    $('a[href*=#]:not([href=#])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') || location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
    
});