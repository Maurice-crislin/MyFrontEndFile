// 14. js如何并发的发送请求
// 除了Promise.all，如果用async怎么实现
function getName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('tony')
        }, 2000)
    })
}

function getId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('123')
        }, 3000)
    })
}
//传给Promise作为参数的函数会在new创建实例时立即调用
//所以，如果想并行执行，我们应该先生成所有需要使用的Promise实例：

(async function(){
    let start=new Date();
    let [namePromise,idPromise]=[getName(),getId()];
    let name=await namePromise;
    let id=await idPromise;
    let end=new Date();
    console.log(`name:${name}, id:${id}`,(end-start)/1000);//name:tony, id:123 3.006
})();