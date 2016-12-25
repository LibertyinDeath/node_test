/*汉诺塔问题，三根柱子，A上面有n(n>1)个圆盘，盘的尺寸由下到上依次变小，按照要求将所有的圆盘移动到c盘
 * 规则1：每次移动一个圆盘；
 * 规则2：大盘不能在小盘上面；
 */
var iCount = 0;             //移动次数
var strMoveStep = "";      //保存移动步骤
var readline = require('readline');
var rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
    });
rl.question("请输入汉诺塔的圆盘数：\t",function(count){
    //print user input
    console.log("hanoi圆盘数为：\t"+count);
    hanoi(count,"A","B","C");
    console.info("移动步骤：\t%s",strMoveStep);
    console.info("移动次数为：\t%s",iCount);
    rl.close();
    });
    /* 
     * 移动圆盘的方法
     * @param x
     * @param y
     */
function move(x,y)
{
    iCount++;
    //console.info("%s->%s",x,y);
    strMoveStep +=x + "->"  + y +"\t";
}
/*
 * 完成汉诺塔的递归方法
 */
function hanoi(m,a,b,c)
{
    if(m==1)
    {
        move(a,c);
    }
    else
    {
        hanoi(m-1,a,c,b);
        move(a,c);
        hanoi(m-1,b,a,c);
    }
}
