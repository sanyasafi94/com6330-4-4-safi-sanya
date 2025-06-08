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

currentWord = words[Math.floor(Math.random() * words.length)];
guessWord = Array(currentWord.length).fill("_");

wordtoGuess.textContent = guessWord.join("");

remainingGuess = 10;
incorrectLetter = [];

remainingWord.textContent = remainingGuess;

wordWin.textContent = win;
wordLoss.textContent = loss;
const body = document.querySelector("body");
body.dispatchEvent(new KeyboardEvent("keypress", gameGuess));
document.addEventListener("keypress", function (event) {
  gameGuess(event.key.toString());
});

function gameGuess(letter) {
  console.log("here");
  console.log("letter,", letter);
  if (
    !/^[a-z]$/.test(letter) ||
    incorrectLetter.includes(letter) ||
    guessWord.includes(letter)
  ) {
    return;
  }
  console.log("current word", currentWord);
  console.log("here2");

  if (currentWord.includes(letter)) {
    for (let i = 0; i < currentWord.length; i++) {
      if (currentWord[i] === letter) {
        guessWord[i] = letter;
      }
    }
    wordtoGuess.textContent = guessWord;
    console.log(guessWord.join(""));
    if (guessWord.join("") === currentWord) {
      win++;
      wordWin.textContent = win;
      incorrectLetter = [];
      wrongLetter.textContent = incorrectLetter;
      remainingGuess = 10;
      remainingWord.textContent = remainingGuess;
      wordBefore.textContent = remainingGuess;

      currentWord = words[Math.floor(Math.random() * words.length)];
      guessWord = Array(currentWord.length).fill("_");

      wordtoGuess.textContent = guessWord.join("");
    }
  } else {
    console.log("here4");
    incorrectLetter.push(letter);
    remainingGuess--;

    wrongLetter.textContent = incorrectLetter.join(", ");
    remainingWord.textContent = remainingGuess;

    if (remainingGuess === 0) {
      loss++;
      wordLoss.textContent = loss;
      incorrectLetter = [];
      wrongLetter.textContent = incorrectLetter;
      remainingGuess = 10;
      remainingWord.textContent = remainingGuess;
      wordBefore.textContent = currentWord;

      currentWord = words[Math.floor(Math.random() * words.length)];
      guessWord = Array(currentWord.length).fill("_");

      wordtoGuess.textContent = guessWord.join("");
    }
  }
}
