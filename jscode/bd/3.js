var lines=readline().split(' ');
var n = parseInt(lines[0]),k=parseInt(lines[1]);
var arr = readline().split(" ").map((val)=>parseInt(val));
function my(arr,k){
    if(arr[k]==0){print(0)};
    let count=0;
    for(let i=k;i<arr.length;i++){
        if(arr[i]==1)
    }
    if(arr[k+1]==0&&arr[k-1]==0){print(arr[k]);}
}
function dfs(arr,index,k,count){
    if(index==k)return count;
    
}
my(arr,k-1)