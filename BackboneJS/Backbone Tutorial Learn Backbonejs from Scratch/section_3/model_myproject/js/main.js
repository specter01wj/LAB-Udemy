
//---Model project
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

var Car = Vehicle.extend({
    start: function(){
        console.log("Car with registatration number " + this.get("registrationNumber") + " started.");
    }
});

var car = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});

car.unset("registrationNumber");

if(!car.isValid())
    console.log(car.validationError);

car.set("registrationNumber", "XLI887");

if(!car.isValid())
    console.log(car.validationError);

car.start();
