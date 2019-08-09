var abc = [1, 2, 3, 4];
var xyz = abc.slice();
document.write("<br><br>" + xyz);
xyz.push(5);
xyz.unshift(0);
document.write("<br>" + abc);
document.write("<br>" + xyz);
document.write("<br>" +
    abc.map(function (element, index) {
        return "<br>$" + element;
    }));
var doc = ['one', 'two', 'three', 'four'];
document.write("<br>" +
    abc.map(function (element, index) {
        return [element, doc[index]];
    }));
document.write("<br>" +
    abc.reduce(function (num1, num2) {
        return num1 + num2;
    }));
document.write("<br>" +
    doc.reduceRight(function (a, b) {
        return a + "" + b;
    }));
