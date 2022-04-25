let line=read_line();
let [x,d,n]=line.split(' ').map((val)=>Number(val));
//076 923
//070 503
function fun(x,d,n){
    let dig=0,curStr='',curNumber=10,map=new Map();
    while(dig<d+n-1){
        if(curNumber<x){
            if(dig>d-2)curStr+='0';
            curNumber*=10;
        }else {
            if(dig>d-2){
                if(map.has(curNumber)){
                    curStr+=map.get(curNumber)
                }else{
                    map.set(curNumber,Math.floor(curNumber/x));
                    curStr+=map.get(curNumber);
                }         
            }else{
                if(!(map.has(curNumber))) map.set(curNumber,Math.floor(curNumber/x));
            }
            curNumber=curNumber%x*10;
        }
        dig++;
    }
    console.log(curStr)
}
fun(13,4,3)