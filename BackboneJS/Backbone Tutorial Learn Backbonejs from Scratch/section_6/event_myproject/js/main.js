
//---Event project
var bus = _.extend({}, Backbone.Events);

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

var VehicleView = Backbone.View.extend({
    tagName: "li",

    className: "vehicle",

    events: {
        "click .delete": "onDelete"
    },

    onDelete: function(){
      this.remove();
    },

    render: function(){
        var source = $("#vehicleTemplate").html();
        var template = _.template(source);

        this.$el.html(template(this.model.toJSON()));
        this.$el.attr("data-color", this.model.get("color"));

        return this;
    }

});

var VehiclesView = Backbone.View.extend({
    tagName: "ul",

    id: "vehicles",
    
    initialize: function () {
        bus.on("newVehicle", this.onNewVehicle, this);
    },

    render: function(){
        this.collection.each(function(vehicle) {
            var vehicleView = new VehicleView({model: vehicle});
            this.$el.append(vehicleView.render().$el);
        }, this);

        return this;
    },

    onNewVehicle: function(registrationNumber){
        var car = new Car({registrationNumber: registrationNumber});
        var vehicleView = new VehicleView({model: car});
        this.$el.prepend(vehicleView.render().$el);
    }

});

var NewVehicleView = Backbone.View.extend({
    events: {
        "click .add": "onAdd"
    },

    onAdd: function(){
        var input = this.$el.find(".registration-number");
        var registrationNumber = input.val();
        bus.trigger("newVehicle", registrationNumber);
        input.val("");
    },

    render: function(){
        var source = $("#newVehicleTemplate").html();
        var template = _.template(source);

        this.$el.html(template());
        return this;
    }

});

var vehicles = new Vehicles([
    new Car({registrationNumber: "XLI887", color: "Blue"}),
    new Car({registrationNumber: "ZNP123", color: "Blue"}),
    new Car({registrationNumber: "XUV456", color: "Gray"})
]);

$("#container")
    .append(new NewVehicleView().render().$el)
    .append(new VehiclesView({collection: vehicles}).render().$el);
