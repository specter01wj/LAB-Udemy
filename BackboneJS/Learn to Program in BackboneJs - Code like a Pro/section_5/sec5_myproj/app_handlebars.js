//---lecuture 16
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

var myBook = new Book({"id":1});

var LibraryView = Backbone.View.extend({
	el: 'ul',
	id: 'book-list',
	initialize: function(){
		this.model = myBook;
		this.render();
	},
	events: {
		'click li': 'onClickLi'
	},
	onClickLi: function(){
		console.log('clicked LI!!!');
	},
	template: Handlebars.compile($('#books-template').html()),
	render: function(){
		var self = this;
		var output = self.template({'library':self.model.toJSON()});
		this.$el.append(output);
		return self;
	}
});

var LibraryRouter = Backbone.Router.extend({
	routes: {
		'book/:author(/:year)': 'displaybook',
		//'books/book:id': 'displaySingleBook',
		'books/*path': 'displayArbitrary',
		'': 'homepage',
		'*default': 'defaultRoute'
	},
	homepage: function(){
		console.log('You reached the homepage of the app!');
	},
	displaybook: function(author, year){
		if(year != null)
			console.log('display books for author: ' + author + 'in the year: ' + year);
		else
			console.log('display books for author: ' + author);
	},
	displaySingleBook: function(id){
		console.log('Display id: ' + id);
	},
	displayArbitrary: function(path){
		path = path.split('/');
		console.log('first segment is ' + path[0]);
	},
	defaultRoute: function(){
		console.log('the page not found!')
	}
});
var myView = new LibraryView();
var router = new LibraryRouter();

router.on('displaySingleBook', function(page){
	alert('you have reached single book!');
});



Backbone.history.start();




