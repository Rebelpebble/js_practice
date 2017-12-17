const myGuess = 10

function takeGuess(myGuess) {
  const randomNumber = Math.floor(Math.random() * 20)
  while (randomNumber !== myGuess) {
    if (myGuess < randomNumber) {
      console.log('Too high.')
    } else {
      console.log('Too low.')
    }
  }

  console.log('You win!')
}
