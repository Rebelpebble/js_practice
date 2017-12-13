const stringToList = function(stringUnlisted) {
  let iterator = 0;
  const stringList = [];

  while (stringUnlisted.length - 1 >= stringList.length) {
    stringList.push(stringUnlisted[iterator])
    iterator += 1;
  }

  return stringList;
}

const reverseString = function(stringListToReverse) {
  const reversedStringList = [];
  stringListToReverse.forEach(function(letter) {
    reversedStringList.unshift(letter);
  })

  return reversedStringList;
};

const printReversedString = function(stringToPrint) {
  const stringList = stringToList(stringToPrint);
  console.log(reverseString(stringList).join(''));
}

printReversedString('Hello my name is Brian.');
printReversedString('I am 23 years old.');
printReversedString('This is my first JS program.');
