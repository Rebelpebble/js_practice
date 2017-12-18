function mutation(someArray) {
  const availableLetters = someArray[0].toLowerCase()
  const requiredLetters = someArray[1].toLowerCase()
  const arrayOfBooleans = []

  requiredLetters.split('').forEach(letter => arrayOfBooleans.push(availableLetters.includes(letter)))
  console.log(undefined === arrayOfBooleans.find(booleans => booleans === false))
}

mutation(["hello", "hello"])
