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

var myBook = new Book({"id":1});



var LibraryRouter = Backbone.Router.extend({
	routes: {
		"book/:author(/:year)" : "displaybook",
		"books/book:id"	: "displaySingleBook",
		"books/*path"	: "displayArbitrary",
		"":"homepage",
		"*default":"defaultRoute"
	},
	homepage: function(){
		console.log("Yo reached the homepage of the application");
	},
	defaultRoute: function(){
		console.log("The page you are looking for could not be found");
	},
	displaybook: function(author,year){
		if (year != null)
			console.log("Displaying books for author: " + author + "in the year: " + year);
		else
			console.log("Displaying books for author: " + author);
	},
	displaySingleBook: function(id){
		// console.log("Displaying book with ID: " + id);
		myBook.set("id",id);
		myView.render();
	},
	displayArbitrary: function(path){
		path = path.split("/");
		console.log("First segment is " + path[0] + " and second one is " + path[1]);
	}
});

var router = new LibraryRouter();

var LibraryView = Backbone.View.extend({
	el: "div",
	id: "book",
	initialize: function(options){
		this.model = myBook;
		this.render();
	},
	events: {
		"click button" : function(e){
			current_book = this.model.get("id");
			var next_book = 0;
			if (e.currentTarget.id == "next"){
				next_book = current_book == 4 ? 1 : current_book + 1;
			} else {
				next_book = current_book == 1 ? 4 : current_book - 1;
			}
			// this.model.set("id",next_book);
			// this.render();
			console.log("Current " + current_book + "Next " + next_book);
			router.navigate("books/book" + next_book, {trigger:true});
		}
	},
	template: _.template($("#book-template").html()),
	render: function(){
		var self = this;
		self.model.fetch({success:function(){
			var output = self.template({'book':self.model.toJSON()});
			self.$el.html(output);
		}});
		return self;
	}
});

var myView = new LibraryView();
// router.on("route:displaySingleBook",function(page){
// 	alert("Book route reached");
// });


Backbone.history.start();
