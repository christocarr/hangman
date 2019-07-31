'use strict'

const Hangman = function(word, guessesRemaining) {
  this.word = word.toLowerCase().split('')
  this.guessesRemaining = guessesRemaining
  this.guessedLetters = []
  this.gameStatus = 'playing'
}

Hangman.prototype.getPuzzle = function() {
  let puzzle = '';
  this.word.map(letter => {
    if (this.guessedLetters.includes(letter) || letter === ' ') {
      puzzle += letter;
    } else {
      puzzle += ' _ '
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
  this.getStatus()
}

//update status of game while making guesses
Hangman.prototype.getStatus = function() {
  //when all letters of puzzle word guessed then update status as finished 
  let finished = this.word.every(letter => {
    return this.guessedLetters.includes(letter)
  })

  // when user runs out of guesses then update as failed
  if (this.guessesRemaining <= 0) {
    this.gameStatus = 'failed'
  } else if (finished) {
    this.gameStatus = 'finished'
  } else {
    this.gameStatus = 'playing'
  }
}

//show message when game is finished or failed
Hangman.prototype.getMessage = function() {
  if (this.gameStatus === 'playing') {
    return `Guesses remaining: ${this.guessesRemaining}`
  }
  else if (this.gameStatus === 'failed') {
    return `Nice try! The word is "${game1.word.join('')}"`
  } else {
    return `Great work! You guessed the word correctly` 
  }
}

const game1 = new Hangman('Goat', 5);

