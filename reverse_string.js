const reverseString = function(stringListToReverse) {
  const reversedStringList = [];
  stringListToReverse.forEach(function(letter) {
    reversedStringList.unshift(letter);
  })

  return reversedStringList.join('');
};

const printReversedString = function(stringToPrint) {
  const stringList = stringToPrint.split('');
  console.log(reverseString(stringList));
}

printReversedString('Hello my name is Brian.');
printReversedString('I am 23 years old.');
printReversedString('This is my first JS program.');
