function countPositivesSumNegatives(input) {
var cnt = [0, 0]; 
var emp = [];
if (input === null ||input.length === 0)
return emp;
for (var i = 0; i < input.length; i++){
    if(input[i] > 0)
     cnt[0]++;
    else
     cnt[1] += input[i];
 
}
    return cnt;
}