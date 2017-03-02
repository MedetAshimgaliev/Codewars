function accum(s) {
	 return s.toLowerCase().split('').map((x,y) => x.toUpperCase()+new Array(y+1).join(x)).join('-');
}