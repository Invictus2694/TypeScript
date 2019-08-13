//ex-1 simple demostration of abstract class
/*abstract class class_one{
    public fun_one():string{
        return "This is from function one..!"
    };
    public abstract fun_two():string;
}
class class_two extends class_one{
    public fun_two():string{
        return "This is from function two";
    };
};
let obj:class_two= new class_two();
console.log(obj.fun_one(),obj.fun_two());
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//ex-2 second simple demostration of abstract class
var class_one = /** @class */ (function () {
    function class_one() {
    }
    return class_one;
}());
;
var class_two = /** @class */ (function (_super) {
    __extends(class_two, _super);
    function class_two() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_two.prototype.fun_one = function () {
        return "this is from class_two which is abstract class";
    };
    ;
    return class_two;
}(class_one));
;
var class_three = /** @class */ (function (_super) {
    __extends(class_three, _super);
    function class_three() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_three.prototype.fun_two = function () {
        return "this is from class three which is a normal sub class";
    };
    ;
    return class_three;
}(class_two));
;
var obj = new class_three();
console.log(obj.fun_one(), obj.fun_two());
var a1 = /** @class */ (function () {
    function a1() {
    }
    return a1;
}());
;
var a2 = /** @class */ (function (_super) {
    __extends(a2, _super);
    function a2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return a2;
}(a1));
;
var a3 = /** @class */ (function (_super) {
    __extends(a3, _super);
    function a3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return a3;
}(a2));
;
var a4 = /** @class */ (function (_super) {
    __extends(a4, _super);
    function a4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sub1 = "Angular";
        _this.sub2 = "mongo";
        _this.sub3 = "node";
        return _this;
    }
    return a4;
}(a3));
var ob = new a4();
console.log(ob.sub1, ob.sub2, ob.sub3);
;
var c1 = /** @class */ (function () {
    function c1() {
    }
    c1.prototype.mean = function () {
        return "\nThis is from MEAN Stack...!!";
    };
    ;
    return c1;
}());
;
var c2 = /** @class */ (function (_super) {
    __extends(c2, _super);
    function c2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return c2;
}(c1));
;
var c3 = /** @class */ (function (_super) {
    __extends(c3, _super);
    function c3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    c3.prototype.mern = function () {
        return "\nThis is from MERN Stack....!!";
    };
    c3.prototype.mevn = function () {
        return "\nThis is from the MEVN Stack....!!";
    };
    return c3;
}(c2));
;
var ob1 = new c3();
console.log(ob1.mean(), ob1.mern(), ob1.mevn());
