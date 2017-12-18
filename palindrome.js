function isPalindrome(word) {
  const wordSplit = word.split('')
  const halfWay = wordSplit.length / 2
  let leftSide = 0
  let rightSide = wordSplit.length - 1

  while (wordSplit[leftSide] === wordSplit[rightSide] && leftSide !== rightSide) {
    leftSide += 1
    rightSide -= 1
  }

  if (leftSide === rightSide) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('racecar'))
