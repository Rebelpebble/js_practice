function factorialize(number) {
  let start = number
  const allNumbers = []
  while (start > 0) {
    allNumbers.push(start)
    start -= 1
  }

  let total = 1

  allNumbers.forEach(nNumber => {
    total *= nNumber
  })

  console.log(total);
}

factorialize(3)
