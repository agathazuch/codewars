// DESCRIPTION:
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

//solution
function descendingOrder(n){
    let myarr = String(n).split('').map(n=> Number(n)).sort(function(a, b){return b-a})
    let newNum = Number(myarr.join('')) 
    return newNum
  }