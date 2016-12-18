var fs = require('fs');
var file1 = 'format-logic.js';
var encoding = 'UTF-8';
var file2 = 'test.jjj';
fs.readFile(file1,encoding,function(err,data){
console.log("读取成功示例：");
if(err){		//readFile的第一个参数是文件路径，在这里用file变量，第二个参数是编码方式，第三个参数是读取之后的回调函数
	nsole.error("error-\n %s",err);
	console.warn("warn-\n %s",err);
	}else{
		console.log(data);
}
});
fs.readFile(file2,encoding,function(err,data){
console.log("读取失败示例:");
if(err){                //readFile的第一个参数是文件路径，在这里用file变量，第二个参数是编码方式，第三个参是读取之后的回调函数
         console.error("error-\n %s",err);
         console.warn("warn-\n %s",err);
         }else{
                console.log(data);
}
});
