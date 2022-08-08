(function() {
    console.log("Objects, Objects, Objects");
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    var person = {
        firstName: "Strawberry",
        lastName: "Lemon"
    };

    console.log(person.firstName);
    console.log(person.lastName);
    console.log(typeof person);


    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
//var nameFirst;
//var nameLast;
    //nameFirst = prompt("What is your first name?");
    //console.log(nameFirst);
    //nameLast = prompt("What is your last name?");
    //console.log(nameLast);

    //var user = {
        //nameFirst,
        //nameLast
    //};

    //alert("Welcome " + user.nameFirst + " " + user.nameLast + "!");
    //console.log(user);

    person.sayHello = function() {
        return 'Hello from ' + person.firstName + " " + person.lastName + "!";
    }

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

        //HEB OFFER TO THOSE WHO SPEND $200+
        //X > $200 = 12% OFF
        //CAMERON = $180
        //RYAN $250
        //GEORGE $320
        //AMOUNT BEFORE DISCOUNT, THE DISCOUNT, AMOUNT AFTER DISCOUNT
        //USE FOREACH
        //CONDITIONALS: IF AMOUNT IS > 200, APPLY DISCOUNT AND SHOW ELSE
        // IF AMOUNT IS < 200, DONT APPLY DISCOUNT
        //RETURN ALERT("No discount to be found")
        //DISPLAY CURRENT AND NEW TOTAL

    var shoppers = [
         {name: 'Cameron', amount: 180},
         {name: 'Ryan', amount: 250},
         {name: 'George', amount: 320}
     ];

    shoppers.forEach(function(shopper) {
        console.log("Hello " + shopper.name + "." + " Your total is: $" + shopper.amount)
        if(shopper.amount > 200) {
           var discount = shopper.amount * 0.12;
            console.log("Your discount is: $" + discount);
            var newTotal = shopper.amount - discount;
            console.log("Your new total is: $" + newTotal)
        } else if(shopper.amount < 200) {
            console.log("Discount cannot be applied!");
        }
        return shopper.amount;
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    var books = [
        {
            title: "twilight",
            author: {
                firstName: "stephenie",
                lastName: "meyer"
            }
        },
        {
            title: "berserk",
            author: {
                firstName: "kentaru",
                lastName: "miura"
            }
        },
        {
            title: "50 shades of grey",
            author: {
                firstName: "e.l.",
                lastName: "james"
            }
        },
        {
            title: "cat in the hat",
            author: {
                firstName: "dr.",
                lastName: "suess"
            }
        },
        {
            title: "the hunger games",
            author: {
                firstName: "suzanne",
                lastName: "collins"
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);

    console.log(books[4].title);
    console.log(books[4].author.firstName);
    console.log(books[4].author.lastName);


    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    books.forEach(function(book, index) {
        console.log('Book # ' + (index + 1));
        console.log('Title: ' + book.title);
        console.log('Author: ' + book.author.firstName + " " + book.author.lastName);
        console.log("---");
    });



    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    var libros = [];

    function createBook(title, author) {
        var libro = {
            title: title,
            author: author
        }
        libros.push(libro);
        return libro;
    };

    console.log(libros);
    console.log(createBook("first book", "first author"));
    console.log(libros);
    console.log(createBook("second book", "second author"));
    console.log(libros);
    console.log(createBook("third book", "third author"));
    console.log(libros);

})();