let _count=0;
Reflect.defineProperty(this,'a',{
    get(){
        return ++_count;
    }
})
//三等号，必须使用元编程改变程序语言的自定义行为
//自我修改
console.log(a===1 && a===2 && a===3)