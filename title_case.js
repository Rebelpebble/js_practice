function convertToTitleCase(words) {
  const allWords = words.split(' ')

  const allWordsCapitalized = allWords.map(word => word.charAt(0).toUpperCase() + word.slice(1))

  console.log(allWordsCapitalized.join(' '))
}

convertToTitleCase('hello can you hear me')
