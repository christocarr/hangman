'use strict'

import Hangman from './hangman'
import getGame from './request'

let game1

//set up game status element
const gameStatusEl = document.getElementById('gameStatusEl')
//set up the word to guess to display on screen
const wordToGuess = document.getElementById('wordToGuess')

window.addEventListener('keypress', (e) => {
  const guess = e.key
  //only allow guess if game status is playing
  if (game1.gameStatus === 'playing') {
    game1.getGuess(guess)
  }
  render()
})

//show word puzzle and game status message
const render = () => {
  const puzzle = game1.getPuzzle()
  wordToGuess.innerHTML = ''
  gameStatusEl.textContent = game1.getMessage
  puzzle.split('').forEach(letter => {
    const letterEl = document.createElement('span')
    letterEl.textContent = letter
    wordToGuess.appendChild(letterEl)
  });
}

const startGame = async () => {
  const puzzle = await getGame('1')
  game1 = new Hangman(puzzle, 5)
  render()
}

//set up reset button
const resetGame = document.getElementById('resetButton')
resetGame.addEventListener('click', () => {
  startGame()
})

startGame()
