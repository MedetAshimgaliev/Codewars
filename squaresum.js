function squareSum(numbers){
  var sum = 0;
  for(var i = 0; i < numbers.length; i++){
  numbers[i]=numbers[i]*numbers[i];
  sum += numbers[i];
  }
  return sum;

}