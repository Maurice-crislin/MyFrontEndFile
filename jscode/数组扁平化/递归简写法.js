var arr=[1,2,3,[4,5],[6,[7,[8]]]]

function flatten(arr){
    return arr.reduce((res,curItem)=>Array.isArray(curItem)?[...res,...flatten(curItem)]:[...res,curItem],[]);
}
console.log(flatten(arr));//[1, 2, 3, 4, 5, 6, 7, 8]