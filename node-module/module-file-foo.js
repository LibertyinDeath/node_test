var circle = require('./module-file-circle.js');
console.info();
var readline = require('readline');
var rl = readline.createInterface(
        {
            input:process.stdin,
            output:process.stdout
        });
rl.question("Please input the radius:\t",function(answer){
    console.info("The radius is:\n",answer);
    console.info("The area of a circle of radius '"+answer+"' is \n"+circle.area(answer));
            
    console.info("The circumference of a circle radius '"+answer+"' is \n"+circle.circumference(answer));
    console.info();
    rl.close();
});
