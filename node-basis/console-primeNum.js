var i,j,iNum,strPrimeNum;
var bFlag;
var readline = require('readline');
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

/*用户输入一个整数作为上限，通过程序计算从2开始到该整数之间的全部质数
 */
rl.question("Please enter a number:\n",function(iNum){
    strPrimeNum = " 2 ";
    for(i=3;i<=iNum;i++)                        
    {
        bFlag = true;
        for(j=2;j<i;j++)                        //从2开始找寻约数
        {
            if(i%j==0)                          //判断满足质数的条件，若从2开始到这个数之间存在约数，则不为质数
            {
                bFlag = false;
                break;
            }
        }
        if(bFlag == true)
        {
            strPrimeNum = strPrimeNum +i+" ";   //将质数保存在一个字符串变量中
        }
    }
    console.log("Prime number >",strPrimeNum);
    rl.close();
});
