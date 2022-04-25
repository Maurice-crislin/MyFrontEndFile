/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param s string字符串 
 * @return int整型
 */
 function minCnt( s ) {
    // write code here
    let count=0;
    for(let i=s.length-1;i>0;i--){
        if(s[i]=='1')count++;
    }
    return count;
}
module.exports = {
    minCnt : minCnt
};