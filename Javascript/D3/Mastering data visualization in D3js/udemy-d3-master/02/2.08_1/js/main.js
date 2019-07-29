/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "400")
    .attr("height", "400");

d3.json("data/buildings.json").then(function(data){
    
    data.forEach(function(d) {
        d.height = +d.height;
    });

    var rects = svg.selectAll("rect")
        .data(data).enter()
        .append("rect")
        .attr("y", 0)
        .attr("x", function(d, i){
            return (i * 60);
        })
        .attr("width", 40)
        .attr("height", function(d){
            return d.height * 1.25;
        })
        .attr("fill", function(d) {
            if(d.name === "Shanghai Tower") {
                return "purple";
            } else {
               return "grey"; 
           }
        });












        

})