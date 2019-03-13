console.log("Hello World!");
// The computer has a choice of the following words.
var possibleWords = ['baseball', 'cricket', 'tennis'];

// const maxAttempts = 8;

var chosenLetters = [];
var incorrectLetters = [];
var remainingAttempts = 10;
var guessedWord = [];
var underScores = [];
var wins = 0;
var losses = 0;
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
    console.log(guessedWord);
    updateDisplay();


    document.getElementById('choice').textContent = chosenLetters.join(" ");
    document.getElementById('choice').innerHTML = guessedWord;

    console.log(chosenLetters);

    


    incorrectLetters = [];

}
remainingAttempts = 10;
document.getElementById('attempts').textContent = remainingAttempts;
document.getElementById('attempts').innerHTML = remainingAttempts;

    document.onkeyup = function(event) {
        
        
        chosenLetters = event.key;
        console.log(chosenLetters);

        if(randomWord.indexOf(chosenLetters) > -1)
        {
           for(var i = 0; i < randomWord.length; i++)
           {
               if(randomWord[i] === chosenLetters)
               {
                   guessedWord[i] = chosenLetters;
                   console.log(guessedWord);
               }
           }
           console.log("This is one of the letters!");
        }

            else {
                incorrectLetters.push(chosenLetters);
                remainingAttempts--;
                console.log(remainingAttempts + " This is not one of the letters!");
            }
    }



theGame();



function updateDisplay() {

    document.getElementById("numWins").textContent = wins; 
}


