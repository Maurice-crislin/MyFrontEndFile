function sleep(timeout){
    return new Promise((resolve,reject)=>{
      setTimeout(resolve,timeout)
    })
}
//场景题，给了一个sleep函数， 实现功能，隔1s打印1，再隔2s打印2，隔3秒打印3
function main(){
// 写代码
    async function init(){
        let start = new Date();
        await sleep(1000);
        console.log(new Date()-start);//1003 
        await sleep(2000);
        console.log(new Date()-start);//3021
        await sleep(3000);
        console.log(new Date()-start);//6034
    } 
    init();
}
main();