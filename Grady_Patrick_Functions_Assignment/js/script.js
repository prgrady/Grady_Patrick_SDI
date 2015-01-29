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


 Adding extra features was more for fun than getting extra points, but I could use them
 */

var running = true;
var playing = true;
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
    if (pGuess == cNum) {
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
do {
    //start the player at first guess
    numGuess = 1;
    //have computer select a random number from 1 to 1000
    var compNum = rand(1, function () {
        //This anonymous gets the second value based on the player's option for difficulty
        var dif = parseInt(prompt("Would you like easy(1), medium(2), or hard(3)"));
        while ((dif != 1) && (dif != 2) && (dif != 3)) {
            dif = parseInt(prompt("Please enter 1, 2 or 3"));
        }
        if (dif == 1) {
            maxNum = 100
            return maxNum;
        } else if (dif == 2) {
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


    do {

        //get the player's guess
        userGuess = getUserNumber(numGuess);
        //Add one to the players guess total
        numGuess += 1;


        running = isRunning(userGuess, compNum, name, numGuess, running);
        //Find out if the player wants to play again


    //Only continue running if the player guessed wrong
    } while (running)

    //Playing again?
    var wantToKeepPlaying = prompt("Would you like to play again? (yes /no)")
    while (wantToKeepPlaying.toLowerCase()!="yes" && wantToKeepPlaying.toLowerCase()!="no" ){
        wantToKeepPlaying = prompt("Please enter yes or no: ");
    }
    if (wantToKeepPlaying == "no"){
        // if it's no, then player wants to stop playing
        playing = false;
    } // otherwise the playing boolean stays true
    running = true;
}while (playing)

/*

sample input:
Patrick
1
50
75
83
90
95
97
yes
3
2500
1250
3250
2000
2500
2250
2375
2450
2475
2460
2465
2467
2469
2470
2473
2472
2471
no


sample output:
 Hello, Patrick!
 We are going to play a number guessing game!
 I will pick a number between 1 and 100
 Let's find out how many guesses it takes you to guess.
 My number is higher than 50
 My number is higher than 75
 My number is higher than 83
 My number is higher than 90
 My number is higher than 95
 Congratulations, Patrick.  My Number was: 97!!!
 You won in 7 guesses!
 Hello, Patrick!
 We are going to play a number guessing game!
 I will pick a number between 1 and 5000
 Let's find out how many guesses it takes you to guess.
 My number is lower than 2500
 My number is higher than 1250
 My number is lower than 3250
 My number is higher than 2000
 My number is lower than 2500
 My number is higher than 2250
 My number is higher than 2375
 My number is higher than 2450
 My number is lower than 2475
 My number is higher than 2460
 My number is higher than 2465
 My number is higher than 2467
 My number is higher than 2469
 My number is higher than 2470
 My number is lower than 2473
 My number is lower than 2472
 Congratulations, Patrick.  My Number was: 2471!!!
 You won in 18 guesses!

 */