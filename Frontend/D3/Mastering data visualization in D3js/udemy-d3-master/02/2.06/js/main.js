/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.6 - Selections and data joins
*/

var data = [25, 20, 10, 12, 15];
var data2 = [[30,55], [50,55], [70,55], [90,55], [110,55]];

var svg = d3.select("#chart-area").append("svg")
    .attr("width", 400)
    .attr("height", 400);

var circles = svg.selectAll("circle")
    .data(data);

circles.enter()
    .append("circle")
        .attr("cx", function(d, i){
            return (i * 50) + 25;
        })
        .attr("cy", 25)
        .attr("r", function(d){
            return d;
        })
        .attr("fill", "red");

var line = svg.selectAll("line")
    .data(data2).enter()
    .append("line")
    .attr("x1", function(d, i){
        return d[0];
    })
    .attr("y1", function(d, i){
        return d[1];
    })
    .attr("x2", function(d, i){
        return d[0];
    })
    .attr("y2", function(d, i){
        return d[1] + 50 * (i + 1);
    })
    .attr("stroke", "brown")
    .attr("stroke-width", 5);


