var arr=[1,2,3,[4,5],[6,[7,[8]]]]

function flatten(arr){
    let queue=[...arr],res=[],front;
    while(queue.length){
        front=queue.shift();
        if(Array.isArray(front)){//看queue的队头，是个数组，那就解构了再塞回queue头里。
            queue.unshift(...front);
        }else{
            res.push(front);//队头是普通元素，可以作为答案push入答案数组里了
        }
    }
    return res;
}
console.log(flatten(arr));//[1, 2, 3, 4, 5, 6, 7, 8]