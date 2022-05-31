
let arr=[1,2,2,3,3,4,4,5,5,'5','7','7','2-4',"weuihu",undefined,null,undefined,null,0,-0,'null'];
// [
//     1,         2,
//     3,         4,
//     5,         '7',
//     '2-4',     'weuihu',
//     undefined, null,
//     0
//   ]

//一个bug是 5与‘5’判别为同一个，null和'null'判别为同一个 ,因为对象key存储完变成字符串
function uni1(arr){
    let uniArr=[],toolObj={};
    for(let i=0;i<arr.length;i++){
        if(!toolObj[arr[i]]){
            toolObj[arr[i]]=true;
            uniArr.push(arr[i]);
        }
    } 
    return uniArr;
}

console.log(uni1(arr));