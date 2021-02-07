
//---Collection project
var Vehicle = Backbone.Model.extend({

    idAttribute: "registrationNumber",

    urlRoot: "/api/vehicles",

    validate: function(attrs) {
        if(!attrs.registrationNumber)
            return "Vehicle is not valid!";
    },

    start: function(){
        console.log("Vehicle started.");
    }
});

var Vehicles = Backbone.Collection.extend({
    Model: Vehicle
});

var Car = Vehicle.extend({
    start: function(){
        console.log("Car with registatration number " + this.get("registrationNumber") + " started.");
    }
});

var vehicles = new Vehicles([
    new Car({registrationNumber: "XLI887", color: "Blue"}),
    new Car({registrationNumber: "ZNP123", color: "Blue"}),
    new Car({registrationNumber: "XUV456", color: "Gray"})
]);

var blueCars = vehicles.where({color: "Blue"});
console.log("Blue cars", blueCars);

var carXLI = vehicles.findWhere({registrationNumber: "XLI887"});
console.log("Car with registration number XLI", carXLI);

vehicles.remove(carXLI);
console.log("Vehicles as JSON", vehicles.toJSON());
