import { Point } from './points.js';
const p1 = new Point(10, 10);
const p2 = new Point(20, 50);
p1.to_r(50, 0, 2)
.to_r(10, 90, 2)
.stroke(document.getElementById("svg-1"), "#FF0000", 2, );
p1.circle(10).stroke(document.getElementById("svg-1"), "#00FF00", 2);
const svgDom = document.getElementById("svg-1");
p2
    .rect(30, 10, 0)
    .stroke(
        document.getElementById("svg-1"), "#0000FF", 1
    );
// console.log("ok");
