function accum(s) {
    // 	
      let index = 1
    //assign each letter an index
      s.split('').map(letter => 
        letter.repeat(index)
        index ++
      )
      console.log(s)
                      
    }