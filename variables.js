var products = [
    { pid: 1, pname: 'nokia', pcost: 10000 },
    { pid: 2, pname: 'samsung', pcost: 20000 },
    { pid: 3, pname: 'htc', pcost: 30000 },
    { pid: 4, pname: 'apple', pcost: 40000 },
];
document.write("\n    <table border=\"1\" cellpadding=\"10px\" cellspacing=\"10px\" align=\"center\" style=\"font-size:20px\" >\n    <thead style=\"background-color:grey\">\n    <tr>\n    <td> S.No.</td>\n    <td> Product Id </td>\n    <td> Product Name </td>\n    <td> Product Cost </td>\n    </tr>\n    </thead>\n\n");
document.write("<tbody style=\"background-color:red\">");
products.forEach(function (element, index) {
    document.write("\n        <tr> \n        <td> " + (index + 1) + " </td>\n        <td> " + element.pid + "</td>\n        <td> " + element.pname + "</td>\n        <td> " + element.pcost + "</td>\n        </tr>\n\n    \n    ");
});
document.write("</tbody></table>");
var tuple1 = [10, "hello", true];
document.write("" + tuple1[1] + "<br>");
document.write(tuple1.length + "<br>");
var tuple2 = [];
tuple2 = ['hello', 1000, false];
document.write("<br> Length of tuple 2 is :" + tuple2.length + "<br>");
document.write("Tuple 2 data along with its index: <br>");
tuple2.forEach(function (element, index) {
    document.write(element + "---" + index + "<br>");
});
var obj = {
    sub_one: "Angular",
    sub_two: "Node Js",
    sub_three: "MongoDB"
};
for (var key in obj) {
    document.write(key + "<br>");
    document.write(obj[key] + "<br>");
}
;
var obj1 = {
    key1: "Oracle",
    key2: "MySQL",
    key3: "CassadaDB"
};
for (var temp in obj1) {
    document.write("<br>" + temp + " value: " + obj1[temp]);
}
;
var arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
document.write("<br>" + arr8.slice(5).concat(arr8.slice(0, 5)));
document.write("<br><br><br><br><br><br>");
var arr1 = [10, 20];
var arr2 = arr1.slice();
document.write("<br>" + arr1);
document.write("<br>" + arr2);
arr2.push(30);
arr2.unshift(0);
document.write("<br>" + arr1);
document.write("<br>" + arr2);
