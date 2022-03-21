var n = parseInt(readline());
var target = readline();
let arr=[],used=[];
for(var i = 0;i < n; i++){
    lines = readline().split(" ")
    lines.map((val)=>parseInt(val,10))
    used.push(new Array(n).fill(false));
}
let count;
function main(arr,target,index){
    for(let i=0;i<n;i++){
        for(let j=0;j<n;j++){
            if(arr[i][j]==target[index]){
                count+=dfs(i+1,j,index+1)
            }
        }
    }
    console.log(count);
}
function dfs(i,j,index){
    if(index>=target.length){count++;return}
    for(;i<n;i++){
        for(;j<n;j++){
            if(arr[i][j]==target[index]){
                dfs(i+1,j,index+1)+dfs(i,j+1,index+1);
            }
        }
    }
}