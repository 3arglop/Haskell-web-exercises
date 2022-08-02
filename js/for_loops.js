"use strict";
console.log("Hello Loops!");

//EXAMPLE OF INCREMENTS
var x = 0;
console.log(x++)
console.log(x++)
console.log(x)

//WRITE A FOR LOOP THAT HAS A VARIABLE INIT TO 5
//CONSOLE LOG THE NUMBER AND EACH TIME THE INCREMENT BY 5 UNTIL YOU REACH 100

var five;
for(five = 5; five <= 100; five += 5) {
    console.log(five);
}
console.log("out of loop!");