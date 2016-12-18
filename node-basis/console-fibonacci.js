console.info("\n");
console.info("------Fibonacci数列-------");
console.info("\n");
var strFibonacci;
var i = 1,j=1,s=i+j;
strFibonacci  = "输出Fibonacci数列>>>1 1 ";	//初始化
//循环判断条件
while(s<=1000)
{
	strFibonacci = strFibonacci +s + " ";
	i = j;
	j = s;
	s = i+j;
}
console.info(strFibonacci);
//console.info("\n");
