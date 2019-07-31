/*
*    main.js
*    Mastering Data Visualization with D3.js
*    3.2 - Linear scales
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    console.log(data);

    data.forEach(d => {
        d.height = +d.height;
    });

    var y = d3.scaleLinear()
        .domain([0, 828])
        .range([0, 200]);

    /*var y = d3.scaleLog()
        .domain([300, 150000])
        .range([0, 400])
        .base(10);*/

    /*var y = d3.scaleTime()
        .domain([new Date(2017, 8, 10), new Date(2019, 7, 21)])
        .range([0, 400]);*/

    /*var y = d3.scaleOrdinal()
        .domain(["A", "B", "C", "D", "E", "F"])
        .range(["RED", "ORANGE", "PURPLE"]);*/

    /*var y = d3.scaleOrdinal()
        .domain(["A", "B", "C", "D", "E", "F"])
        .range(d3.schemeCategory10);*/

    var rects = svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", function(d, i) {
            return i*20;
        })
        .attr("x", function(d, i){
            return (i * 60);
        })
        .attr("width", 40)
        .attr("height", function(d){
            return y(d.height);
        })
        .attr("fill", function(d) {
            if(d.name === "Shanghai Tower") {
                return "purple";
            } else {
                return "grey";
            }
        });
        
});



