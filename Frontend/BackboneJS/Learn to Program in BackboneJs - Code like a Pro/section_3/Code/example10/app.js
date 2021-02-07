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
		this.on("remove",function(removedModel,models,options){
			console.log("We removed model at index " + options.index);
		})
	}
});

var myLibrary = new Library();

// myLibrary.add([{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},{name:"Lord of Flies",author:"William Goodwing",year:"1953"}]);

var sampleBook = new Book({
	name: "Sample Book",
	author: "Sample Author",
	year: "2003"
})

myLibrary.add(sampleBook);

myLibrary.push({name:"The Alchemist",author:"Paulo Coehlo",year:"1993"});

myLibrary.push({name:"Lord of Flies",author:"William Goodwing",year:"1953"});


console.log(myLibrary.models);

// otherModelsArray = [{
// 	name: "Book 1",
// 	author : "Author 1",
// 	year: "2001"
// 	},
// 	{
// 	name: "Book 2",
// 	author : "Author 2",
// 	year: "2002"
// 	},
// 	{
// 	name: "Book 3",
// 	author : "Author 3",
// 	year: "2003"
// 	},
// ];

updateArray = [
	{name: "New Sample Book",author: "Sample Author", year: "2010",cid:"c1"},
	{name: "The Alchemist (updated)",author: "Paulo Coehlo", year: "1993",cid:"c2"}
	// {name: "Lord of Flies (new edition)",author: "Paulo Coehlo", year: "2003",cid:"c3"},
];

myLibrary.set(updateArray,{remove:false});

console.log(myLibrary.models);








