const arr = [
    {id: 1, name: '部门1', pid: 0},
    {id: 2, name: '部门2', pid: 1},
    {id: 3, name: '部门3', pid: 1},
    {id: 4, name: '部门4', pid: 3},
    {id: 5, name: '部门5', pid: 4},
  ]
let root=(arr.filter((item)=>item.pid==0))[0];

function listToTree(root){
    root.children=[];
    for(let item of arr){
        if(item.pid==root.id){
            listToTree(item);
            root.children.push(item);
        }
    }
    return root;
}
let tree=listToTree(root);
console.log(tree)
function TreeToList1(tree, list=[]){
    list.push(tree);
    if(tree.children&&tree.children.length!=0){
        tree.children.forEach((item)=>{
            TreeToList1(item,list);
        })
        
    }
    delete tree.children;
    return list;
}

//console.log(TreeToList1(tree));

function TreeToList2(tree,list=[]){
    let stack=[],len=0,curItem=null;
    stack.push(tree);
    while(stack.length!=0){
        len=stack.length;
        while(len-->0){
            curItem=stack.pop()
            list.push(curItem);
            if (curItem.children && curItem.children.length) {
                stack.push(...curItem.children);
            }
            delete curItem.children;
        }
    }
    return list;
}

console.log(TreeToList2(tree));


// [0,'a',1,'b',2,'c',3,'d',2,'e',1,'ff']

// obj={
//     'a':{
//         'b':{
//             'c':{
//                 'd':null
//             },
//             'e':null,
//         },
//         'ff':null
//     }
// }

// [0, 'a', 2, 'b']