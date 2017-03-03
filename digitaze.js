function digitize(n) { 
var con = []; 
var x = n.toString(); 
for(var i = x.length - 1 ; i >= 0 ; i--) { 
var qwe = parseInt(x[i]); 
con.push(qwe); 
} 
console.log(con); 
return con; 
}