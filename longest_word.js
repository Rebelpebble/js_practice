function findLongestWord(someString) {
  const listOfWords = someString.split(' ')
  let maxLength = 0

  listOfWords.forEach(word => {
    if (word.length > maxLength) {
      maxLength = word.length
    }
  })

  console.log(maxLength)
}

findLongestWord('This is some string you need to analyze')
