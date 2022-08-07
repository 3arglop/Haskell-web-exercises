(function(){
    "use strict";
console.log("Ready for Arrays\?");

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    var names = ['kyle', 'estefania', 'tammy', 'rue'];
    console.log(names);

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */

    console.log(names[0]); // kyle
    console.log(names[1]); // estefania
    console.log(names[2]); // tammy
    console.log(names[3]); // rue


    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

    for(var i = 0; i < names.length; i++) {
        console.log("Hello " + names[i] + "! Welcome home.");
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

    names.forEach(function(names) {
        console.log("Welcome: " + names);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

    var first = [1, 2, 3, 4, 5];
    var second = [1, 2, 3, 4, 5];
    var last = [1, 2, 3, 4, 5];

   console.log(first[0]);
   console.log(second[1]);
   console.log(last[4]);


})();