// let n=readInt(),m=readInt(),arr=[];
// while(n-->0){
//     arr.push(readInt());
// }
// let up=[],down=[],flag=0,end=0;
// while(m-->0){
//     flag=readInt();
//     end=readInt();
//     end-=1;
//     if(flag==0)up.push(end);
//     else down.push(end);
// }
// function fun(arr,up,down){
//     let flagArr=Array(arr.length).fill(0);
//     for(let i=0;i<up.length;i++){
//         flagArr[up[i]]+=1;
//     }
//     for(let i=0;i<down.length;i++){
//         flagArr[down[i]]-=1;
//     }
//     let temp=[];
//     for(let i=0;i<flagArr.length;i++){
//         if(flagArr[i]>0){
//             temp=arr.splice(0,i+1);
//             arr=[...(temp.sort((a,b)=>a-b)),...arr];
//         }else{
//             temp=arr.splice(0,i+1);
//             arr=[...(temp.sort((b,a)=>b-a)),...arr];
//         }
//     }
//     console.log(arr);
// }
// fun(arr,up,down)


let n=readInt(),m=readInt(),arr=[];
while(n-->0){
    arr.push(readInt());
}
let make=[],flag=0,end=0;
while(m-->0){
    flag=readInt();
    end=readInt();
    make.push(flag,end);
}
function fun(arr,make){
    let temp=[],item=[],flag=0,maxUp=-Infinity,maxDown=-Infinity;
    let flagArr=Array(arr.length).fill(0);
    for(let i=0;i<make.length;i++){
        item=make[i];
        flag=item[0];
        end=item[1];
        if(flag==0){
            maxUp=Math.max(maxUp,end)
        }else{
            maxDown=Math.max(maxDown,end)
        }
    }
    temp=arr.splice(0,maxUp);
    arr=[...(temp.sort((a,b)=>a-b)),...arr];
    temp=arr.splice(0,maxDown);
    arr=[...(temp.sort((a,b)=>b-a)),...arr];
}
fun(arr,make)