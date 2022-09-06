// $(function() {
//     alert( 'Welcome to the world of jQuery!' );
// });

// var greetings = $('#header').html();
// alert(greetings);

// var facts = $('#title').html();
// alert(facts);

// $('.codeup').css('border', '1px solid red');

// $('li').css('font-size', '20px');
//
// $('li').css('background-color', 'green');
//
// $('#header').css('background-color', 'red');
//
// $('.para').css('background-color', 'blue');

// $('#header, .para, li').css('background-color', 'pink');

var header = $('#header');
header.click(function(e) {
    header.css('background', 'pink');
    console.log("header clicked!");
});

var para =  $('p');
para.dblclick(function(e) {
    para.css('font-size', '18px');
    console.log("p tags dbl clicked!");
    console.log(e);
});

var listItems = $('li');
listItems.hover(
    function(e) {
    listItems.css('background', 'purple');
        console.log("Inside");
    },
    function(e) {
    listItems.css('background', 'yellowgreen');
        console.log("Outside");
    });
