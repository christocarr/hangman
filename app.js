'use strict'

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
  let puzzle = game1.getPuzzle()
  wordToGuess.textContent = puzzle
  gameStatusEl.textContent = game1.getMessage()
}

const startGame = async () => {
  const puzzle = await getGame('1')
  game1 = new Hangman(puzzle, 5)
  render()
  console.log(game1)
}

//set up reset button
const resetGame = document.getElementById('resetButton')
resetGame.addEventListener('click', () => {
  startGame()
})

startGame()
