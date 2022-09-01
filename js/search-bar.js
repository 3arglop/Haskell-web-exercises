//MY OWN VERSION OF JAVASCRIPT!
let filterProd = [];

var coffees = [
    {id: 1, name: 'light city', roast: 'light'},
    {id: 2, name: 'half city', roast: 'light'},
    {id: 3, name: 'cinnamon', roast: 'light'},
    {id: 4, name: 'city', roast: 'medium'},
    {id: 5, name: 'american', roast: 'medium'},
    {id: 6, name: 'breakfast', roast: 'medium'},
    {id: 7, name: 'high', roast: 'dark'},
    {id: 8, name: 'continental', roast: 'dark'},
    {id: 9, name: 'new orleans', roast: 'dark'},
    {id: 10, name: 'european', roast: 'dark'},
    {id: 11, name: 'espresso', roast: 'dark'},
    {id: 12, name: 'viennese', roast: 'dark'},
    {id: 13, name: 'italian', roast: 'dark'},
    {id: 14, name: 'french', roast: 'dark'},
];

showProducts(coffees);


function showProducts(input) {

    document.getElementById("card").innerText = "";


    for(var i = 0; i < input.length; i++) {
        document.getElementById("card").innerHTML +=
            `
        <div class="col-lg-6 d-flex justify-content-center mt-3">
        <div class="card w-100">
        
                <h4 class="text-center text-capitalize">${input[i].name}</h4>
                
              
                <p class="text-center fs-5">${input[i].roast}</p>
           
        </div>
        </div> 
        `

    }
}


//SEARCHBAR

document.getElementById("myInput").addEventListener("keyup", function() {
    let text = document.getElementById("myInput").value.toLowerCase();



    filterProd = coffees.filter(function(a) {
        if(a.name.includes(text)) {
            return a.name;
        } else if(a.roast.includes(text)) {
            return a.roast;
        }
    });

    if(this.value === "") {
        showProducts(coffees);
    } else {
        if(filterProd == "") {
            document.getElementById("para").style.display = 'block';
            document.getElementById("card").innerHTML = "";
        } else {
            showProducts(filterProd);
            document.getElementById("para").style.display = 'none'
        }
    }
});

