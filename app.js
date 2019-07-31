const game1 = new Hangman('Goat', 5);

//set up the word to guess to display on screen
const wordToGuess = document.getElementById('wordToGuess')
let puzzle = game1.getPuzzle()
wordToGuess.textContent = puzzle

//set the remaining guesses to display
const guessesRemainingDisplay = document.getElementById('guessesRemainingDisplay')
guessesRemainingDisplay.textContent = game1.guessesRemaining

window.addEventListener('keypress', (e) => {
  const guess = e.key

  game1.getGuess(guess)
  puzzle = game1.getPuzzle()
  wordToGuess.textContent = puzzle

  guessesRemainingDisplay.textContent = game1.guessesRemaining
})