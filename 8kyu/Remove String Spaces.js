// DESCRIPTION:
// Simple, remove the spaces from the string, then return the resultant string.

//solution
function noSpace(x){
    let myarr = x.split(' ')
    return myarr.join('')
  }