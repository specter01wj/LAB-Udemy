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
var count = 5;
count = 'a';
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a'];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgourndColor = Color.Green;
console.log(backgourndColor);
