/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param a int整型一维数组 
 * @param k int整型 
 * @param x int整型 
 * @return int整型
 */
 function minMax( a ,  k ,  x ) {
    function findMax(a){
        let maxIndex=0;
        for(let i=0;i<a.length;i++){
            if(a[i]>a[maxIndex]){
                maxIndex=i;
            }
        }
        return maxIndex;
    }
   // write code here
   while(k>0){
       k--;
       console.log(a)
       a[findMax(a)]-=x;
   }
   return a[findMax(a)];
}
module.exports = {
   minMax : minMax
};