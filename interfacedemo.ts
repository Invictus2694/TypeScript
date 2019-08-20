//normal interface with annonymous function....
interface interface1{
    (arg1,arg2):void;
};
function myfun(arg1,arg2):void{
    console.log(arg1,arg2);
};
let obj:interface1=myfun;
myfun("hello","hello");


//interface with annonymous function with strict typing...
interface interface2{
    (arg3:number,arg4:number):number;
}
function fun_one(arg3:number,arg4:number):number{
    return arg3+arg4;
}
let obj1:interface2=fun_one;
console.log(obj1(2,3));


//interface with annonymous function with generics...
interface interface3<a,b>{
    (arg5:a,arg6:b);
}
function fun_two<a,b>(arg5:a,arg6:b):void{
    console.log(arg5);
    console.log(arg6);
}
let obj2:interface3<number,number>=fun_two;
obj2(5,9);