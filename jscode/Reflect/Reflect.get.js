// Object
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1

// Array
Reflect.get(["zero", "one"], 1); // "one"

// Proxy with a get handler

var x = {p: 1};
var obj = new Proxy(x, {
  get(t, k, r) { console.log(t,k,r,this);return k + "bar"; }
});

//t   { p: 1 } 
//k    foo 
//r    { receiver: 'wuuh' } 
//this  { get: [Function: get] }
Reflect.get(obj, "foo",{receiver:"wuuh"}); // "foobar"