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
	url: "http://localhost:8080/books/"
});

var myLibrary = new Library();

var LibraryView = Backbone.View.extend({
	collection: myLibrary,
	el: "ul",
	id: "book-list",
	initialize: function(){
		this.render();
	},
	events: {
		"click li" : function(){
			alert("You clicked me");
		}
	},
	template: _.template($("#books-template").html()),
	render: function(){
		var self = this;
		var output = self.template({'library':self.collection.toJSON()});
		this.$el.append(output);
		return self;
	}
})

myLibrary.fetch({success:function(){
	var myView = new LibraryView();
}})