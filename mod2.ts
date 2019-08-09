class newstatic {
    static variable="hello";
    static newfunction():string{
        return "world";
    }
};
console.log(newstatic.variable);
console.log(newstatic.newfunction());

class newreadonly{
    readonly wish1:string;
    constructor(private arg1:string){
        this.wish1=arg1;
    }
};
let obj:newreadonly=new newreadonly('hello');
console.log(obj.wish1);