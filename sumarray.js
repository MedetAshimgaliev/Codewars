function sumArray(array) { 
var maxi = -1000000; 
var mini = 10000000; 
var sum = 0; 
console.log(array); 

if(array == null) { 
return 0; 
} 
if(array.length === 1 || array.length == 0) { 
return sum; 
} 
for(var i = 0; i < array.length; i++) { 
sum += array[i]; 
if(array[i] < mini) { 
mini = array[i]; 
} 
if(array[i] > maxi) { 
maxi = array[i]; 
} 
} 

return sum - (maxi + mini); 
}
