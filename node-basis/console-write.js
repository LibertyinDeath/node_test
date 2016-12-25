console.info('Node.js -readline.write() Usage');
var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

/*readline.write(data,[key])	将参数data的内容写入到标准输入输出流，参数key是一个代表键序列的对象，当终端是一个计算机终端设备时可用
 */

rl.write('Delete me! Wait for 3s...');
var timeoutLength = 3*1000;		//定义了一段3s的时间间隔

var timeout = setTimeout(function(){	//调用setTimeout()方法

	//模仿Ctrl+u快捷键，删除之前行
	rl.write(null,{ctrl:true,name:'u'});

},timeoutLength);
