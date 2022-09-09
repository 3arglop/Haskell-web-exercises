"use strict";

// $('document').keyup(function(event){
//     console.log(event.keyCode);
// });

// var body = $('.bodyElement');
// body.dblclick(function(e) {
//     body.css('text-align', 'center');
//     alert('Please Press the Following Code on Your Keyboard');
//     console.log("body clicked!");
// });

var intro = $('#intro');
console.log(intro);
var code = $('#code');
console.log(code.text());
var body = $('.bodyElement');
console.log(body.text());

var showCode = code.addClass('show');
console.log(showCode);

$(window).ready(function() {
    intro.dblclick(function(e) {
       $(this).addClass('hidden');
       alert('Know the Konami Code? Press the keys on your keyboard to achieve 30 lives!');
        console.log("intro clicked");
        showCode.toggleClass('show');
    });
});





// $(document).keyup(function(e) {
//     console.log(e.keyCode);
//
//     var reset = function(e) {
//         var start = false;
//         return alert("Try Again Buckaroo!");
//     }
//     //keyCode MAPS OUT WHAT KEY THE USER IS PRESSING BASED ON THEIR NUMERIC VALUE. IF WE LOOK AT THE VAR konami, THE NUMBERS REPRESENT WHAT KEYS I WANT THE USER TO INPUT. THE CODE BELOW TAKES IN MY EMPTY ARRAY AND WILL PUSH WHAT KEYS THE USER PRESSES BASED ON THEIR NUMERIC VALUE.
//
//    keys.push(e.keyCode);
//
//     if(!start) {
//         if(keys === 38) {
//             return alert("yay!")
//         } else {
//             return reset;
//         }
//     }
//
//     //     && keys[0] === konami[0]) {
//     //     konami++;
//     // } else {
//     //     reset();
//     // }
//
//
// });