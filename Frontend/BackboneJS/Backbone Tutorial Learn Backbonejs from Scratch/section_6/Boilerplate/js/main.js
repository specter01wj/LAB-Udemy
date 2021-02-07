
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.

//---lecture 33
var person = {
  name: "Mosh",
    walk: function(){
        this.trigger("walking", {
            speed: 1,
            startTime: "08:00"
        });
    }
};

_.extend(person, Backbone.Events);

person.on("walking", function(e){
    console.log("Person is walking!");
    console.log("Event Args", e);
});

/*person.once("walking", function(e){
    console.log("Person is walking!");
    console.log("Event Args", e);
});*/

//person.off("walking");
person.walk();
//person.walk();

