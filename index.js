var words = [
  "bananas",
  "grapes",
  "carousel",
  "milkshake",
  "javascript",
  "limousine",
  "chocolate",
  "programming",
  "meatloaf",
  "ukulele",
  "mango",
];

let currentWord = "";
let guessWord = [];
let remainingGuess = 0;
let incorrectLetter = [];
let win = 0;
let loss = 0;
let previousLetter = "";

var wordtoGuess = document.getElementById("word-to-guess");
var remainingWord = document.getElementById("remaining-guesses");
var wrongLetter = document.getElementById("incorrect-letters");
var wordWin = document.getElementById("wins");
var wordLoss = document.getElementById("losses");
var wordBefore = document.getElementById("previous-word");

if (currentWord) {
  previousLetter = currentWord;
  wordBefore.textContent = previousLetter;
}
currentWord = words[Math.floor(Math.random() * words.length)];
guessWord = Array(currentWord.length).fill("_");
wordtoGuess.textContent = guessWord.join("");

remainingGuess = 10;
incorrectLetter = [];

remainingWord.textContent = remainingGuess;
wrongLetter.textContent = guessWord.join(", ");

wordWin.textContent = win;
wordLoss.textContent = loss;

function gameGuess(letter) {
  letter = letter.toLowercase();
  if (
    !/^[a-z]$/.test(letter) ||
    incorrectLetter.includes(letter) ||
    guessWord.includes(letter)
  ) {
    return;
  }

  if (currentWord.includes(letter)) {
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter) {
        guessWord[i] = letter;
      }
    }
    wordBefore.textContent = guessWord.join(" ");
    if (guessWord.join("") === currentWord) {
      win++;
      wordWin.textContent = win;
      setTimeout(() => {
        alert("You won! The word was: " + currentWord);
        newGame();
      }, 100);
    }
  } else {
    incorrectLetter.push(letter);
    remainingGuess--;

    incorrectLetter.textContent = wrongLetter.join(", ");
    remainingGuess.textContent = remainingWord;

    if (remainingGuess === 0) {
      loss++;
      wordLoss.textContent = loss;
      setTimeout(() => {
        alert("You lost! The word was: " + currentWord);
        newGame();
      }, 100);
    }
  }
}
