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
var x1 = /** @class */ (function () {
    function x1(arg1) {
        this.arg1 = arg1;
    }
    x1.prototype.getArg1 = function () {
        return this.arg1;
    };
    return x1;
}());
;
var x2 = /** @class */ (function (_super) {
    __extends(x2, _super);
    function x2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return x2;
}(/** @class */ (function () {
    function x1(arg2, arg3) {
        _this = _super.call(this, arg2) || this;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    x1.prototype.getArg2 = function () {
        return this.arg3;
    };
    return x1;
}())));
