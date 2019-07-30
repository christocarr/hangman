'use strict'

const Hangman = function(word, guessesRemaining) {
  this.word = word.toLowerCase().split('')
  this.guessesRemaining = guessesRemaining
  this.guessedLetters = []
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

Hangman.prototype.getGuess = function(guess) {
  guess = guess.toLowerCase()
  //find user guess in guessed letters array
  const isUsed = this.guessedLetters.find((letter) => {
    return letter === guess
  })
  //if not found then add to guessed letters array
  if (!isUsed) {
    this.guessedLetters.push(guess);
  }
  //if guess not in word then reduce number of guesses allowed
  const isInWord = this.word.includes(guess)
  if (!isInWord) {
    this.guessesRemaining--
  }
}

const game1 = new Hangman('Goat', 5);
console.log(game1.getPuzzle())
console.log(game1.guessesRemaining)

window.addEventListener('keypress', (e) => {
  const guess = e.key
  game1.getGuess(guess)
  console.log(game1.getPuzzle())
  console.log(game1.guessesRemaining)
})

