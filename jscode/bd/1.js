var n,k,lines,arr = [];
lines=readline().split(" ");
n=parseInt(lines[0]);
k=parseInt(lines[1]);
for(var i = 0;i < n; i++){
    lines = readline().split(" ");
    arr.push(lines);
}
fun(arr,n,k)
function fun(arr,n,k){
    let res=new Array(n*k).fill(0).map(()=>new Array(n*k).fill(0));
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            fill(arr[i][j],i*k,j*k)
        }
    }
    function fill(fillNum,startX,startY){
        for(let i=startX;i<startX+k;i++){
            for(let j=startY;j<startY+k;j++){
                res[i][j]=fillNum;
            }
        }
    }
    for(let i=0;i<n*k;i++){
            console.log(...res[i])
    }
}

