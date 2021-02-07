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

var myBook = new Book();
/*myBook.on('change:name change:year', function (model) {
	console.log('the name has changed in model: ' + model.cid);
});*/
var secondBook = new Book();

function nameHandler(model){
	console.log('the name of book has changed');
}

function anotherNameHandler(model){
	console.log('another name handler');
}

/*
//----lecture 20
myBook.on('change:name change:year',nameHandler);
//myBook.on('change:name',nameHandler);
//myBook.on('change:name',anotherNameHandler);
myBook.once('change:name',anotherNameHandler);
//myBook.on('change:year',anotherNameHandler);
//myBook.set('year','2015');
//myBook.off('change:name', anotherNameHandler);
//myBook.off(null, anotherNameHandler);
//myBook.off();
myBook.set('name','The hunger game');
myBook.set('name','The hunger sucker');
//myBook.set('year','2010');
//secondBook.on('change:name', anotherNameHandler);
//secondBook.set('name','James Wang');
*/


/*
 //----lecture 21
var BookView = Backbone.View.extend({
	el: 'div',
	render: function(){
		console.log('this is the render function.');
	}
});

var myView = new BookView();

myView.listenTo(myBook, 'change:author', myView.render);
myBook.set('author','Jin Wang');
myView.stopListening(myBook);
myBook.set('author','King');*/

//----lecture 22
var BookView = Backbone.View.extend({
	el: 'div',
	render: function(payload){
		console.log('this is the render function. the payload is '+ payload.data);
	}
});

var myView = new BookView();
myView.listenTo(myBook, 'change:name', myView.render);
myBook.trigger('change:name', {data: 'this is payload'});

function customHandler(){
	console.log('we ran out of stock!');
}

Backbone.on('myBook:empty', customHandler);

myBook.on('change', function(){
	if(myBook.get('stock') == 0 && myBook.get('reserve') == 0){
		Backbone.trigger('myBook:empty',{});
	}
});

myBook.set('reserve', 0);
myBook.set('stock', 0);

 /*var secondNook = new Book();

function nameHandler(model){
	console.log("The name of the book has changed");
}

function anotherNameHandler(model){
	console.log("This is another name handler");
}

myBook.on("change:name",nameHandler);
myBook.on("change:name",anotherNameHandler);
myBook.on("change:year",anotherNameHandler);

myBook.set("year","The Hunger Games");

myBook.off("change:name",anotherNameHandler);
myBook.off();
myBook.set("name","The Hunger Games");
myBook.set("name","The Gambler");
myBook.set("year",2010);*/
