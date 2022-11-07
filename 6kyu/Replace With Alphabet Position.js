// DESCRIPTION:
// Welcome.
// In this kata you are required to, given a string, replace every letter with its position in the alphabet.
// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

//solution
function alphabetPosition(text) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~0123456789 '
    //turn alphabet to array, split('')
    alphabet.split('')
    
    //remove punctuation from text and make lowercase
    let rawLetters = text.toLowerCase().split('')
    let cleanLetters = rawLetters.filter(letter => punctuation.indexOf(letter) === -1)
  
    //compare cleanLetters to alphabet array and get alphabet array letter index plus 1
    let numArr = cleanLetters.map(letter => Number(alphabet.indexOf(letter)) +1)
    //   return string of numbers;
    let numString = numArr.join(' ')
    return numString
  }