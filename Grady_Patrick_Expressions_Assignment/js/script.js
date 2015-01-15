/*
    Patrick Grady
    1/12/2015
    Assignment: Expressions
    Income Calculator
 */


var start = prompt("What time did you start working today?");  // Get start time
start = parseInt(start) // make sure it's a number
var end = prompt("What time did you stop working today?");  // Get end time
end = parseInt(end)  // make sure it's a number
var hrly = prompt("How much do you make per hour");  //Get hourly rate
hrly = parseInt(hrly) // make sure it's a number

var tothrs = (end - start) / 100 - 0.5;  //Get total hours worked by subtracting end from start and half hour break
var pay = tothrs * hrly;  //Pay is total hours worked times pay rate

console.log("Total net pay for today is : $" + pay);