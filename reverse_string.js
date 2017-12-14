function reverseString(stringForward) {
  const stringReversed = [];
  stringForward.split('').forEach(function(letter) {
    stringReversed.unshift(letter);
  })

  console.log(stringReversed.join(''));
}

reverseString("Hello my name is Brian.");
reverseString("I am 23 years old.");
reverseString("This is my first JS program.");
