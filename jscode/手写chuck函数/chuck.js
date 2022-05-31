//数组分块，通过给定值，将数组分成指定大小
// chunk()
// 说明：

// 语法：chunk(array,size)
// 功能：将数组拆分成多个size长度的区块，每个区块组成小数组，整体组成一个二维数组
// 例子：[1,2,3,4,5] 调用chunk(arr,3) =>[[1,2,3],[4,5]]

function chunk(array,size){
    return Array.from({length:Math.ceil(array.length/size)},
    (val,index)=>array.slice(index*size,(index+1)*size));
}
//使用 Array.from() 创建一个新的数组，它的长度就是生成 chunk(块) 的数量。 
//使用 Array.slice() 将新数组的每个元素映射到长度为 size 的 chunk 中。 
//如果原始数组不能均匀分割，最后的 chunk 将包含剩余的元素。


function myChunk(arr,size){
    let len=Math.ceil(arr.length/size);//向上取
    let chunk=[];
    for(let i=0;i<len;i++){
        chunk.push(arr.slice(i*size,(i+1)*size));
    }
    return chunk;
}


let arr=[1,2,3,4,5,6,7,8,9,0,5,6,5,7,5,7,5,6,5,6,5,5,5,5,2,6,7,5,99,7];
console.log(chunk(arr,4));
// [
//     [ 1, 2, 3, 4 ],
//     [ 5, 6, 7, 8 ],
//     [ 9, 0, 5, 6 ],
//     [ 5, 7, 5, 7 ],
//     [ 5, 6, 5, 6 ],
//     [ 5, 5, 5, 5 ],
//     [ 2, 6, 7, 5 ],
//     [ 99, 7 ]
// ]

console.log(myChunk(arr,4));

console.log([1,2,3].slice(1,9));//[ 2, 3 ] 会忽略越界下标