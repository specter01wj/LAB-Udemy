Book = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/books/",	
	initialize: function(){
		//Define a listener for invalid model detection. The error parameter is passed to the function
		this.on("invalid",function(model,error){
			console.log(error);
		});
	},
	//The defaults are the initial values of your attributes until they are changed by the new model
	defaults: {
		name: 'Book title',
		author: 'No one',
		year: ""
	}
});

var Library = Backbone.Collection.extend({
	model:Book,
	initialize: function(){
		//Here you can add your event listeners
	}
});

var myLibrary = new Library();

// myLibrary.add([{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},{name:"Lord of Flies",author:"William Goodwing",year:"1953"}]);
myLibrary.push({name:"The Alchemist",author:"Paulo Coehlo",year:"1993"});

myLibrary.unshift({name:"Lord of Flies",author:"William Goodwing",year:"1953"});

myLibrary.add({name:"Lord of Flies",author:"William Goodwing",year:"1955",cid:"c2"},{merge:true});

console.log(myLibrary.models);