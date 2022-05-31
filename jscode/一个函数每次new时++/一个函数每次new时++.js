//js面试题：实现一个构造函数 new的时候每次加一
//我们可以使用原型链上的一个属性来记录次数，同时还需要判定是否是new调用

function Count(){
    //如果是构造调用 this指向创建出来的对象 
    if(this instanceof Count){
        if(Count.count!=undefined){
            Count.count++;
            this.count=Count.count;
        }else{
            Count.count=0;
            this.count=0;
        }
    }else{
        console.log("非构造调用,当前Count.count",Count.count);
    }
}

console.log(new Count());//Count { count: 0 }
console.log(new Count());//Count { count: 1 }
console.log(new Count());//Count { count: 2 }
console.log(new Count());//Count { count: 3 }
console.log(new Count());//Count { count: 4 }
Count();//非构造调用,当前Count.count 4
Count();//非构造调用,当前Count.count 4
Count();//非构造调用,当前Count.count 4
console.log(Count);