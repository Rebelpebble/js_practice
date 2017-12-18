function isPalindrome(word) {
  const wordSplit = word.split('')
  const wordSplitBackwards = word.split('').reverse()

  return wordSplit === wordSplitBackwards
}

console.log(isPalindrome('racecar'))
