//在维基百科中对柯里化的定义是：在计算机科学中，柯里化，又译为卡瑞化或加里化，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术。
//柯里化函数则是将函数柯里化之后得到的一个新函数

// 柯里化的函数有如下两个特性：

// 接受一个单一参数；
// 返回接受余下的参数而且返回结果的新函数；

function test(a,b,c,d,e,f,g){
    return a+b+c+d+e+f*g;
}


//将函数柯里化处理的函数
function createCurry(fn,...args){

    return function(...curArgs){
        let allArgs=[...args,...curArgs];

        if(allArgs.length<fn.length){//函数参数个数不够，只能继续递归
            return createCurry(fn,...allArgs);
        }

        return fn.apply(this,allArgs);//函数参数收集完毕，可以完全执行并返回结果
    }
}

let f1=createCurry(test);

console.log(f1(1,2,3,4,5,6,7));//57
console.log(f1(1,2,3,4,5,6)(7));//57
console.log(f1(1)(2,3,4,5,6)(7));//57
console.log(f1(1)(2)(3,4,5,6)(7));//57
console.log(f1(1)(2)(3)(4,5,6)(7));//57
console.log(f1(1)(2)(3)(4)(5)(6)(7));//57

let f2=createCurry(test,1);

console.log(f2(2,3,4,5,6,7));//57
console.log(f2(2,3,4,5,6)(7));//57
console.log(f2(2,3,4,5,6)(7));//57
console.log(f2(2)(3,4,5,6)(7));//57
console.log(f2(2)(3)(4,5,6)(7));//57
console.log(f2(2)(3)(4)(5)(6)(7));//57