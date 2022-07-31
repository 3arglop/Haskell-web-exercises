"use strict";

alert("Welcome to my Website\!");

var color = prompt("What is your favorite color\?");
console.log(color);

alert("Great, blue is my favorite color too\!");

//1.
var mermaid = prompt("How many days is The Little Mermaid being rented for\?");
console.log(mermaid);

var bear = prompt("How many days is Brother Bear being rented for\?");
console.log(bear);

var hercules = prompt("How many days is Hercules being rented for\?");
console.log(hercules);

var mT = mermaid * 3;
var bT = bear * 3;
var hT = hercules * 3;

alert("Your grand total is " + "$" + (mT + bT + hT) + ".");

//2.
var google = 400;
var amazon = 380;
var facebook = 350;

var gHours = prompt("How many hours did you work at Google\?");
var aHours = prompt("How many hours did you work at Amazon\?");
var fHours = prompt("How many hours did you work at Facebook\?");

var paycheck = (google * gHours) + (amazon * aHours) + (facebook * fHours);

alert("You will receive " + "$" + (paycheck) + " in your next paycheck\!");

//3.
var isFull = confirm("Is this class fully enrolled\?");
var isConflict = confirm("Will this class conflict with your schedule\?");
let enroll = (!isFull && !isConflict);
alert("Enrollment Status: " + enroll);

//4.
var member = confirm("Are you a Premium member\?"); // true for OK false for CANCEL
var limit = !member;
alert("Minimum purchase of 2 required for this offer: " + limit);
prompt("Quantity:");

var expiration = confirm("Has the offer expired\?"); // true for OK false for CANCEL
alert("This offer can be applied: " + !expiration);
alert("Thank you for your purchase\!");









