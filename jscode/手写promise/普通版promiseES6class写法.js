const PENDING='pending';
const FULFILLED='fulfilled';
const REJECTED='rejected';

class MyPromise{
    constructor(executor){
        this.status='pending';
        this.value=undefined;//成功的返回值
        this.error=undefined;//失败的返回值

        try{
            executor(resolve,reject); // 立即执行，将 resolve 和 reject 函数传给使用者  
        }catch(e){
            reject(e);
        }

        function resolve(value){
            if(self.status===PENDING){
                self.status=FULFILLED;
                self.value=value;
            }
        }
        function reject(error){
            if(self.status===PENDING){
                self.status=REJECTED;
                self.error=error;
            }
        }
    }

    then(onFulfilled,onRejected){
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }
      
        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
    }
    
}

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