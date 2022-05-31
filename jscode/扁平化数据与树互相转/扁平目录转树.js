//对象字符串转化成树形结构
let strarr = {
   'a-b-c-d':1,
   'a-b-c-e':2,
   'a-b-f':3,
   'a-j':4
  }
//   let obj = {
//    a:{
//     b:{
//      c:{
//       d:1,
//       e:2
//      },
//      f:3
//     },
//     j:4
//    }
//   }


function test(){
  let obj={};
  if(arr.length>=2){
      obj={
          [arr[arr.length-2]]:arr[arr.length-1]
      }
  }
  for(let i=arr.length-3;i>=0;i--){
      obj={
          [arr[i]]:obj
      }
  }
  return obj;
}

function listToTree(strArr){
   // 1.记录根位置
   let destList = []
   for(let path in strArr){
     // 2.待匹配项
     let pathList = path.split('-')
     // 3.将移动指针重置顶层，确保每次从根检索匹配（必须！！！）
     let levelList = destList
     // 4.遍历待询节点
     for (let name of pathList) {
       // 5.同层同名节点查找匹配
       let obj = levelList.find(item => item.name == name)
       // 6.若不存在则建立该节点
       console.log(levelList)
       if (!obj) {
         obj = { name, children: [] }
         levelList.push(obj)
         // 7.若当前被增节点是叶子节点，则裁剪该节点子节点属性
         if (name == pathList[pathList.length - 1]) {
           delete obj.children
         }
         
       }
       // 8.已有则进入下一层，继续寻找
       levelList = obj.children
     }
   }
   return destList
 
}

console.log(listToTree(strarr));