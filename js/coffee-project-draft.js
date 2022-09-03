"use strict"


//USING FUNC renderCoffee WITH PARAMETER coffee (SINGULAR) TO CREATE A NEW var WITH A NEW INNER HTML BY USING card FROM BOOTSTRAP INSIDE THE div FROM THE HTML
function renderCoffee(coffee) {
    var html = `<div class="col-lg-6 m-0 p-0">
    <div class="card d-flex justify-content-center align-items-center lh-1" style="font-family: 'Glegoo', serif; border-color: white;">
    <h4 class="text-capitalized fs-3" style="color: #4D2B1E">${coffee.name}</h4>
    <p class="text-center mt-2 fs-5" style="color: #AB6832; font-family: 'Literata', serif;">${coffee.roast}</p>
    </div></div>`;

    return html;
}

//CREATES A NEW FUNC renderCoffees WITH PARAMETER coffees (A VAR WITH COMPLETE SELECTION) THAT TAKES IN AN EMPTY STRING var html TO CREATE A LOOP WITH THE COMPLETE SELECTION, DECREMENTING BY EACH CHARACTER AND RETURNING IT WITHIN THE NEW INNER HTML FROM var html; AS IF IT'S READY TO SORT?????
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

//CREATES A NEW FUNC updatedCoffees WITH AN e(vent) PARAMETER THAT USES .preventDefault(); THAT WILL AVOID REFRESHING THE PAGE WHEN UPDATING THE SELECTION????

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

//CREATES A NEW VAR selectedRoast EQUALS TO THE VAR roastSelection THAT TAKES IN THE ID roast-selection FROM THE HTML AND ITS VALUES (L,M,D) SO WHEN selectedRoast COMES INTO PLAY, IT KNOWS WHERE IN THE HTML IT NEEDS TO TARGET AKA DROPDOWN
    var selectedRoast = roastSelection.value;


//CREATES A NEW VAR filteredCoffees WITH AN EMPTY ARRAY
    var filteredCoffees = [];

//TAKES IN VAR coffees (COMPLETE SELECTION) AND CREATES A FUNC TO TARGET EVERY ID WITHIN THE coffees ARRAY THAT if A SINGULAR coffee ARGUMENT HAS THE SAME ROAST, SHOWCASE IT TO THE USER BY USING THE EMPTY ARRAY filteredCoffees AND CREATING A NEW ARRAY WITH ONLY THE NAMES WITH THE SAME ROAST INSIDE THE NEW INNER HTML FROM VAR renderCoffees; REPLACING THE tbody WITH renderCoffees?????
    coffees.forEach(function(coffee) {
        if (coffee.roast === 'all') {
            filteredCoffees.push(coffee);
        } else if(coffee.roast === selectedRoast) {
            filteredCoffees.push(coffee)
        }
    });
    showProd.innerHTML = renderCoffees(filteredCoffees);
}

function searchCoffees(e) {
    e.preventDefault();
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    var input = fullMenu.value.toLowerCase();
    coffees.forEach(function (coffee) {
        if(selectedRoast === 'all' && coffee.name.toLowerCase().includes(input)) {
            filteredCoffees.push(coffee);
        } else if(coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(input)) {
            filteredCoffees.push(coffee);
        }
    });
    showProd.innerHTML = renderCoffees(filteredCoffees);
}




// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

//VAR WITH THE COMPLETE SELECTION OF COFFEES
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


//USING .querySelector() INSTEAD OF .getElement TO BRING IN ELEMENTS FROM THE HTML TO CREATE FUNCTIONALITY
var showProd = document.querySelector('#showProd');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var fullMenu = document.querySelector('#search');


//REPLACING BODY???
showProd.innerHTML = renderCoffees(coffees);


//BUTTON FUNCTIONALITY
submitButton.addEventListener('click', updateCoffees);
roastSelection.addEventListener('click', updateCoffees);
fullMenu.addEventListener('keyup', searchCoffees);