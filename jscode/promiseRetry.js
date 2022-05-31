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
//Promise.retry(testPromiseFn,5).then((res)=>console.log(res)).catch((err)=>console.log(err));






// 实现retry，方法接受两个入参：
// promiseFunction：调用promiseFunction产生一个promise实例，实例有可能成功，有可能失败
// timeLimit：timeslimit是最大可重试次数
// promises实例状态扭转为成功之后，函数返回的promise实例扭转为成功，失败之后，会检查当前充实次数是否超过限制，如果没有超过的话则重试，超过的话，则将返回的promise实例扭转为失败

// function retry(promiseFunction,timesLimit){}

// 使用方法：
// retry(promise,3).then(res => {}).catch(err => {})

function retry(promiseFn, timeLimit){//不能以retry为单位进行递归
    return new Promise((resolve,reject)=>{

        (function fn(){
            promiseFn().then(res=>{console.log("此次尝试成功");resolve(res);})
            .catch(err=>{
            if(timeLimit-->0){console.log("此次retry失败，再试一次");fn()}
            else {console.log('重试次数使用完毕，依然失败');reject(err);}
            })
        })();
        
    })
}
retry(testPromiseFn,5).then((res)=>console.log(res)).catch((err)=>console.log(err));
