/**
Patrick Grady
 1/28/2015

 Assignment: Functions

 a. At  least  2  functions.. 1 Normal  and 1  Anonymous
 b. Each  function must  use  arguments  and  parameters
 c. 1  function  must  contain  3  parameters
 d. A  value  must  be  returned  for  each  function
 e. You  must  not  use “main  code” variable  inside  of  a  function,  you  must  pass  them
 in  as arguments.
 f. All  user  prompts  must  be  validated  using  a  while loop

 */

var running = true;
var numGuess = 1;
var maxNum = 100;

function nameIsOk(name){
    return name != "";
}

function rand(min, max){
    return Math.floor(Math.random()*(max - min +1) +1);
}

function getUserNumber(n){
    if (n == 1){
        //Have player guess first number
        var pGuess = prompt("Please enter your first guess: ");
        while (isNaN(pGuess)){
            pGuess = prompt("Please enter a number: ");
        }
    }else {
        //Have player guess another number
        pGuess = prompt("Please enter guess number " + n + " ");
        while (isNaN(pGuess)) {
            pGuess = prompt("Please eneter a number: ");
        }
    }
    return parseInt(pGuess);
}

function isRunning(pGuess, cNum, playerName, nGuess, running) {
    //find out if player guessed correctly
    if (pGuess == cNum || pGuess == 0) {
        //Got it right print a congrulatory message
        console.log("Congratulations, " + playerName + ".  My Number was: " + cNum + "!!!");
        console.log("You won in " + nGuess + " guesses!");
        running = false;
    }
    // otherwise guess was wrong
    //increase number of player's guesses
    else {
        // is the computer's number higher
        var higher = pGuess < cNum
        if (higher){
            console.log("My number is higher than " + pGuess);
        }
        // otherwise it's lower
        else {
            console.log("My number is lower than " + pGuess);
        }
        //Player should keep guessing
    }
    return running;
};

//Prompt for player's name
var name = prompt("Please enter your name: ");
//Make sure a name is there
while (!nameIsOk(name)){
    name = prompt("Nothing was entered, please enter your name: ")
}
//There was a name so contunue

//have computer select a random number from 1 to 1000
var compNum = rand(1, function(){
    //This anonymous gets the second value based on the player's option for difficulty
    var dif = parseInt(prompt("Would you like easy(1), medium(2), or hard(3)"));
    while((dif != 1) && (dif != 2) && (dif != 3)){
        dif = parseInt(prompt("Please enter 1, 2 or 3"));
    }
    if (dif == 1){
        maxNum = 100
        return maxNum;
    } else if (dif == 2){
        maxNum = 1000;
        return maxNum;
    } else {
        maxNum = 5000;
        return maxNum;
    }

}());

console.log("Hello, " + name + "!");
console.log("We are going to play a number guessing game!");
console.log("I will pick a number between 1 and " + maxNum);
console.log("Let's find out how many guesses it takes you to guess.")


do{

    //get the player's guess
    userGuess = getUserNumber(numGuess);
    //Add one to the players guess total
    numGuess += 1;


    running = isRunning(userGuess, compNum, name, numGuess, running);
//Only continue running if the player guessed wrong
}while(running)