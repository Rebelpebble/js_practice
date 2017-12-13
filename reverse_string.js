const reverseString = function(stringToReverse) {
  const stringList = stringToReverse.split('');
  const reversedStringList = [];
  stringList.forEach(function(letter) {
    reversedStringList.unshift(letter);
  })

  return reversedStringList.join('');
};

const printReversedString = function(stringToPrintBackwards) {
  console.log(reverseString(stringToPrintBackwards));
}

printReversedString('Hello my name is Brian.');
printReversedString('I am 23 years old.');
printReversedString('This is my first JS program.');
