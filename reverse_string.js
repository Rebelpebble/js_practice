function reverseString (stringToReverse) {
  const stringList = stringToReverse.split('');
  const reversedStringList = [];
  stringList.forEach(letter => {
    reversedStringList.unshift(letter);
  })

  return reversedStringList.join('');
};

function printReversedString (stringToPrintBackwards) {
  console.log(reverseString(stringToPrintBackwards));
}

printReversedString('Hello my name is Brian.');
printReversedString('I am 23 years old.');
printReversedString('This is my first JS program.');
