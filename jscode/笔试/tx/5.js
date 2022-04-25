//拖动排序
// a,1
// b,3
// c,6
// d,8
// e,9
// f,19
// a,f,0
//将a拖动到f之后
// b,1
// c,3
// d,6
// e,8
// f,9
// a,19


// a,1
// b,3
// c,6
// d,8
// e,9
// f,19
// e,a,b
//将e拖动到a b之间
// a,1
// e,3
// b,6
// c,8
// d,9
// f,19

mySolution()
function mySolution(){
    let id=[],sort=[],line,lines,rangeId1='',rangeId2='',target='';
    while(line=readline()){
        lines = line.split(",");
        if(lines.length==2){
            id.push(lines[0]);
            sort.push(lines[1]); 
        }else{
            target=lines[0]
            rangeId1=lines[1];
            rangeId2=lines[2];
        }
        
    }
    //console.log(id);
    id=id.filter((item)=>item!=target);
    if(rangeId1!='0'&&rangeId2!='0'){
        let index=0;
        for(let i=0;i<id.length;i++){
            if(id[i]==rangeId1){
                index=i;
            }
        }
        id=[...id.slice(0,index+1),target,...id.slice(index+1)]
    }else{
        if(rangeId1=='0')id.unshift(target);
        else id.push(target);
    }
    
    //console.log(id);
    for(let i=0;i<id.length;i++){
        console.log(id[i]+','+sort[i]);
    }
}