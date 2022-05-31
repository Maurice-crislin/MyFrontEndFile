const bigNum = BigInt('23');
//console.log(Math.max(bigNum,Infinity));
//TypeError: Cannot convert a BigInt value to a number


console.log(BigInt.asIntN(7,bigNum));//23n
console.log(typeof BigInt.asIntN(7,bigNum));//bigint
console.log(typeof bigNum);//bigint