function find_average(array) {
  // your code here
  var avg = 0;
  for(var i = 0; i < array.length;i++){
   avg += array[i];
  }
  return avg/array.length;
}