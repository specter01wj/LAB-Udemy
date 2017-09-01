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
	},
	//The validate function is used to ensure that the attributes conform to the application requirements
	validate: function(attrs){
		if (attrs.name == ""){
			return "You must enter a book name"
		}
		if (attrs.author == ""){
			return "You must enter an author name"
		}
		if (attrs.year == ""){
			return "You must enter a publishing year"
		}
		if (attrs.year > 2015){
			return "The year value is incorrect"
		}
	}
});
 
//Instantiate a new myBook model from the base Book model. Set the attribute values later.
var myBook = new Book();

myBook.save(,{
	success: function(model,res,options){
		console.log("Update is successful");
	},
	error: function(model,res,options){
		// console.log("Update failed");
		console.log(res.responseText);
	}
});