class c1{
    private text:string;
    constructor(private arg1:string){
        this.text=arg1;
    };
    public getWish():string{
        return this.text;
    };
};
class c2 extends c1{
    constructor(){
        super("this is an example of a class");
    };
};
let obj:c2= new c2();
console.log(obj.getWish());