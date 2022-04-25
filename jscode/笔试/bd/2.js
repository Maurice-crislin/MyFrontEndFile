let str=readline();
my(str);
function my(str){
    let sum=0,presum=new Array(str.length+1).fill(0);
    for(let i=0;i<str.length+1;i++){
        presum[i]=sum;
        sum+=(str[i]=='1'?1:0);
    }
    let dp=Array(str.length+1).fill().map(()=>Array(str.length+1))
    let set=Set(),max=-Infinity,qujian1=[],quanjian2=[];
    for(let i=0;i<str.length+1;i++){
        for(let j=0;j<i;j++){
            dp[j][i]=presum[i]-presum[j];
            if(set.has(dp[j][i])){
                if(max<dp[j][i]){
                    max=dp[j][i];
                    quanjian2=[j,i]
                }
            }else{
                set.add(dp[j][i]);
                quanjian1=[j,i]
            }
        }
    }
   
    console.log(...quanjian1,...quanjian2)
}
