// DESCRIPTION:
// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.


function seatsInTheater(nCols, nRows, col, row) {

      if (1 <= nCols <= 1000 && 1 <= nRows <= 1000 && 1 <= col <= nCols && 1 <= row <= nRows){
        return (nCols+1-col)*(nRows-row)
      } else{
        return "Check input values are in parameters"
      }
    
    }
    console.log(seatsInTheater(16, 11, 5, 3))