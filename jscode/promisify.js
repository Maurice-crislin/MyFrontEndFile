function asyncTest(a,b,callback){
    console.log('异步请求参数', a, b)
    setTimeout(()=>Math.random()>0.3?callback(undefined,a+b):callback(new Error("失败了")),2000);
}
asyncTest(1,2,function(err,res){console.log(err,res)})//Error: 失败了 undefined



function promisify(asyncFn){
    return function(...arg){
        return new Promise((resolve,reject)=>{
            asyncFn.call(null,...arg,(err,res)=>{
                if(err)reject(err)
                resolve(res);
            });
        })
    }
}
let promiseFn=promisify(asyncTest);
promiseFn(3,4).then(res=>console.log(res)).catch(err=>console.log(err));//7
