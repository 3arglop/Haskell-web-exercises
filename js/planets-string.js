console.log("Planets and Strings\!");

(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planetsString);
    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

      var newString;
     //console.log(planetsString.split("|").join("<br>"));
    //console.log(planetsString = planetsArray.join("<br>"));
     console.log(planetsString.replaceAll("|", "<br>"));

     //BONUS
     //planetsArray.push("<ul");
     //planetsArray.unshift("</ul>");
     //var planetsList = planetsArray.join("<li>");
     //console.log(planetsList);

    var newArr = [];
    planetsArray.forEach(function (planet){
        newArr.push(`<li>${planet}</li>`)
    })
    newArr.push("</ul>");
    newArr.unshift("<ul>")
    newArr = newArr.join(" ");
    console.log(newArr)


})();