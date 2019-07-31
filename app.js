
//set up game status element
const gameStatusEl = document.getElementById('gameStatusEl')

//set up the word to guess to display on screen
const wordToGuess = document.getElementById('wordToGuess')
let puzzle = game1.getPuzzle()
wordToGuess.textContent = puzzle
gameStatusEl.textContent = game1.getMessage()

//set the remaining guesses to display
const guessesRemainingDisplay = document.getElementById('guessesRemainingDisplay')
guessesRemainingDisplay.textContent = game1.guessesRemaining

window.addEventListener('keypress', (e) => {
  const guess = e.key
  //only allow guess if game status is playing
  if (game1.gameStatus === 'playing') {
    game1.getGuess(guess)
  }
  game1.getGuess(guess)
  puzzle = game1.getPuzzle()
  wordToGuess.textContent = puzzle
  gameStatusEl.textContent = game1.getMessage()
  guessesRemainingDisplay.textContent = game1.guessesRemaining
})