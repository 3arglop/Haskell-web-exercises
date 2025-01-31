"use strict";
console.log("Hello Conditions");

//EXAMPLE
//var username = prompt("Enter your username").toLowerCase();
//var password = prompt("Enter your password").toLowerCase();

//var usernameOne = "username"
//var passwordOne = "password"

//    if(username === usernameOne && password === passwordOne) {
//        alert("Welcome, you are logged in\!");
//    } else if(username !== usernameOne && password !== passwordOne) {
//        alert("Forgot Username/Password\?");
//    } else if(username !== usernameOne) {
//        alert("Invalid Username");
//    } else if(password !== passwordOne) {
//        alert("Invalid Password");
//    } else {
//            alert("ERROR");
//        }

//EXAMPLE 2
//var isRaining; //declare variable
//    isRaining = confirm("Is it raining\?"); //add value to variable
//    alert((isRaining)? "Bring an umbrella, friend\!": "What a sunny day\!");
//ANOTHER SYNTAX
    // isRaining ? console.log("Bring an umbrella, friend): console.log("What a sunny day");

//EXAMPLE 3
//var favMovie = prompt("What is your favorite movie?").toLowerCase();

//switch(favMovie) {
//    case "toy story":
//        alert("To infinity and beyond!");
//        break;
//    case "the lion king":
//        alert("I see....");
//        break;
//    case "the devil wears prada":
//        alert("That's my favorite movie too!");
//        break;
//    default:
//        alert("Gotcha!");
//        break;
//}

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor(colors) {
    if(colors === 'red') {
        return "Red for apples!";
    } else if(colors === 'orange') {
        return "Orange for papaya!";
    } else if(colors === 'yellow') {
        return "Yellow for bananas!";
    } else if(colors === 'green') {
        return "Green for spinach!";
    } else if(colors === 'blue') {
        return "Blue for blueberries!";
    } else if(colors === 'indigo') {
        return "Indigo like a plum!";
    } else if(colors === 'violet') {
        return "Violet like...";
    } else {
        return "I don't have a comparison for this color!";
    }
}

console.log(analyzeColor('red'));
console.log(analyzeColor('yellow'));
console.log(analyzeColor('violet'));
console.log(analyzeColor('pink'));

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
function pallet(colors) {
    switch (colors) {
        case "red":
            return "stop sign";
        case "blue":
            return "sea";
        case "orange":
            return "home depot";
        case "yellow":
            return "the sun";
        case "green":
            return "the forest";
        case "indigo":
            return "plums";
        case "violet":
            return "barney";
        default:
            return "nice color";
    }
}

    console.log(pallet("red"));
    console.log(pallet("orange"));
    console.log(pallet("pink"));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

var userColor = prompt("What is your favorite color?").toLowerCase();
alert(analyzeColor(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

function calculateTotal(lucky, total) {
    switch(lucky) {
        case 0: return total;
        case 1: return total - (total * 0.10)
        case 2: return total - (total * 0.25)
        case 3: return total - (total * 0.35)
        case 4: return total - (total * 0.50)
        case 5: return 'Free!!!'
    }
}

    console.log(calculateTotal(0, 100));
    console.log(calculateTotal(4, 60));
    console.log(calculateTotal(5, 250));

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);
var total = prompt("What is your total?");
alert("Your lucky number is: " + luckyNumber);
console.log(calculateTotal(luckyNumber, total));

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var input = confirm("Would you like to enter a number?");
    if(input === false) {
        alert("Okie Dokie");
    } else if(input === true) {
        var askingNum = prompt("Enter a number:");
    }

    if(askingNum % 2 == 0) {
        alert("Your number is EVEN!");
    } else if(askingNum % 2 !== 0) {
        alert("Your number is ODD!");
    }

    var newNum = (Number(askingNum) + 100);
    alert("Your number " + askingNum + " plus 100 = " + newNum);

    if(askingNum > 0) {
        alert("Your number is POSITIVE!");
    } else if(askingNum < 0) {
        alert("Your number is NEGATIVE!");
    }

//