class EventEmitter{
    constructor(){
        this.event={};
    }
    subscribe(type,callback){//订阅
        if(this.event[type]){
            this.event[type].push(callback);
        }else{
            this.event[type]=[callback];
        }
    }
    unsubscribe(type,callback){//取消订阅
        if(!this.event[type])return;
        this.event[type]=this.event[type].filter((val)=>val!=callback);
    }
    publish(type,...arg){//发布
        if(!this.event[type])return;
        this.event[type].forEach(callback=> {
            callback.apply(this.arg);
        });
    }
    once(type,callback){//执行一次
        let _this=this;
        function fn(){
            callback();
            console.log("this",this)//undifined
            _this.unsubscribe(type,fn);
        }
        this.subscribe(type,fn);
    }
}
let eventEmitter=new EventEmitter();
eventEmitter.once("click",function(){console.log("clicked")})
eventEmitter.publish("click");
eventEmitter.publish("click");
eventEmitter.publish("click");
let mouseDownFn=function(){console.log("mousedown")}
eventEmitter.subscribe("mousedown",mouseDownFn)
eventEmitter.publish("mousedown");
eventEmitter.unsubscribe("mousedown",mouseDownFn)
eventEmitter.publish("mousedown");