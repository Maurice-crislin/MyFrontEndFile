class Solution {
    /* Write Code Here */
    TotalCost(n,path) {
        let edge=[],fromTo=Array(n+1),from=0,to=0;
        for(let i=0;i<n;i++){
            for(j=0;j<=i;j++){
                if(path[i][j]==-1)continue;
                edge.push([i,j,path[i][j]])
            }
        }
        edge.sort((a,b)=>a[2]-b[2]);
        let count=0,sumLen=0,curLen;
        for(let i=0;i<edge.length;i++){
            if(count==n-1)break;
            [from,to,curLen]=edge[i];
            if(from!=to){
                fromTo[from]=to;
                sumLen+=curLen;
                count++;
            }

        }
        print(sumLen)
    }
}
let res;

let n = readInt();
let path = Array();
for(let i=0; i<n; i++) {
    path[i] = new Array();
    for(let j=0;j<n;j++){
        path[i][j] = readInt();
    }
}

let acmSolution = new Solution();
acmSolution.TotalCost(n,path);

