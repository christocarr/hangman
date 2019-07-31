
//set up game status element
const gameStatusEl = document.getElementById('gameStatusEl')

//set up the word to guess to display on screen
const wordToGuess = document.getElementById('wordToGuess')
let puzzle = game1.getPuzzle()
wordToGuess.textContent = puzzle
gameStatusEl.textContent = game1.getMessage()

window.addEventListener('keypress', (e) => {
  const guess = e.key
  //only allow guess if game status is playing
  if (game1.gameStatus === 'playing') {
    game1.getGuess(guess)
  }
  puzzle = game1.getPuzzle()
  wordToGuess.textContent = puzzle
  gameStatusEl.textContent = game1.getMessage()
})