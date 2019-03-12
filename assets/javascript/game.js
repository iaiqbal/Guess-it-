console.log("Hello World!");
// The computer has a choice of the following words.
var possibleWords = ['red', 'blue', 'green'];

// const maxAttempts = 8;

var chosenLetters = [];
var remainingAttempts = 0;
var guessedWord = [];
var underScores = [];
var wins = 0;
var gameBegin = false;
var gameFinish = false;
var randomWord;


function theGame(){

// The computer randomly picks one of the words from the previous array.

randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
console.log(randomWord);
// for(var i = 0; i < randomWord.length; i++)
// {
//     console.log(i);
//     underScores.push('_');
// }

// This code will create the logic for the blanks _ _ _ _ _
chosenLetters = [];
guessedWord = [];

var chosenLetters = [];
    // for (var i = 0; i < possibleWords[randomWord].length; i++)
    for (var i = 0; i < randomWord.length; i++)
    {
        chosenLetters[i] = "_";
        guessedWord.push("_");
    }

    updateDisplay();

}
theGame();
console.log(chosenLetters);

function updateDisplay() {

    document.getElementById("numWins").textContent = wins; 





}


// word = answer.join(" ");

// console.log(answer);


// document.getElementById("choice").innerText = wins;
