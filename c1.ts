class c1{
    constructor(private sub_one:string){}
    public getSub_one():string{
        return this.sub_one;
    };
};
class c2 extends c1{
    constructor(private sub_two:string,private sub_three:string){
    super(sub_two);
    };
    public getSub_two():string{
        return this.sub_three;
    };
};
class c3 extends c2{
    constructor(private para1:string,
                private para2:string,
                private para3:string){
                    super(para1,para2);
                };
                public getSub_three():string{
                    return this.para3;
                };
};
let obj:c3=new c3('angular','nodejs','mongodb');
console.log(obj.getSub_one(),obj.getSub_two(),obj.getSub_three());