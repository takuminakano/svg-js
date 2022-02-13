# SVG-js

Create svg with javascript.

## Usage
```js
const p1 = new Point(10, 10);
const svgDom = document.getElementById("svg-dom");
p1
    .to_r(10, 10, 0)
    .to_r(-10, 0, 0)
    .stroke(svgDom, "red", 3);

p1.circle(10).stroke(document.getElementById("svg-dom"), "red", 3);
```
