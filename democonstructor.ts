class class_one{
    constructor(public sub_one:string,
                public sub_two:string,
                public sub_three:string){

    }
}
let obj:class_one=new class_one("angular","node","mongo");
console.log(obj.sub_one,obj.sub_two,obj.sub_three);