/*********************** 原生promise表现 ***********************/
new Promise((resolve,reject)=>{
    setTimeout(()=>resolve("wuhu"),3000)
}).then((data)=>data+Math.random())
.then((data)=>console.log(data+Math.random()))//wuhu0.067441909233788120.14182886821858665
.catch((err)=>console.log(err))
.finally(()=>console.log("无论promise是否成功最后都要完成"))//无论promise是否成功最后都要完成


new Promise((resolve,reject)=>{
    setTimeout(()=>reject("wuwuwuwuwuw"),3000)
}).then((data)=>data+Math.random())
.then((data)=>console.log(data+Math.random()))
.catch((err)=>console.log(err))//wuwuwuwuwuw
.finally(()=>console.log("无论promise是否成功最后都要完成"))//无论promise是否成功最后都要完成

new Promise((resolve,reject)=>{
    setTimeout(()=>reject("wuwuwuwuwuw"),3000)
}).finally(()=>{console.log("无论promise是否成功最后都要完成");return '试图修改'})//无论promise是否成功最后都要完成
//finally 会原封不动传递promise的决议，在finally新的返回值不会传给后面的promise
.then((data)=>data+Math.random())
.then((data)=>console.log(data+Math.random()))
.catch((err)=>console.log(err))//wuwuwuwuwuw

/*********************** 原生测试 ***********************/
const p = ()=>new Promise((resolve, reject) => {
console.info('starting...');

setTimeout(() => {
    Math.random() > 0.5 ? resolve('success') : reject('fail');
}, 1000);
});

// 正常顺序测试
p().then((data) => {
    console.log(`%c resolve: ${data}`, 'color: green')
})
.catch((err) => {
    console.log(`%c catch: ${err}`, 'color: red')
})
.finally(() => {
    console.info('finally: completed')
});
  
// finally 前置测试  
p().finally(() => {
    console.info('finally: completed')
})	
.then((data) => {
    console.log(`%c resolve: ${data}`, 'color: green')
})
.catch((err) => {
    console.log(`%c catch: ${err}`, 'color: red')
});

/*********************** 手写的promise ***********************/
Promise.prototype.myFinally=function(onFinally){//onFinally回调函数不接收任何参数
//finally 会原封不动传递promise的决议
//onFinally 可能是个异步操作，要被Promise.resolve包一层
    return this.then(
        data => Promise.resolve(onFinally()).then(()=>data),//原封不动传递promise的决议
        err  => Promise.resolve(onFinally()).then(()=>{throw err})//原封不动传递promise的决议
    );
}


// 正常顺序测试
p().then((data) => {
    console.log(`%c resolve: ${data}`, 'color: green')
})
.catch((err) => {
    console.log(`%c catch: ${err}`, 'color: red')
})
.myFinally(() => {
    console.info('finally: completed')
});
  
// finally 前置测试  
p().myFinally(() => {
    console.info('finally: completed')
})	
.then((data) => {
    console.log(`%c resolve: ${data}`, 'color: green')
})
.catch((err) => {
    console.log(`%c catch: ${err}`, 'color: red')
});
