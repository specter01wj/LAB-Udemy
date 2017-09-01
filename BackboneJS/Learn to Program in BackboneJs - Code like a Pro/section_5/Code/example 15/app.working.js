Book = Backbone.Model.extend({
	urlRoot: "http://localhost:8080/books/",
	initialize: function(){
		//Define a listener for invalid model detection. The error parameter is passed to the function
		this.on("invalid",function(model,error){
			console.log(error);
		});
		this.on("change",function(model,error){
			// myView.render();
		})
	},
	//The defaults are the initial values of your attributes until they are changed by the new model
	defaults: {
		name: 'Book title',
		author: 'No one',
		year: ""
	}
});
var appModel = new Book();
appModel.set({"id":1});

var LibararyView = Backbone.View.extend({
	initialize: function(options){
		this.model = options.model;

		// this.render();
	},
	events: {
		"click button" : "navigate",
	},
	navigate: function(e){
		var self = this;
		current_id = self.model.get("id");
		var next_id = 0;
		if (e.currentTarget.id == "next"){
			next_id = current_id == 4 ? 1 : current_id + 1;
		} else if (e.currentTarget.id == "previous"){
				next_id = current_id == 1 ? 4 : current_id - 1;
		}
		self.model.set({"id":next_id});
		router.navigate("book/" + next_id,{trigger:true});
		// self.model.fetch({
		// 	success:function(){
		// 		self.render();
		// 	}
		// });
	},
	el: 'div',
	id: 'book',
	template: _.template($("#book-template").html()),
	render  : function(){
		// console.log("Render called");
		var self = this;
		output   = self.template({"current_book":self.model.toJSON()});
		self.$el.html(output);
		// console.log(self.$el);
		return self;
	}
})

// var Library = Backbone.Collection.extend({
// 	model     :Book,
// 	url       : "http://localhost:8080/books/",
// 	initialize: function(){
// 		this.on("remove",function(removedModel,models,options){
// 			console.log("We removed model at index " + options.index);
// 		})
// 	}
// });
// appModel.fetch({success:function(){
// 	var myView = new LibararyView({model:appModel});
// }});
// var myLibrary = new Library();

var LibraryRouter = Backbone.Router.extend({
	routes: {
		"book/:id" : "displayBook",
		"hello"		 : "displayHello"
	},
	displayBook: function(id){
		appModel.set("id",id);
		// console.log(appModel);
		appModel.fetch({
			success: function(){
				myView.model = appModel;
				myView.render();
			}
		});
	},
	displayHello: function(){
		console.log("Hello route reached");
	}
});


var router = new LibraryRouter();
router.on("route:displayHello",function(page){
	console.log("Hello event fired");
	alert("Welcome to our application");
});
var myView = new LibararyView({model:appModel});
Backbone.history.start();
