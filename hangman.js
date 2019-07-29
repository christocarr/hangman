'use strict'

const Hangman = function(word, guesses) {
  this.word = word.toLowerCase().split('')
  this.guesses = guesses
  this.guessedLetters = ['a']
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.map(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += '*';
    }
  })
  return puzzle;
}


const game1 = new Hangman('Goat', 5);
const game2 = new Hangman('Hilarious', 10);

console.log(game1.getPuzzle());
console.log(game2.getPuzzle());