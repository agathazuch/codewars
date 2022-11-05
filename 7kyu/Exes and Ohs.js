// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true

//solution
function XO(str) {
    let xcount = str.toLowerCase().split('').filter(char => char ==='x').length
    let ocount = str.toLowerCase().split('').filter(char => char ==='o').length
    if (ocount === xcount) {
      return true
    } else{ 
      return false}
  }