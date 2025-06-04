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

function newGame() {}
