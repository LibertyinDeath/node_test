
var n=0;

console.time('10000*10000-times'); 		//标记时间开始点
for(var i=0;i<10000;i++){
	for(var j = 0;j<10000;j++){
		n++;
	}
}
console.timeEnd('10000*10000-times');		//双重循环时间结束点
console.info(n);
