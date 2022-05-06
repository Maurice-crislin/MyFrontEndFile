
let a={
    count:1,
    valueOf:function(){
        return this.count++;
    }
}
console.log(a==1 && a==2 && a==3)//true

a={
    count:1,
    toString:function(){
        return this.count++;
    }
}
console.log(a==1 && a==2 && a==3)//true

//valueOf的调用优先级高于toString

let obj={
    valueOf(){
        console.log("valueOf")
    },
    toString(){
        console.log("toSting")
    }
}
console.log(obj=="uyuig");//valueOf
console.log(obj==1);//valueOf
console.log(obj==true);//valueOf
console.log(obj==[1,2]);
console.log(obj=={});

let obj1={
    toString(){
        console.log("toSting")
    }
}
console.log(obj1=="uyuig");//toSting
console.log(obj1==1);//toSting
console.log(obj1==true);//toSting
console.log(obj1==[1,2]);
console.log(obj1=={});

let obj2={
    toString(){
        console.log('obj2==true')
        return 1;
    }
}
console.log(obj2==true)