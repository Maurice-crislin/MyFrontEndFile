//需要在构造函数Number的原型上添加函数

Number.prototype.add=function(n){
    if(typeof n !=='number'){
        throw new Error('请输入数字');
    }
    return this+n;
}

Number.prototype.minus=function(n){
    if(typeof n !=='number'){
        throw new Error('请输入数字');
    }
    return this-n;
}

console.log((5).add(3).minus(2))//5
console.log(Number(5).add(3).minus(2))//5
//将数值放在圆括号中，数字就会自动转化为基本包装类型