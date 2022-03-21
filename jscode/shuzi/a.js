let n=readInt();
let itemno=[],itemyes=[],a=0,b=0;
while(n-->0){
    a=readInt();
    b=readInt();
    if(b==0)itemno.push(a);
    else itemyes.push(a);
}
function mySolution(arryes,arrno){
   let count=0;
   arrno.forEach(val => {
       count+=val;
   });
   arryes.sort((a,b)=>b-a);
   //console.log(arryes)
   let dp=Array(arryes.length+1).fill(0);
   dp[0]=count;
   for(let i=0;i<arryes.length;i++){
       dp[i+1]=Math.max(dp[i]*2,dp[i]+arryes[i]);
   }
   console.log(dp[dp.length-1]);
}
mySolution(itemyes,itemno);