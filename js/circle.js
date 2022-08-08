(function() {
    console.log("I LOVE MATH!!!!!");
    "use strict";

    // Returns a random integer between min and max.
    //function getRandomInt(min, max) {
      //  return Math.floor(Math.random() * (max - min + 1) + min);
    //}
    //console.log(getRandomInt(10, 1000));

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function() {
            // TODO: complete this method
            var area = Math.PI * (Math.pow(circle.radius, 2));
            return area;
        },
        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if(doRounding === true) {
               var rounded = Math.round(circle.getArea());
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + rounded);
            } else {
                console.log("Area of a circle with radius: " + circle.radius + ", is: " + circle.getArea());
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5;
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();