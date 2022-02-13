export class Point {
    x;
    y;
    linePoints = [];
    shapes = [];
    constructor(x, y){
        console.log("init");
        this.x = x;
        this.y = y;
        this.linePoints.push(this);
    }
    to_r(x, y, cornerRadius = 0){
        return this.to_p(
            new Point(
                this.x + x,
                this.y + y,
            ),
            cornerRadius,
        );
    }
    to_p(point, cornerRadius = 0){
        this.linePoints.push(point);
        return this;
    }
    to_a(x, y, cornerRadius = 0){
        this.linePoints.push(
            new Point(
                x, y,
            ),
            cornerRadius
        );
    }

    circle(radius){
        // this.svgContent = `${this.svgContent}<circle cx="${this.x}" cy="${this.y}" r="${radius}>`;
        this.shapes.push(
            {
                shapeName: "circle",
                cx: this.x, cy: this.y,
                r: radius,
            }
        );
        return this;
    }
    rect(width, height, cornerRadius){
        this.shapes.push(
            {
                shapeName: "rect",
                width: width,
                height: height,
                rx: cornerRadius,
            }
        );
        return this;
    }
    strokeLinePoints(svgDom, color, strokeWidth){
        console.log(this);
        let pathD = `M ${this.x},${this.y}`;
        let i = 0;
        for (let p of this.linePoints){
            if (i === 0) {
                i += 1;
                continue;
            }
            i += 1;
            pathD = `${pathD} L ${p.x}, ${p.y}`;
        }
        // console.log(pathD);
        svgDom.innerHTML = `<path d=\"${pathD}\" stroke=${color} stroke-width=${strokeWidth} fill="#00000000">`;
    }
    draw(svgDom, color, fill, strokeWidth){
        console.log(this.linePoints);
        if (this.linePoints.length > 1) this.strokeLinePoints(svgDom, color, strokeWidth);
        if (this.shapes.length > 0){
            console.log(this.shapes);
            for (const shape of this.shapes){
                const shapeName = shape["shapeName"];
                if (shapeName === "circle"){
                    svgDom.innerHTML = `${svgDom.innerHTML} <circle cy="${shape['cy']}" cx="${shape['cx']}" r="${shape['r']}" stroke="${color}" fill="${fill}" stroke-width="${strokeWidth}">`;
                } else if (shapeName === "rect"){
                    svgDom.innerHTML = `${svgDom.innerHTML} <rect x="${this.x}" y="${this.y}" width="${shape['width']}" height="${shape['height']}" rx="${shape['rx']}" stroke="${color}" fill="${fill}" stroke-width="${strokeWidth}">`;
                }
            }
        }
        this.linePoints = [];
        this.shapes = [];
    }
    stroke(svgDom, color, strokeWidth){
        this.draw(svgDom, color, "transparent", strokeWidth);
    }
    fill(svgDom, fill){
        this.draw(svgDom, "transparent", fill, 0);
    }
}
