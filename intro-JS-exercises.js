// PRIMITIVE TYPES: EXERCISES

/*

(1) 99.9 NUMBER
(2) "false" STRING
(3) false BOOLEAN
(4) '0' STRING
(5) 0 NUMBER
(6) true BOOLEAN
(7) 'true' STRING

*/

/* WHAT DATA TYPE WOULD BEST REPRESENT?

(1) STRING
(2) BOOLEAN
(3) NUMBER
(4) BOOLEAN
(5) STRING
(6) NUMBER

*/

// OPERATORS EXERCISES

/* 

(1) '12'
(2) 'string2'
(3) '2'
(4) '3 + 4 is 7' by adding parenthesis to 3 + 4
(5) 'false'
(6) 'false'
(7) 'false'
(8) 'true'
(9) 'true'
(10) 'true'
(11) 'false'
(12) '1'
(13) 'false'
(14) 'true'
(15) 'false'
(16) 'true'
(17) 'true'
(18) 'true'

*/

// WORKING WITH DATA TYPES, ... EXERCISES

// EXERCISES #1

var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
a = 3
b = 1
c = 3

/*

(1) false
(2) false
(3) true
(4) true
(5) false
(6) false
(7) false
(8) false
(9) false
(10) true
(11) true
(12)
(13)
(14)

 */


// EXERCISES #2

var sample = "Hello Codeup";
sample.length();

var sample = "Hellp Codeup";
sample.toUpperCase();

var sample = "Hello Codeup";
sample.toLowerCase();

var sample = "Hello Codeup " + "Students";

var sample = 'Hello codeup Students';
sample.replace('Students', 'Class');

sample.indexOf(c);
	// Answer is -1 because lower case 'c' is not found

sample.indexOf(C);
	// Answer is 13

sample.substring(6, 12); 

sample.substring(sample.indexOf('c'), sample.indexOf('p') +1);

// EXERCISES #3 

//1.
var mermaid = 3;
var bear = 5;
var hercules = 1;
var price = 3;

var mT = mermaid * price;
var bT = bear * price;
var hT = hercules * price;

var total = mT + bT + hT;

//2.

var google = 400;
var amazon = 380;
var facebook = 350;

var gTotal = google * 6;
var aTotal = amazon * 4;
var fTotal = facebook * 10;

var paycheck = gTotal + fTotal + aTotal;

//3.

var isFull = false;
var isConflict = false;
let enroll = (!isFull && !isConflict);

//4. 

var product;
var offer = product > 2;
var premium = false;

// EXERCISES #4

var username = 'codeup';
var password = 'notastrongpassword';

var isPassLong = password.length(>= 5);

var isPassUnique = password.indexOf(username) == -1;

var username = username.length(<= 20);

var pWhitespace = password.indexOf(' ', 0), password.indexOf(' ', -1);

var uWhitespace = username.indexOf(' ', 0), username.indexOf(' ', -1);





