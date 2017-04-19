//
/*const abc = function(n){
	alert(n)
}
export {abc}*/
Number.prototype.subNum = function(n){//小数点后n位截断
	var f_x = parseFloat(this);
	if (isNaN(f_x)){
		return false;
	}
	//加上0.0001是纠正浮点精度，比如17.81*100
	f_x = Math.floor(f_x*Math.pow(10,n)+0.0001)/Math.pow(10,n);
	var s_x = f_x.toString();
	var pos_decimal = s_x.indexOf('.');
	if (pos_decimal < 0){
		pos_decimal = s_x.length;
		s_x += '.';
	}
	while (s_x.length <= pos_decimal + n){
		s_x += '0';
	}
	return s_x;
}

function subNumFun(a,b){
	return a.subNum(b)
}

export {subNumFun}