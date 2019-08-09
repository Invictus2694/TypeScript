var newstatic = /** @class */ (function () {
    function newstatic() {
    }
    newstatic.newfunction = function () {
        return "world";
    };
    newstatic.variable = "hello";
    return newstatic;
}());
;
console.log(newstatic.variable);
console.log(newstatic.newfunction());
var newreadonly = /** @class */ (function () {
    function newreadonly(arg1) {
        this.arg1 = arg1;
        this.wish1 = arg1;
    }
    return newreadonly;
}());
;
var obj = new newreadonly('hello');
console.log(obj.wish1);
