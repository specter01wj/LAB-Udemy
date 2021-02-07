/*
*    main.js
*    Mastering Data Visualization with D3.js
*    5.6 - Making our chart dynamic
*/

var margin = { left:80, right:20, top:50, bottom:100 };

var width = 600 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var flag = true;
    
var g = d3.select("#chart-area")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + ", " + margin.top + ")");

var xAxisGroup = g.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height +")");

var yAxisGroup = g.append("g")
    .attr("class", "y axis");

// X Scale
var x = d3.scaleBand()
    .range([0, width])
    .padding(0.2);

// Y Scale
var y = d3.scaleLinear()
    .range([height, 0]);

// X Label
g.append("text")
    .attr("y", height + 50)
    .attr("x", width / 2)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Month");

// Y Label
var yLabel = g.append("text")
    .attr("y", -60)
    .attr("x", -(height / 2))
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Revenue");

d3.json("data/revenues.json").then(function(data){
    // console.log(data);

    // Clean data
    data.forEach(function(d) {
        d.revenue = +d.revenue;
        d.profit = +d.profit;
    });

    d3.interval(function(){
        update(data)
        flag = !flag
    }, 1000);

    // Run the vis for the first time
    update(data);
});

function update(data) {
    var value = flag ? "revenue" : "profit";

    x.domain(data.map(function(d){ return d.month }));
    y.domain([0, d3.max(data, function(d) { return d[value] })])

    // X Axis
    var xAxisCall = d3.axisBottom(x);
    xAxisGroup.call(xAxisCall);;

    // Y Axis
    var yAxisCall = d3.axisLeft(y)
        .tickFormat(function(d){ return "$" + d; });
    yAxisGroup.call(yAxisCall);

    // JOIN new data with old elements.
    var rects = g.selectAll("rect")
        .data(data);

    // EXIT old elements not present in new data.
    rects.exit().remove();

    // UPDATE old elements present in new data.
    rects
        .attr("y", function(d){ return y(d[value]); })
        .attr("x", function(d){ return x(d.month) })
        .attr("height", function(d){ return height - y(d[value]); })
        .attr("width", x.bandwidth);

    // ENTER new elements present in new data.
    rects.enter()
        .append("rect")
            .attr("y", function(d){ return y(d[value]); })
            .attr("x", function(d){ return x(d.month) })
            .attr("height", function(d){ return height - y(d[value]); })
            .attr("width", x.bandwidth)
            .attr("fill", "grey");

    var label = flag ? "Revenue" : "Profit";
    yLabel.text(label);

}

