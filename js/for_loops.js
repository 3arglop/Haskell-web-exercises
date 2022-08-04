"use strict";
console.log("Hello Loops!");

//EXAMPLE OF INCREMENTS
//var x = 0;
//console.log(x++)
//console.log(x++)
//console.log(x)

//WRITE A FOR LOOP THAT HAS A VARIABLE INIT TO 5
//CONSOLE LOG THE NUMBER AND EACH TIME THE INCREMENT BY 5 UNTIL YOU REACH 100
//
// var ten;
//for(ten = 10; ten <= 100; ten += 10) {
//    console.log(ten);
//    if(ten === 50) {
//        break;
//    }
//    console.log("This is not 50")
//}

//var five;
//for(five = 5; five <= 100; five += 5) {
//    console.log(five);
//    if(five === 50) {
//        continue;
//    }
//    console.log("This is not 50")
//}

//------------------------------------------------------------------------------

//EXERCISE 1

function showMultiplicationTable(number) {
    for(var i = 1; i <= 10; i++)
        console.log(number + " * " + (i) + " = " + (number * i));
    }

console.log(showMultiplicationTable(7));
console.log(showMultiplicationTable(11));
console.log(showMultiplicationTable(10));

//EXERCISE 2

console.log("Generate 10 random numbers");

for(var i = 0; i <= 10; i++) {
    var random = Math.floor((Math.random() * (200 - 2 + 1) + 2));
    if(random % 2 === 0) {
        console.log(random + " Even number");
    } else {
        console.log(random + " Odd number");
    }
}


function boolToString(flag){
    return `${flag}`;
}

console.log(boolToString("flag"));
