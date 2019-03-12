prompt("What's up?");

var wordBank = ["football", "baseball", "cricket", "tennis", "badminton", "gaming"];
var wins = 0;
var losses = 0;
var incorrectLetter = [];
var guessLeft = 9;
var underScores = [];
var amntGuess = [];
const randomWord;



function restartGame() {
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    
    console.log("Hello!");

}