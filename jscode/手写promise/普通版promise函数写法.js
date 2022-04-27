//普通版不能执行异步任务,我们只处理了同步操作的 promise
//因为 promise 调用 then 方法时，当前的 promise 并没有成功，一直处于 pending 状态。
//所以如果当调用 then 方法时，当前状态是 pending,那么根本不能到case中，也不能执行任何回调函数
//我们需要先将成功和失败的回调分别存放起来
//在executor()的异步任务被执行时，触发 resolve 或 reject，依次调用成功或失败的回调。
function myPromise(executor){
    let self=this;
    this.status='pending';

    this.value=undefined;//成功的返回值
    this.error=undefined;//失败的返回值
    
    try{
        executor(resolve,resolve);//把函数定义传给excutor函数去执行
    }catch(e){
        reject(e);
    }

    function resolve(value){
        if(self.status==='pending'){
            self.status='fulfiiled';
            self.value=value;
        }
    }
    function reject(error){
        if(self.status==='pending'){
            self.status='rejected';
            self.error=error;
        }
    }


}


myPromise.prototype.then=function(onFulfilled,onRejected){
    switch(this.status){
        case 'fulfiiled':
            onFulfilled(this.value);
            break;
        case 'rejected':
            onRejected(this.error);
            break;
        default:
    }
}


var p=new myPromise(function(resolve,reject){resolve(1)});
p.then(function(x){console.log(x)})
//输出1


const promise = new Promise((resolve, reject) => {
    resolve('成功');
  }).then(
    (data) => {
      console.log('success', data)
    },
    (err) => {
      console.log('faild', err)
    }
)
//success 成功


var p=new myPromise(function(resolve,reject){
    setTimeout(()=>resolve("wuhuhuhuhuhuhuh"),3000);
});
p.then(function(x){console.log(x)})
//普通版不能执行异步任务，所以wuhu不能获得输出
