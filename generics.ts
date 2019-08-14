//first example(generics with void return type)

function fun_one<g>(arg1:g):void{
    console.log(typeof(arg1));
};
fun_one<number>(1);





//second example(generics with generic return type)

function fun_two<h>(arg2:h):h{
    return arg2;
}
console.log(fun_two<string>('Hello World'));




//third example(generic array with generic array return type)

function fun_three<i>(arg3:i[]):i[]{
    return arg3;
};
console.log(fun_three<number>([10,20,30,40,50]));




