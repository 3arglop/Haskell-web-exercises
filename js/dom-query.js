alert("Hello World!");

//JS COMMANDS FOR INLINE BUTTONS
let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function (event) {
    btn1.innerHTML = "JavaScript is COOL!";
    console.log(btn1.innerHTML);
});

let btn2 = document.getElementById("btn2");

btn2.addEventListener("click", function (event) {
    btn2.style.color = "blue";
    console.log(btn2.innerHTML);
});

let btn3 = document.getElementById("btn3");

btn3.addEventListener("click", function (event) {
    btn3.innerHTML = "Mission Accomplished!";
    console.log(btn3.innerHTML);
});

let btn4 = document.getElementById("btn4");

btn4.addEventListener("click", function (event) {
    btn4.style.color = "blue";
    console.log(btn4.innerHTML);
});

let btn5 = document.getElementById("btn5");

btn5.addEventListener("click", function(e) {
    btn5.style.color = "red";
});

let btn6 = document.getElementById("btn6");

btn6.addEventListener("click", function(e) {
    btn6.style.color = "green";
});

let btn7 = document.getElementById("btn7");

btn7.addEventListener("click", function(e) {
    btn7.style.color = "orange";
});

let btn8 = document.getElementById("btn8");

btn8.addEventListener("click", function (e) {
   btn8.style.color = "purple";
});


//JS COMMANDS FOR SEPARATE BUTTONS
let click1 = document.getElementById("click1");

click1.addEventListener("click", function (e) {
    document.getElementById("main-header2").innerHTML = "ADIOS WORLD!";
});

let click2 = document.getElementById("click2");

click2.addEventListener("click", function (e) {
    document.getElementById("sub-header2").style.color = "blue";
});

let click3 = document.getElementById("click3");

click3.addEventListener("click", function (e) {
    document.getElementsByClassName("sub-paragraph2")[0].innerHTML = "3.1415926535 8979323846 2643383279 5028841971 6939937510 5820974944 5923078164 0628620899 8628034825 3421170679 ...";
});

let click4 = document.getElementById("click4");

click4.addEventListener("click", function (e) {
    document.getElementById("list1").style.color = "red";
});

//MORE BUTTONS TO MESS WITH COS WHY NOT?...

let bodyColor = document.getElementById("bodyColor");

bodyColor.addEventListener("click", function (e) {
    // document.getElementsByTagName('body')[0].style['background-color'] = "pink";
    document.getElementsByTagName('body')[0].style.backgroundColor = "pink";
});