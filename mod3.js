var mod3 = /** @class */ (function () {
    function mod3() {
    }
    mod3.fun_one = function () {
        return new mod3();
    };
    /**
     * fun_two
 :string
 return "welcome";  */
    mod3.prototype.fun_two = function () {
        return "welcome";
    };
    return mod3;
}());
;
console.log(mod3.fun_one().fun_two());
