//first example(generics with void return type)
function fun_one(arg1) {
    console.log(typeof (arg1));
}
;
fun_one(1);
//second example(generics with generic return type)
function fun_two(arg2) {
    return arg2;
}
console.log(fun_two('Hello World'));
//third example(generic array with generic array return type)
function fun_three(arg3) {
    return arg3;
}
;
console.log(fun_three([10, 20, 30, 40, 50]));
