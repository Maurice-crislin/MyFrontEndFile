//利用Proxy的特性，在外部对目标对象进行修改的时候来进行额外操作保证数据的不可变。
//在外部对目标对象进行修改的时候,我们可以将被修改的引用的那部分进行拷贝,这样既能保证效率又能保证可靠性.
  
// 浅拷贝函数
function shallowCopy(value) {
    if (Array.isArray(value)) return [...value];
    if (value.__proto__ === undefined)
        return Object.assign(Object.create(null), value);
    return Object.assign({}, value);
}
function clone(target,map=new WeakMap()){
    if(typeof target==='object'){
        if(map.has(target)){
            return map.get(target);
        } 
        let cloneObj=Array.isArray(target)?[]:{};
        map.set(target,cloneObj);
        for(let key in target){
            if(target.hasOwnProperty(key)){
                cloneObj[key]=clone(target[key],map);
            }
        }
        return cloneObj;//作为答案出口
    }else return target;
}


class CreateState{
    constructor(source){
        this.modified = false; // 是否被修改
        this.source = source; // 源对象
        this.copy = undefined; // 拷贝的对象
    }
    
    get(key){
        if (!this.modified) return this.source[key];
        return this.copy[key];
    }

    // 对于set操作,如果目标对象没被修改那么进行修改操作,否则修改拷贝对象
    set(key, value) {
        if (!this.modified) this.markChanged();
        return (this.copy[key] = value);
    }
  
    // 标记状态为已修改,并拷贝
    markChanged() {
        if (!this.modified) {
          this.modified = true;
          this.copy = clone(this.source);
        }
    }
}
const PROXY_STATE = Symbol('proxy-state');
const handler = {
    get(target, key) {
    //console.log(key)
    if (key === PROXY_STATE) return target;
    //console.log(target.get(key),key)
    return target.get(key)
    //return undefined;//target[key];
    },
    set(target, key, value) {
    console.log(key,value,target.set(key, value),target.get(key));
      return target.set(key, value);
    },
};



// 接受一个目标对象和一个操作目标对象的函数
function produce(state, producer) {
    const store = new CreateState(state);
    const proxy = new Proxy(store, handler);

    //producer(proxy);

    proxy.push({todo: 'Tweet about it', done: false});
    proxy.push({todo: 'Tweet about it', done: false});
    proxy.push({todo: 'Tweet about it', done: false});
    
    //draftState.pushEX({})
    //proxy[1].done = true;

    const newState =store;//proxy[PROXY_STATE];//对象取值
    //console.log(proxy.source);

    console.log(newState)//CreateState {modified: true, source: Array(2), copy: Array(3)}
    if (newState.modified) return newState.copy;
    return newState.source;
}


const baseState = [
    {
        todo: 'Learn typescript',
        done: true,
    },
    {
        todo: 'Try immer',
        done: false,
    },
];
  
const nextState = produce(baseState, draftState => {
    draftState.push({todo: 'Tweet about it', done: false});
    //draftState.pushEX({})
    draftState[1].done = true;
});

console.log(baseState, nextState);
  /*
  [ { todo: 'Learn typescript', done: true },
    { todo: 'Try immer', done: true } ] 
  
    [ { todo: 'Learn typescript', done: true ,
    { todo: 'Try immer', done: true },
    { todo: 'Tweet about it', done: false } ]
  */
  