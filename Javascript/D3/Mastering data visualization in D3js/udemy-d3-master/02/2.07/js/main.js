/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.7 - Loading external data
*/

d3.tsv("data/ages.tsv").then(function(data){
    data.forEach(function(d){
        d.age = +d.age;
        /*ParseInt() and + are different:
        parseInt("10.3456") // returns 10
        +"10.3456" // returns 10.3456*/
    });

    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 400)
        .attr("height", 400);

    var circles = svg.selectAll("circle")
        .data(data);

    circles.enter()
        .append("circle")
        .attr("cx", function(d, i){
            console.log(d);
            return (i * 50) + 25;
        })
        .attr("cy", 25)
        .attr("r", function(d){
            return d.age * 2;
        })
        .attr("fill", function(d){
            if (d.name == "Andrew") {
                return "blue";
            }
            else {
                return "red";
            }
        });
}).catch(function(error){
    console.log(error);
})
