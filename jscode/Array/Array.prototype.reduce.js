let arr = [1,2,3,4,5,6];

let sum=arr.reduce((previousValue, currentValue, currentIndex, array)=>previousValue+currentValue,0)
console.log(sum);//21