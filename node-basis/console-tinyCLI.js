var readline = require('readline');

rl = readline.createInterface(
		process.stdin,
		process.stdout
		);
rl.setPrompt('NodeJS>');
rl.prompt();
rl.on('line',function(line){
	switch(line.trim()){
	case 'name':
		console.log("king");		
		break;
	case 'code':
		console.log('NodeJS!');
		break;
	case 'time':
		console.log('2016');
		break;
	default:
		console.log('Say what?\n I might have heard`'+line.trim()+'`');
		break;
	case 'quit':
		rl.close();
}
rl.prompt();
}).on('close',function(){
	console.log('Have a great day!');
	process.exit(0);
});
