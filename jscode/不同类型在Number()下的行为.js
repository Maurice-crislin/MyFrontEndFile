let a='23'<'3';//true
let b=false;
let c=[];
let d={
    valueOf:function(){
        return 998;
    }
}
console.log("Number(a)",Number(a))//1
console.log("Number(b)",Number(b))//0
console.log("Number(c)",Number(c))//0
console.log("Number(d)",Number(d))//998