//是一个发布订阅模式
//这种收集依赖 -> 触发通知 -> 取出依赖执行的方式，被广泛运用于发布订阅模式的实现。

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

const promise = new Promise((resolve, reject) => {
    setTimeout(()=>resolve('成功'),3000);
  }).then(
    (data) => {
      console.log('success', data)
    },
    (err) => {
      console.log('faild', err)
    }
)
//三秒之后 颤巍巍出现了    --    success 成功