console.info("\n");
console.info("-------计算阶乘-------");
console.info("\n");
var iNum,iFactorial =1;
var strFactorial;		//用于保存阶乘的输出
console.log(iFactorial);
//读取用户输入
var readline = require("readline");
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.question("请输入阶乘运算的起始值:\nn=",function(iNum){
	//计算阶乘结果
	strFactorial = iNum + "!="+factorial(iNum);
	console.info(strFactorial);
	console.info("\n");
	rl.close();
});
console.log(iFactorial);
//定义阶乘运算的递归方法

function factorial(n){
	if(n>0)
	{
		if(n==1)
		{
			iFactorial = 1;
		}
		else
		{
			iFactorial = n*factorial(n-1);
		}
	}
	return iFactorial;
}

