function diffArray(arr1, arr2) {
  const arrayUncommon = []

  pushAllUncommonElements(arr1, arr2, arrayUncommon)
  pushAllUncommonElements(arr2, arr1, arrayUncommon)

  console.log(arrayUncommon)
}

function pushAllUncommonElements(firstArray, secondArray, uncommons) {
  firstArray.forEach(function(element) {
    if (secondArray.indexOf(element) === -1) {
      uncommons.push(element)
    }
  })
}

diffArray([1,2,3,4,16,3,56,43,57], [1,2,3,4,5,7,9])
