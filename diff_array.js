function diffArray(arr1, arr2) {
  arraysOrdered = maxArrayFirst(arr1, arr2)
  maxArray = arraysOrdered[0]
  minArray = arraysOrdered[1]
  arrayUncommon = []

  maxArray.forEach(function(element) {
    if (minArray.indexOf(element) === -1) {
      arrayUncommon.push(element)
    }
  })

  minArray.forEach(function(element) {
    if (maxArray.indexOf(element) === -1) {
      arrayUncommon.push(element)
    }
  })

  console.log(arrayUncommon)
}

function maxArrayFirst(firstArray, secondArray) {
  if (firstArray.length >= secondArray.length) {
    return [firstArray, secondArray]
  } else {
    return [secondArray, firstArray]
  }
}

diffArray([1,2,3,4,16], [1,2,3,4,5,7,9])
