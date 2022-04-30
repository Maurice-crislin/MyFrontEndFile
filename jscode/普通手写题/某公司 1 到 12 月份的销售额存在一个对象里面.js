//如下：{1:222, 2:123, 5:888}，
//请把数据处理为如下结构
//[222, 123, null, null, 888, null, null, null, null, null, null, null]。

function objToArr(obj){
    let arr=new Array(12).fill();
    return arr.map((val,key)=>obj[key+1]?obj[key+1]:null);
}
console.log(objToArr({1:222, 2:123, 5:888}));
//[222, 123, null, null, 888, null, null, null, null, null, null, null]