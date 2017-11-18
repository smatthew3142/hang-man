//variables
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var words = ["ELEPHANT", "ORANGUTAN", "SNOW LEOPARD", "SEA LION","RATTLESNAKE", "MEERKAT", "GIRAFFE", "WILDEBEEST","ANTEATER", "GRIZZLY BEAR","CAPUCHIN MONKEY","FENNEC FOX", "HIPPOPOTAMUS","IGUANA","KANGAROO","JAGUAR","OKAPI","PANDA","TAPIR","VULTURE","ZEBRA"];
var lives = 10;
var winCount = 0;
var lossCount = 0;
var message = {
	win: "YOU WIN!",
	lose: "OH NO! GAME OVER!",
	repeatGuess: "Already guessed that letter. Try again.",
	needLetter: "Guess a letter!",
}

var wordRandom;
var newWord;
var blankWord = [];
var guess = 0;
var isLetter = false;
var alreadyGuess = false;
var lettersGuess = [];
var correctLetter = false;
var newWinner = true;



//start a new game
function newGame() {
    wordRandom = Math.floor((Math.random() * words.length));
    newWord = words[wordRandom];
    console.log(newWord);


    if (blankWord.length !== newWord.length) {
        blankWord = [];
    }


//blanks for letters

for (var i = 0; i < newWord.length; i++) {
        if (newWord[i] === " ") {
            blankWord[i] = "  ";
        } else {
            blankWord[i] = (" _ ");
        }
    }

    $('#blankWord').html(blankWord);
}


//typed answer

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
    var enter = (event.keyCode);


//restart game or start game with enter key

  if (enter == 13) {
        newGame();
    }

//check for letter

    for (var i = 0; i < alphabet.length; i++) {
        if (userGuess === alphabet.charAt(i)) {
            isLetter = true;
        }
    }

    if (isLetter == false && enter != 13) {
        $('#message').html(message.needLetter);
    }

    

//letter already guessed

for (var i = 0; i < lettersGuess.length; i++) {
        if (userGuess === lettersGuess[i]) {
            alreadyGuess = true;
        }
    }

for (var i = 0; i < blankWord.length; i++) {
        if (userGuess == blankWord[i]) {
            alreadyGuess = true;
        }
    }

    if (alreadyGuess == true) {
        $('#message').html(message.repeatGuess);
    }


//check letter - if correct - insert

for (var i = 0; i < newWord.length; i++) {
        if (newWord[i] === userGuess) {
            blankWord[i] = newWord[i];
            correctLetter = true;
        }
    }



//guessed letters into array

if (isLetter == true && alreadyGuess == false && correctLetter == false) {
        lettersGuess.push(userGuess);
        lives--;
        $('#lives').html(lives);
    }

    $('#lettersGuess').html(lettersGuess);
    $('#blankWord').html(blankWord);

//take away guess for wrong letter

if (lettersGuess.length == 10) {
        $('#message').html(message.lose);
        lettersGuess = [];
        $('#lettersGuess').html(lettersGuess);
        //if you lose, loss counter goes up

        lossCount++;
        $('#lossCount').html(lossCount);
        lives = 10;
        newGame();
    }

//reset after key

correctLetter = false;
isLetter = false;
alreadyGuess = false;


//user wins

function win() {

    for (var i = 0; i < newWord.length; i++) {
        if (blankWord[i] == " _ ") {
            newWinner = false;
        }
    }

    if (newWinner == true) {
        $('#message').html(message.win);
        }

        winCount++;
        $('#winCount').html(winCount);
        lettersGuess = [];
        $('#lettersGuess').html(lettersGuess);
        lives = 10;
        $('#lives').html(lives);

        newGame();
    }

    newWinner = true;
}



