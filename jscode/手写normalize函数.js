// 示例一:
//'abc' --> {value: 'abc'}
// 示例二：
//'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

let str1='[abc[bcd[def]]]';
let str2='dfhrth';
let str3='[ahg[xs][def]]'
//实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
function normalize(str) {
    const stack = [];
    let res = {};
  
    for (let c of str) {
      if (c === ']') {
        let value = [];
        let top = stack.pop();
  
        while (top !== '[') {
          value.unshift(top);
          top = stack.pop();
        }
  
        if (res.value) {
          res.children = { ...res };
        }
        res.value = value.join('');
        continue;
      }
      stack.push(c);
    }
  
    if (stack.length) {
      res.value = stack.join('');
    }
  
    return res;
}

console.log(normalize(str1),normalize(str3));

//'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
function myNormalize(str){
    let obj={},stack=[];
    for(let i=0;i<str.length;i++){
      if(str[i]!=']'){stack.push(str[i]);continue;}
      
      //str[i]是]
      let curValue='',t=stack.pop();
      while(t!='['){
        curValue=t+curValue;
        t=stack.pop();
      }
      if(!(obj.value)&&!(obj.children)){//最开始的obj是空对象，当下value是末节点
        obj.value=curValue;
        continue;
      }
      obj.children={...obj};
      obj.value=curValue;
    }
    return obj;
}

console.log(myNormalize(str1),myNormalize(str3));