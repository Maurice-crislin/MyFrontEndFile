var t = parseInt(readline());
while(line=readline()){
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    mySolution(a,b);
}
function mySolution(a,b){
    let count=0,sum=0,numStack=String(a).split('');
    for(let i=a;i<=b;i++){
        
        if(String(i-1).length==String(i).length){
                 sum+=1
        }else sum=Mysum(i);
        if(i%sum==1)count++;
    }
    console.log(count);
}
function Mysum(num){
    let sum=0;
    while(num!=0){
        sum+=num%10;
        num=Math.floor(num/10);
    }
    return sum;
}
function makeStack(num){
    let stack=[];
    while(num!=0){
        stack.push(num%10);
        num=Math.floor(num/10);
    }
    return stack;
}