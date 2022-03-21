setTimeout(function(){
    console.log(1);
}, 0)
new Promise(function(resolve){
    console.log(2);
    resolve();
    console.log(3);
}).then(function(){
    console.log(4);
})
console.log(5);
//2 3 5 4 1
//promise.then的回调是微任务，new Promise时的代码是同步的，new Promise内的会立即执行