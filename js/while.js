"use strict";


// var num = 1
// while (num < 65000) {
//     num *= 2
//     console.log(num);
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do {
    var customerOrder = Math.floor(Math.random() * 5) + 1
    if (customerOrder > allCones) {
        console.log('Cannot sell you ' + customerOrder + ' I only have ' + allCones + ',');
    } else {
        allCones = allCones - customerOrder;
        console.log(allCones + ' to sell.');
        console.log(customerOrder + ' cones sold.');
    }
} while (allCones > 0){
    console.log('There are no cones left, sorry!');

}