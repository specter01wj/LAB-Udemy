//---lecuture 3
/*
var myBook = Backbone.Model.extend({
	title: "My Title",
	author: "Jin Wang",
	year: "1999",

	initialize: function(){
		console.log("This book is initialized!");
	}
});

var newBook = new myBook({
	title: "Harry Potter",
	author: "J K Rowling",
	year: "2000"
});

console.log("The title is " + newBook.get("title"));

//newBook.set("year", 1998);

console.log("The Book is " + newBook.get("year"));

//newBook.unset("year");*/

//----lecture 4
/*
var myBook = Backbone.Model.extend({
	initialize: function(){
		this.on('change', function(model, error){ //change:year
			console.log('The model has changed!');
		})
	},

	name: "My Title",
	author: "Jin Wang",
	year: "1999"

});

var newBook = new myBook({
	name: "Harry Potter",
	author: "J K Rowling",
	year: "2000"
});

newBook.set({'name': 'The animal farm'});
newBook.set({'year': '2009'}, {silent: true});

if (newBook.hasChanged('name')){
	console.log('the name changed!');
}

console.log(JSON.stringify(newBook.changed));*/

//----lecture 5
/*Book = Backbone.Model.extend({
	initialize: function(){
		this.on('invalid', function(model, error){
			console.log(error);
		})
	},

	validate: function(attrs){
		if (attrs.name == ''){
			return 'please enter a name';
		}
		if (attrs.author == ''){
			return 'please enter an author';
		}
		if (attrs.year > 2015){
			return 'please enter a valid year';
		}
	},

	defaults: {
		name: "My Title",
		author: "Jin Wang",
		year: "1999"
	}


});

var newBook = new Book();

//newBook.set({'name': ''}, {validate: true});
//newBook.set({'year': '2020'}, {validate: true});
newBook.set({'year': '2020'});
console.log('is this valid ' + newBook.isValid());*/

//---lecture 7
/*Book = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/books',

	initialize: function(){

	},

	defaults: {
		name: "My Title",
		author: "Jin Wang",
		year: "1999"
	},

	validate: function(attrs){
		if (attrs.name == ''){
			return 'please enter a name';
		}
		if (attrs.author == ''){
			return 'please enter an author';
		}
		if (attrs.year > 2015){
			return 'please enter a valid year';
		}
	}

});

var myBook = new Book();
myBook.set('name', 'King of flies');
myBook.save();*/

//----lecture 8
Book = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/books',

	initialize: function(){

	},

	defaults: {
		name: "My Title",
		author: "Jin Wang",
		year: "1999"
	}

});

var myBook = new Book();

/*myBook.set('id', '4');
myBook.set('name', 'A tale of two cities');
myBook.save();*/

/*myBook.set('id', '1');
myBook.fetch({
	success: function(model, res, options){
		console.log(model.get('name'));
	},
	error: function(err){
		console.log(err);
	}
});*/

myBook.set('id', '3');
myBook.destroy({
	success: function(){
		console.log('delete success!');
	},
	error: function(){
		console.log('del error!');
	}
});





