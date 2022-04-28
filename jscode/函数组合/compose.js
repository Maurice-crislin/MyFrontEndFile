function compose(...fnList){
    return function(val){//初始的一个参数，去经历函数的嵌套调用
        return fnList.reduceRight((curRes,item)=>item(curRes),val);
    }
}

const add1=val=>val+1;
const mul3=val=>val*3;
const div2=val=>val/2;

console.log(div2(mul3(add1(add1(0)))))//3
//<<<<<<<<<<-----------------
console.log(compose(div2,mul3,add1,add1)(0))//3
console.log(compose(mul3)(6))//18
console.log(compose()(6787))//6787
console.log(compose()())//undefined
