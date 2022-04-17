Object.defineProperty(window,"temp",{
    value:"wuhuh",
    writable: false
})

console.log(temp);
temp="aaa"//静默失败
// (it would throw in strict mode,
// even if the value had been the same)
console.log(temp)