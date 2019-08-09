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
    function c1(sub_one) {
        this.sub_one = sub_one;
    }
    c1.prototype.getSub_one = function () {
        return this.sub_one;
    };
    ;
    return c1;
}());
;
var c2 = /** @class */ (function (_super) {
    __extends(c2, _super);
    function c2(sub_two, sub_three) {
        var _this = _super.call(this, sub_two) || this;
        _this.sub_two = sub_two;
        _this.sub_three = sub_three;
        return _this;
    }
    ;
    c2.prototype.getSub_two = function () {
        return this.sub_three;
    };
    ;
    return c2;
}(c1));
;
var c3 = /** @class */ (function (_super) {
    __extends(c3, _super);
    function c3(para1, para2, para3) {
        var _this = _super.call(this, para1, para2) || this;
        _this.para1 = para1;
        _this.para2 = para2;
        _this.para3 = para3;
        return _this;
    }
    ;
    c3.prototype.getSub_three = function () {
        return this.para3;
    };
    ;
    return c3;
}(c2));
;
var obj = new c3('angular', 'nodejs', 'mongodb');
console.log(obj.getSub_one(), obj.getSub_two(), obj.getSub_three());
