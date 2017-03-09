function animals(heads, legs){
  var ani = [0, heads];
  if(heads === 0 && legs === 0) {
    ani[0] = 0;
    ani[1] = 0;
    return ani;
  }
  
  for(var i = 0; i < heads + 1; i++) {
    if(((ani[0] * 2) + (ani[1] * 4)) === legs) {
      return ani;
    }
    else {
      ani[0]++;
      ani[1]--;
    }
    
  }
  return "No solutions";
  
  //return [Chickens, Cows]
}