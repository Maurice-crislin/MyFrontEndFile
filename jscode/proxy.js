const p=new Proxy({a:1},{
    get:function(target,property,receiver){
        console.log("receiver",receiver);
        if(property in target)return target[property];
        return 10;
    },
    set:function(target,property,value,receiver){
        target[property]=value;
        return true;
    },
    has:function(target,propoty){
        console.log(target, propoty);
        return true;
    }
}
)
console.log(p.x);//receiver Proxy {a: 1}   10
console.log(p.y);//receiver Proxy {a: 1}   10
p.z=112;
console.log(p.z)//receiver Proxy {a: 1, z: 112}  112


console.log('z' in p);//{a: 1, z: 112} 'z'  true
console.log('wuhuhu' in p);//{a: 1, z: 112} 'z'  true
