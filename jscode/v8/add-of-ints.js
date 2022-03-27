function add(obj) {
    return obj.prop + obj.prop;
}

const length = 1000 * 1000;

const o = { prop: 1 };

for (let i = 0; i < length; i++) {
    add(o);

}


let point = {};

DebugPrint(point);

point.x = 100;

DebugPrint(point);

point.y = 200;

DebugPrint(point);