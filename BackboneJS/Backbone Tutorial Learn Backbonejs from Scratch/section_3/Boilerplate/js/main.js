
// In the first few sections, we do all the coding here.
// Later, you'll see how to organize your code into separate
// files and modules.
//----lecture 11
/*var Song = Backbone.Model.extend({
   initialize: function(){
       console.log("A new song!!!");
   }
});

var song = new Song();*/

//----lecture 12
/*var person = {};

person.name = "Mosh";

console.log(person.name);*/

/*var Song = Backbone.Model.extend({
    defaults: {
        genre: "Jazz"
    }
});
var song = new Song({
    title: "Blue in Green",
    artist: "James Wang",
    publishYear: 1996
});*/
/*song.set("title", "Red in Green");
song.set({
    artist: "Mike Wang",
    publishYear: 1936
});*/
/*song.set("title", "Red");
var title = song.get("title");
var hasTitle = song.has("title");
song.unset("title");
song.clear();*/


//---lecture 13
/*var Song = Backbone.Model.extend({
   validate: function(attrs){
       if (!attrs.title)
            return "Title is required!";
   }
});

var song = new Song();
song.isValid();
var lastError = song.validationError;
song.set("title", "RED");
song.isValid();*/

//---lecture 14
var Animal = Backbone.Model.extend({
    walk: function(){
        console.log("Animal walking....");
    }
});

/*var Dog = Animal.extend();
var dog = new Dog();
dog.walk();*/

var Dog = Animal.extend({
    walk: function(){
        //Animal.prototype.walk.apply(this);
        console.log("Dog walk!");
    }
});
var dog = new Dog();
dog.walk();
