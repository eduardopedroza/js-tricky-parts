function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let numGuesses = 0;
  let winCheck = false;
  return function guess(num) {
    numGuesses++;
    if (winCheck) {
      return "The game is over, you already won!";
    } else if (num === randomNum) {
      winCheck = true;
      return `You win! You found ${randomNum} in ${numGuesses} guesses.`;
    } else if (num > randomNum) {
      return `${num} is too high!`;
    } else if (num < randomNum) {
      return `${num} is too low!`;
    }
  };
}

module.exports = { guessingGame };
