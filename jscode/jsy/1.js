// let line=read_line();
let line = gets(10000).trim();
print(line.length);
function uni(str){
    str=str.split(' ');
    let lastStr='',curStr='',list=[],index=0;
    for(let i=0;i<str.length;i++){
        curStr=str[i];
        if(i==0){list.push(curStr);lastStr=curStr;continue;}
        if(curStr.length!=lastStr.length){list.push(curStr);lastStr=curStr;continue;}
        index=0;
        while(index<curStr.length){
            if(curStr[index].toLowerCase().charCodeAt()!==lastStr[index].toLowerCase().charCodeAt()){
                list.push(curStr);lastStr=curStr;continue;
            }
            index++;
        }
    }
    return list.join(' ');
}
console.log(uni(line))