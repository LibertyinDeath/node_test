/*杨辉三角指的是，两条斜边都是数字1，其余的数字则等于其<F4>肩上两个数之和
 */



var i,j,k,strLine;
var readline = require('readline');

rl = readline.createInterface(
        process.stdin,
        process.stdout
        );
rl.question("Line is: ",function(iLine){        //输入杨辉三角
    //输出杨辉三角第一行
    strLine = ">";
    for(i = 1;i<=10*iLine;i++)
    {
        if(i==5*iLine)
        {
            strLine = strLine +1;
        }
        else{
            strLine = strLine+ " ";
        }
    }
    console.info(strLine);
    //输出杨辉三角后续行
    strLine = ">";
    for(j=1;j<iLine;j++)
    {
        for(k=1;k<5*(iLine-j-1);k++)
        {
            strLine = strLine + " ";
        }
        y = 1;
        strLine = strLine + FormatNumber(y);
        for(k = 1;k<=j;k++)
        {
            y = y*(j-k+1)/k;
            strLine = strLine + FormatNumber(y);
        }
        console.info(strLine);
        strLine = ">";
    }
    rl.close();
});

/*
 * FormatNumber()方法用于格式化输出杨辉三角
 */

function FormatNumber(y){
    var strL = "";
    if (y<10)
    {
        strL = strL + "     " + y + "     ";
    }
    else if((y>=10)&&(y<100))
    {
        strL = strL + "     " + y + "     ";
    }
    else if(y>=100)
    {
        strL = strL+ "     " + y + "     ";
    }
    return strL;
}

