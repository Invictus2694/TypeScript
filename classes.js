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
var c1 = /** @class */ (function () {
    function c1(arg1) {
        this.arg1 = arg1;
        this.text = arg1;
    }
    ;
    c1.prototype.getWish = function () {
        return this.text;
    };
    ;
    return c1;
}());
;
var c2 = /** @class */ (function (_super) {
    __extends(c2, _super);
    function c2() {
        return _super.call(this, "this is an example of a class") || this;
    }
    ;
    return c2;
}(c1));
;
var obj = new c2();
console.log(obj.getWish());
