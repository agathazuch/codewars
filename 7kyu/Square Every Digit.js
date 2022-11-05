// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//solution
function squareDigits(num){

    let arr = num.toString().split('').map(digit => digit*digit)
    console.log(arr)
    let squareStr = arr.join('')
    console.log(squareStr)
    let newnum = Number(squareStr)
    console.log(newnum)
    return newnum
  }