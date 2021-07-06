"use strict";

// alerts

// alert("Hi, I am a JavaScript Alert!");

// confirm

// var userDecision = confirm("Wanna buy some deathsticks?");
// console.log(userDecision);
//
// if (userDecision === true){
//     alert("Smart!");
// } else {
//     alert("Oh boo...");
// }

// prompt

// var currentSpeedInMph = 65;
// var plannedSpeedInMph = prompt("How fast do you wanna go?");
// var distanceLeftInMiles = prompt("How many miles are ya from where you going?");
// var timeToDestinationAtCurrentSpeed = (distanceLeftInMiles/currentSpeedInMph) * 60;
// var timetoDestinationAtPlannedSPeed = (distanceLeftInMiles/plannedSpeedInMph) * 60;
// var timeGain = timeToDestinationAtCurrentSpeed - timetoDestinationAtPlannedSPeed;
// var minutesGained = Math.floor(timeGain);
// var seconds = Math.round((timeGain - minutesGained) * 60);
// console.log("if you drive at " + plannedSpeedInMph + " mph, you will arrive " + minutesGained + " minutes and " + seconds + " seconds earlier. Is it worth speeding?");

// Exercise 1 and 2 from html and javascript

// console.log("Hello from external Javascript.")
//
// alert("Welcome to my website!");
//
// var favoriteColor = prompt("What is your favorite color?");
//
// var mineToo = alert("Great, " + favoriteColor +  " is mine too!")
//


// var rentalPerDayDollars = 3;
// var littleMermaidDays = prompt("How many days will you be renting The Little Mermaid?");
// var brotherBearDays = prompt("How many days will you be renting Brother Bear?");
// var herculesDays = prompt("How many days will you be renting Hercules?");
// var totalRentalCost = (littleMermaidDays * 3) + (brotherBearDays * 3) + (herculesDays * 3);
// var totalRentalCost = alert("Your total will be $" +
//     (parseInt(littleMermaidDays)
//         + parseInt(brotherBearDays)
//         + parseInt(herculesDays))
//     * parseInt(rentalPerDayDollars));


var googleHourlyRateDollars = prompt("What is Google's hourly rate?");
var amazonHourlyRateDollars = prompt("What is Amazon's hourly rate?");
var facebookHourlyRateDollars = prompt("what is Facebook's hourly rate?");
var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");
var totalPayment = alert("Your total pay for this week is $") +
    (totalPayment = googleHours * googleHourlyRateDollars);
(totalPayment += amazonHours * amazonHourlyRateDollars);
(totalPayment += facebookHours * facebookHourlyRateDollars);


var classIsNotFull; // boolean
var classSchedulesCheck; // boolean
var studentEnrolled = classIsNotFull && classSchedulesCheck;


var numberOfItemsForDiscount;
var numberOfItems; // number
var offerIsNotExpired; // boolean
var isPremiumMember; // boolean
var productDiscountApplied = isPremiumMember || (numberOfItems >= numberOfItemsForDiscount && offerIsNotExpired);


