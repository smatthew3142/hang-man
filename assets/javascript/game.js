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

//     for (var i = 0; i < alphabet.length; i++) {
//         if (userGuess === alphabet.charAt(i)) {
//             isLetter = true;
//         }
//     }

//     if (isLetter == false && enter != 13) {
//         $('#notices').html(notices.validLetter);
//     }

// //letter already guessed

// for (var i = 0; i < lettersGuessed.length; i++) {
//         if (userGuess === lettersGuessed[i]) {
//             alreadyGuessed = true;
//         }
//     }
// }

//check letter - if correct - insert

//guessed letters into array

//take away guess for wrong letter

//if you lose, loss counter goes up

//reset after key

//user wins
}


