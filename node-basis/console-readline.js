var readline = require('readline');
var rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});
rl.question("What is your name?\n",function(answer){
	//Log the answer in a database
	console.log("My name is ",answer);
	rl.close();
});
rl.question("How old are you?\n",function(answer){
	//Log the answer in a database
	console.log("I'm",answer);
	rl.close();
});
