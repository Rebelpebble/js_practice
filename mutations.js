function mutation(availableLetters, requiredLetters) {
  availableLetters = availableLetters.toLowerCase()
  requiredLetters = requiredLetters.toLowerCase()

  console.log(requiredLetters.split('').every(letter => availableLetters.includes(letter)))
}

mutation("hello", "hellot")
