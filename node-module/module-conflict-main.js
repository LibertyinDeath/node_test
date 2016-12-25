/*
 *测试模块循环调用,main加载a模块，a模块加载b模块，b模块又去加载a模块，这时nodejs框架为了防止无限循环调用，a.js会返回一个unfinished copy给b模块，然后b就会停止加载
 */
console.log();
console.log('main starting');
var a = require('./module-conflict-a.js');
var b = require('./module-conflict-b.js');
console.log('in main,a.done = %j,b.done = %j',a.done,b.done);

