function testPromiseFn(){
    return new Promise((resolve,reject)=>{
        if(Math.random()<0.3){
            resolve("wuhuwu成功啦");
        }else{
            reject("悲，失败了");
        }
    })
}
Promise.retry=function(prmFn,count){//此函数返回值要为promise，以便后续链式调用
    let temp=count;
    return new Promise((resolve,reject)=>{
        let fn=function(){
        prmFn().then((res)=>{
            console.log(`第${temp-count+1}次尝试成功了`)
            resolve(res);
        }).catch((err)=>{ 
            if(count>0){
                console.log("此次retry失败，再试一次")
                count--;
                fn();
            }else{
                console.log('重试次数使用完毕，依然失败');
                reject(err);
            }
        })
        }
        fn();
    })
}
Promise.retry(testPromiseFn,5).then((res)=>console.log(res)).catch((err)=>console.log(err));