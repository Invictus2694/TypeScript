var class_one = /** @class */ (function () {
    function class_one(sub_one, sub_two, sub_three) {
        this.sub_one = sub_one;
        this.sub_two = sub_two;
        this.sub_three = sub_three;
    }
    return class_one;
}());
var obj = new class_one("angular", "node", "mongo");
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
