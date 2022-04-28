//promise 的优势在于可以链式调用。
//在我们使用 Promise 的时候，当 then 函数中 return 了一个值
//不管是什么值，我们都能在下一个 then 中获取到
//这就是所谓的then 的链式调用。

//如果每次调用 then 的时候，
//我们都重新创建一个 promise 对象，并把上一个 then 的返回结果传给这个新的 promise 的 then 方法
//就可以一直 then 下去

//没有写完。。。。。。
const PENDING='pending';
const FULFILLED='fulfilled';
const REJECTED='rejected';

class MyPromise{
    constructor(executor){
        this.status='pending';
        this.value=undefined;//成功的返回值
        this.error=undefined;//失败的返回值

        this.onFulFilledCallbacks=[];//存放成功的回调
        this.onRejectedCallbacks=[];//存放失败的回调

        try{
            executor(resolve,reject);
        }catch(e){
            reject(e);
        }

        function resolve(value){
            if(this.status===PENDING){
                this.status=FULFILLED;
                this.value=value;
                this.onFulFilledCallbacks.forEach(callback=>callback(this.value));
            }
        }

        function reject(error){
            if(this.status===PENDING){
                this.status=REJECTED;
                this.error=error;
                this.onRejectedCallbacks.forEach(callback=>callback(this.error));
            }
        }
    }


    then(onFulfilled,onRejected){
        if(this.status === FULFILLED){
            onFulfilled(this.value);
        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }

        if(this.status === PENDING){
        // 如果promise的状态是 pending
        //需要将 onFulfilled 和 onRejected 函数存放起来
        //等待状态决议之后，再依次将对应的函数执行
            this.onFulFilledCallbacks.push(onFulfilled);
            this.onRejectedCallbacks.push(onRejected);
        }
    }
    
}



new Promise((resolve, reject) => {
    setTimeout(()=>resolve('成功'),3000);
  }).then().then().then((data)=>console.log(new Date()+data));
//Wed Apr 27 2022 17:10:08 GMT+0800 (中国标准时间)成功

new Promise((resolve, reject) => {
    reject('失败');
  }).then().then().then(data=>{
    console.log(data);
  },err=>{
    console.log('err',err);
  })
//err 失败