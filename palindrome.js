function isPalindrome(word) {
  const wordSplit = word.split('')

  if (checkEachLetter(wordSplit)) {
    return true
  } else {
    return false
  }
}

function checkEachLetter(letters) {
  let otherSide = letters.length - 1
  letters.forEach(letter => {
    if (letter !== letters[otherSide]) {
      return false
    }
  })
}

console.log(isPalindrome('eye'))
