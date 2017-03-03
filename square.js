function squareOrSquareRoot(array) {
  for(var i = 0; i < array.length; i++){
    if(Math.sqrt(array[i]) % 1 === 0) {
      array[i] = Math.sqrt(array[i])
    }
    else 
      array[i] = array[i] * array[i]
  }
    return array;  
}