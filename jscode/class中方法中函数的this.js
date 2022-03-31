class Test{
    run(){
        console.log("run-this",this)//Test {}
        function fn(){
            console.log("run-fn-this",this);//undefined
        }
        fn();
    }
    static stand(){
        console.log("stand-this",this)
        // class Test{
        //     run(){
        //         console.log("run-this",this)//Test {}
        //         function fn(){
        //             console.log("run-fn-this",this);//undefined
        //         }
        //         fn();
        //     }
        //     static stand(){
        //        …
        function fn(){
            console.log("stand-fn-this",this);//undefined
        }
        fn();
    }
}
let test=new Test();
test.run()


Test.stand()