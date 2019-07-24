/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/

var svg = d3.select("#chart-area")
	.append("svg")
	.attr("width", 400)
	.attr("height", 400);

var circle = svg.append("circle")
	.attr("cx", 50)
	.attr("cy", 50)
	.attr("r", 20)
	.attr("fill", "red");

var rectangle = svg.append("rect")
	.attr("x", 100)
	.attr("y", 50)
	.attr("width", 50)
	.attr("height", 50)
	.attr("fill", "green")
	.attr("stroke", "grey")
	.attr("stroke-width", "3px");

