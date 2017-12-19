function sumAll(num1, num2) {
  const upperBound = Math.max(num1, num2)
  const lowerBound = Math.min(num1, num2)
  const availableNumbers = fillInNumbers(lowerBound, upperBound)
  const availablePairs = createPairs(availableNumbers)
  const finalSums = availablePairs.map(pair => pair.reduce((accumulator, currentValue) => accumulator + currentValue))

  console.log(finalSums)
}

function fillInNumbers(lowerExtreme, upperExtreme) {
  const arrayOfNumbers = []

  while (lowerExtreme <= upperExtreme) {
    arrayOfNumbers.push(lowerExtreme)
    lowerExtreme += 1
  }

  return arrayOfNumbers
}

function createPairs(allNumbers) {
  const allPairs = []
  let start = allNumbers[0]
  let end = allNumbers[allNumbers.length - 1]

  while (start <= end) {
      allPairs.push([start, end])
      start += 1
  }

  console.log(allPairs)
  return allPairs
}

sumAll(1, 10)
