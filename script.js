var res=1;
factorial(6);
function factorial(n){
	res*=n;
	n>1?factorial(n-1):print(res);
}
function print(string){
	document.getElementById("output").innerHTML=string;
}