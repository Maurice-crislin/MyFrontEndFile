class Test{
    static statica(){
        this.staticb()//static b
        console.log("static a");//static a
    }
    static staticb(){
        console.log("static b");
    }
    static printThis(){
        console.log(this);
        // class Test{
        //     static statica(){
        //         this.staticb()//static b
        //         console.log("static a");//static a
        //     }
        //     static staticb(){
        //         console.log("static b");
        //     }
        //     static printThis(){
        //     …
    }
    c(){
        Test.statica();
        //static b
        //static a
        this.constructor.staticb();//static b
    }
}
Test.statica();
let test=new Test();
test.c();

class Child extends Test{
    
}
let child=new Child();
console.log(child)