//---lecuture 13
Book = Backbone.Model.extend({
	urlRoot: 'http://localhost:8080/books',

	initialize: function(){
		this.on('invalid', function(model, error){
			console.log(error);
		});
	},

	defaults: {
		name: "My Title",
		author: "Jin Wang",
		year: "1999"
	}

});

var Library = Backbone.Collection.extend({
	model: Book,
	url: 'http://localhost:8080/books/'
});

var myLibrary = new Library();

var LibraryView = Backbone.View.extend({
	collection: myLibrary,
	el: 'ul',
	id: 'book-list',
	initialize: function(){
		this.render();
	},
	events: {
		'click li': 'onClickLi'
	},
	onClickLi: function(){
		console.log('clicked LI!!!');
	},
	template: _.template($('#books-template').html()),
	render: function(){
		var self = this;
		var output = self.template({'library':self.collection.toJSON()});
		this.$el.append(output);
		return self;
	}
});

myLibrary.fetch({
	success:function(){
		var myView = new LibraryView();
	},
	error:function(){
		console.log('An error happended!');
	}
});

console.log(myLibrary.models);


