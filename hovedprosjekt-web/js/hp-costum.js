$(function () {
    /**
      path is the path we wish with to animate along
      element is the element we want to animate
      start is the frame we wish to start the animation on
      dur is the duration in milliseconds
      callback is a function we wish to call once the animation has finished
    **/

    //Variables
    var l = new Snap('#leftCable'),
        r = new Snap('#rightCable'),
        /*spark = new Snap('#sparks'),*/
        animateAlongPath,
        rightPowerballAnim,
        leftPowerballAnim,
        sparkAnim;
    
    //Elements
    var powerball = l.circle(260, 234, 8),
        powerball2 = r.circle(260, 234, 8),
        $topSpark = $("#topSpark"),
        $botSpark = $("#botSpark");
    

    
    
    
    leftPowerballAnim = function () {
        animateAlongPath(l.select('#leftCablePath'), powerball, 0, 5000, rightPowerballAnim, 0);
        console.log(l.select('#leftCablePath'));
    };
    
    rightPowerballAnim = function () {
        animateAlongPath(r.select('#rightCablePath'), powerball2, 1200, 9500, leftPowerballAnim, 1);
    };
    
    

    
    
    animateAlongPath = function (path, element, start, dur, callback, direction) {
        if(direction === 1){
            var len = 0;
        }else{
            var len = Snap.path.getTotalLength(path);
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
            element.attr({fill: 'none'});
            $topSpark.fadeIn(80).delay(30).fadeOut(80, function(){
                $botSpark.fadeIn(80).delay(30).fadeOut(300, function(){
                    callback();
                });
            });
            
            /*callback();*/
            
            /*$topSpark.delay(300).show();*/
        });
    };
    
    /*setTimeout(animateAlongPath(myPath, cannon, 0, 500), 50);*/
    
  
    
    /*setTimeout(rightPowerballAnim, 100);*/
    setTimeout(leftPowerballAnim, 100);
});