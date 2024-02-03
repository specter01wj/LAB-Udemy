/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

var margin = { left:80, right:20, top:50, bottom:100 };

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select("#chart-area")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom)
	.append("g")
		.attr("transform", "translate(" + margin.left + ", " + margin.top + ")");




d3.json("data/revenues.json").then(function(data) {

	data.forEach(function(d){
		d.revenue = +d.revenue;
	});

	var xAxis = d3.scaleBand()
		.domain(data.map(function(d) {
			return d.month;
		}))
		.range([0, width])
		.padding(0.3);

	var yAxis = d3.scaleLinear()
		.domain([0, d3.max(data, function(d) {
			return d.revenue;
		})])
		.range([height, 0]);

	var rects = svg.selectAll("rect")
		.data(data).enter()
		.append("rect")
			.attr("y", function(d) {
				return yAxis(d.revenue);
			})
			.attr("x", function(d) {
				return xAxis(d.month);
			})
			.attr("height", function(d){ 
				return height - yAxis(d.revenue); 
			})
            .attr("width", xAxis.bandwidth)
            .attr("fill", function(d) {
            	if(d.month === "March") {
            		return "purple";
            	} else {
            		return "green";
            	}
            });

    var xAxisCall = d3.axisBottom(xAxis);

    svg.append('g')
    	.attr("class", "x axis")
        .attr("transform", "translate(0," + height +")")
        .call(xAxisCall)
        .selectAll("text")
            .attr("y", "10")
            .attr("x", "-5")
            .attr("text-anchor", "end")
            .attr("transform", "rotate(-40)");

    var yAxisCall = d3.axisLeft(yAxis)
    	.ticks(5)
	    .tickFormat(function(d){
            return "$" + d;
        });
   	
   	svg.append("g")
        .attr("class", "y axis")
        .call(yAxisCall);

});


// X Label
svg.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Month");

// Y Label
svg.append("text")
    .attr("y", -60)
    .attr("x", -(height / 2))
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue");






