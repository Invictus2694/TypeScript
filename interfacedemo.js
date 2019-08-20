;
function myfun(arg1, arg2) {
    console.log(arg1, arg2);
}
;
var obj = myfun;
myfun("hello", "hello");
function fun_one(arg3, arg4) {
    return arg3 + arg4;
}
var obj1 = fun_one;
console.log(obj1(2, 3));
function fun_two(arg5, arg6) {
    console.log(arg5);
    console.log(arg6);
}
var obj2 = fun_two;
obj2(5, 9);
