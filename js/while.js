//EXERCISE 1

var i = 1;
while(i < 65536) {
    console.log(i *= 2);
}

//EXERCISE 2

//RANDOM NUM BETWEEN 50 AND 100 = CONES
//INSIDE LOOP, ANOTHER RANDOM NUM BETWEEN 1 AND 5 = CONES BOUGHT
//USE A WHILE LOOP
//CONSOLE AMOUNT OF CONES SOLD

//OUTPUT EXPECTED
//5 cones sold...  // if there are enough cones
//Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//Yay! I sold them all! // If there are no more cones

var allCones = Math.floor(Math.random() * 50) + 50;
do {
    var conesSold = Math.floor(Math.random() * 5) + 1;
    if (conesSold <= allCones) {
        console.log(conesSold + " cones sold...");
        allCones -= conesSold;
    } else if (conesSold > allCones) {
        console.log("Cannot sell you " + conesSold + ". I only have " + allCones + "...")
    }
} while(allCones !== 0);
console.log("Yay! I sold them all!");



