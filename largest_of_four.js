function largestOfFour(someArray) {
  const arrayOfMaximums = someArray.map(array => Math.max(...array))
  console.log(arrayOfMaximums)
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
