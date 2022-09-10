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

var keysPressed = [];
var konami = [38,38,40,40,37,39,37,39,66,65]; //NO 13 FOR ENTER
let keyCount = 0;

// var success = function() {
//     if(input === 10) {
//         alert("YAY! YOU DID IT!");
//         console.log("full konami code entered");
//     }
// }
//
// var reset = function() {
//     console.log("start again");
//     keyCount;
// }


$(window).ready(function() {
    body.keyup(function(e) {
        console.log("keyup successful!");
        console.log(e.keyCode);
        var input = keysPressed.push(e.keyCode);
        console.log(input);

        if(input === konami[keyCount]) {
            keyCount++;

            if (input === konami.length) {
                // success();
                // reset();
                alert("yay!");
            } else {
                alert("try again buckaroo");
                // reset();
            }
        }



        // for(let i = 0; i < konami.length; i += 1)
        // if(input[i] === konami[i]) {
        //     console.log("yay!");
        //     input++;
        // } else {
        //     alert("try again!")
        //     reset;
        // }


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