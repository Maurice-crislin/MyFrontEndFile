//按照给定深度扁平化数组
let line=readline(), n = parseInt(readline());
console.log(JSON.stringify(mySolution(JSON.parse(line),n)));
function mySolution(arr,deep){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])||deep<=0){newArr.push(arr[i]);continue;}
        newArr.push(...mySolution(arr[i],deep-1));
    }
    return newArr;
}