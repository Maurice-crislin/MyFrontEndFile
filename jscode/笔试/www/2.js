class Solution {
    /* Write Code Here */
    TotalCost(cost) {
        cost.sort((a,b)=>a[0]-b[0]); 
        let item,n=Math.floor(cost.length/2);
        let dp=new Array(cost.length+1).fill().map(()=>new Array(n+1).fill().map(()=>new Array(n+1).fill(0)));
    
        for(let i=0;i<cost.length;i++){
            item=cost[i];
            if(item[0]<item[1]){
                for(let a=0;a<n;a++){
                    dp[i+1][a][i+1-a]+=item[0]
                }
                
                
            }else if(item[0]>item[1]) sum+=item[1];
            
        }
        return sum;
    }
}