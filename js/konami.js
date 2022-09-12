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



$(window).ready(function() {
    intro.dblclick(function(e) {
       $(this).addClass('hidden');
       alert('Know the Konami Code? Press the keys on your keyboard to achieve 30 lives!');
        console.log("intro clicked");

    });
});

//DECLARING MY VARIABLES
var keysPressed = [];

var konami = [38,38,40,40,37,39,37,39,66,65]; //NO 13 FOR ENTER

let keyCount= 0;

// var secretCode = konami.length;
// console.log(secretCode);
//
// let inputCode = input.length;
// console.log(inputCode);

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
        // console.log(e.keyCode);
        let user = e.keyCode;
        console.log(user);
        keysPressed.push(user);
        console.log(keysPressed);
        // let inputCode = input.push("keysPressed");
        // console.log(inputCode);



        switch (user) {
            case keysPressed[0] === konami[0]:
                console.log("yay");
                break;
            case keysPressed[1] === konami[1]:
                console.log("yay");
                break;
            case keysPressed[2] === konami[2]:
                 console.log("yay");
                 break;
            case keysPressed[3] === konami[3]:
                console.log("yay");
                break;
            case keysPressed[4] === konami[4]:
                console.log("yay");
                break;
            case keysPressed[5] === konami[5]:
                console.log("yay");
                break;
            case keysPressed[6] === konami[6]:
                console.log("yay");
                break;
            case keysPressed[7] === konami[7]:
                console.log("yay");
                break;
            case keysPressed[8] === konami[8]:
                console.log("yay");
                break;
            case keysPressed[9] === konami[9]:
                console.log("yay");
                break;
            case keysPressed[10] === konami[10]:
                alert("YAY! YOU DID IT!");
                console.log("yay");
                keyCount = 0;
                break;
        }





   // for(let i = 0; i < konami.keyCode; i++) {
   //     if(keysPressed[i] === konami[10]) {
   //         console.log("yay")
   //         i = 0;
   //     } else {
   //         console.log("nope");
   //     }
   // }

        // if(keysPressed[0] === secretCode[0]) {
        //     keyCount++;
        // } if(keyCount === konami.length) {
        //     alert("yay!");
        //     keyCount = 0;
        // } else {
        //     alert("try again");
        //     keyCount = 0;
        // }

        // var checkCode = function() {
        //     if(JSON.stringify(keysPressed) === JSON.stringify(konami)) {
        //         alert("yay");
        //     } else {
        //         alert("try again!");
        //         console.log("error");
        //     }
        //
        // }
        // checkCode();


        // if(input === konami[keyCount]) {
        //     keyCount++;
        //
        //     if (input === konami.length) {
        //         // success();
        //         // reset();
        //         alert("yay!");
        //     } else {
        //         alert("try again buckaroo");
        //         // reset();
        //     }
        // }


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