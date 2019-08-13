var Subjects;
(function (Subjects) {
    Subjects["sub_one"] = "Angular";
    Subjects["sub_two"] = "Node";
    Subjects["sub_three"] = "Mongo";
})(Subjects || (Subjects = {}));
console.log(Subjects.sub_one, Subjects.sub_two, Subjects.sub_three);
var colors;
(function (colors) {
    colors[colors["Angular"] = 0] = "Angular";
    colors[colors["Mongo"] = 1] = "Mongo";
    colors[colors["Node"] = 2] = "Node";
})(colors || (colors = {}));
console.log(colors.Angular, colors.Mongo, colors.Node);
var states;
(function (states) {
    states[states["up"] = 32] = "up";
    states[states["tn"] = 3] = "tn";
    states[states["ts"] = 12] = "ts";
})(states || (states = {}));
console.log(states['up'], states['ts'], states['tn']);
