/*function log(message) {
    console.log(message);
}

var message = 'James Wang';

log(message);*/
// Declare variables
/*function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Final: ' + i);
}

function doSomething2() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }

    console.log('Final: ' + i);
}

doSomething();*/
// Types
/*let count = 5;
// count = 'a';

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1,true, 'a'];

enum Color { Red, Green, Blue};
let backgourndColor = Color.Blue;
console.log(backgourndColor);*/
// Type Assertions
/*let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let endsWithC2 = (message as string).endsWith('c');
console.log(endsWithC);
console.log(endsWithC2);*/
// Arrow Functions
/*let log1 = function(message) {
    console.log(message);
}

let log2 = (message) => {
    console.log(message);
}

log1('Hello');
log2('World');*/
// Interfaces
/*interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {
    console.log(point.x * point.y);
}

drawPoint({
    x: 3,
    y: 12
});*/
// Classes
/*class Point {
    x: number;
    y: number;

    draw() {

    }

    getDistance(another: Point) {

    }

}*/
// Objects
/*class Point {
    x: number;
    y: number;

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

    getDistance(another: Point) {
        
    }

}

let point: Point = new Point();
point.x = 3;
point.y = 12;
point.draw();*/
// Constructors
/*class Point {
    x: number;
    y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    draw() {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    }

}

let point: Point = new Point(3, 12);
point.draw();*/
// Access Modifiers
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    return Point;
}());
var point = new Point(3, 12);
point.draw();
// Access Modifiers in Constructor Parameters
