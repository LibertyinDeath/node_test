var util = require('util');
var fs = require('fs');
var encoding = 'UTF-8';
var file = 'test.txt';
fs.readFile(file,encoding,function(err,buffer){
console.log("readFile用于异步读取数据：");
	if(err){
	throw(err);
	process(buffer);
	}else{
		console.log(buffer);
}});
fs.readFileSync(file,encoding);
fs.writeFile(file,'helloworld',encoding,(err)=>{
	if(err){
		throw(err);
		}else{
			console.log("it is saved");

}
});
fs.exists('/path/to/file',function(exists){
console.log(exists ? "it is there":"no file!");
});

