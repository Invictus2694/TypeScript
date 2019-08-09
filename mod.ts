class x1{
    constructor(private arg1:string){

    }
    public getArg1():string{
        return this.arg1;
    }
};
class x2 extends x1{
    constructor(private arg2:string,private arg3:string){
        super(arg2);
    }
    public getArg2():string{
        return this.arg3;
    }
};
let obj1:x2 = new x2("hello","world");
console.log(obj1.getArg1());
console.log(obj1.getArg2());