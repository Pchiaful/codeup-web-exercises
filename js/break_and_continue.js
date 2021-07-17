"use strict";

while (true){
    var oddNumber = prompt("Please enter an odd number between 1 and 50.");
    if (oddNumber % 2 === 1){
        break;
    }
}

for (i = 1; i<51; i+=2){
    if (i === oddNumber){
        console.log("Yikes! Skipping number: " + oddNumber);
        continue;
    }
    console.log(i);
}