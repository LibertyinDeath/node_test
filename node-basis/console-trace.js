//此例子演示了在代码的不同位置使用console.trace()方法的输出效果；
//console.trace()方法作用是打印当前位置的栈，并跟踪到标准错误输出流;
console.trace();						//第一次调用

console.trace("start");						//第二次调用
var fs = require('fs');
var file = 'not-found.txt';
var encoding = 'UTF-8';
fs.readFile(file,encoding,function(err,data){
	console.trace("fs-start");				//第三次调用
	if(err){
		//console.error("error- \n %s",err);
		//console.warn("warn- \n %s",err);
	}else{
		//console.log(data);
	}
	console.trace("fs-end");				//第四次调用
});
console.trace("end");						//第五次调用
		
