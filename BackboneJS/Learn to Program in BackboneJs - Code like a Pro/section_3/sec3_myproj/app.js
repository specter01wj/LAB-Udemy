//---lecuture 9
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

/*var Library = Backbone.Collection.extend({
	model: Book,
	initialize: function(){
		this.on('remove', function(removeModel, models, options){
			console.log('we removed model at index '+ options.index);
		})

	}

});*/

/*var myLibrary = new Library([
	{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},
	{name:"lord of Flies",author:"William Goldwing",year:"1996"}
]);

console.log(myLibrary.length);*/
/*
var myLibrary = new Library();

/!*myLibrary.add([
	{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},
	{name:"lord of Flies",author:"William Goldwing",year:"1996"}
]);*!/
myLibrary.push([
	{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},
	{name:"Lord of Flies",author:"William Goldwing",year:"1996"}
]);

myLibrary.unshift({name:"Transformer",author:"Amme Homes",year:"2007"});

myLibrary.add({name:"Lord of Flies",author:"William Goldwing",year:"2006", cid:"c2"},{merge:true});
*/

/*console.log(myLibrary.size());*/

//console.log(myLibrary.models);

//---lecture 10
/*var sampleBook = new Book({name:"FPGA Chapter 1",author:"Charles Lee",year:"2012"});

myLibrary.add(sampleBook);
//console.log(myLibrary.models);
/!*console.log(myLibrary.models);
myLibrary.remove(sampleBook);
console.log(myLibrary.models);
//myRemovedModel = myLibrary.pop();
myRemovedModel = myLibrary.shift();
console.log(myRemovedModel);*!/

otherModelsArray = [
	{name:"Book 1",author:"Author 1",year:"2001"},
	{name:"Book 2",author:"Author 2",year:"2002"},
	{name:"Book 3",author:"Author 3",year:"2003"}
];

/!*myLibrary.reset(otherModelsArray);
console.log(myLibrary.models);*!/

/!*myLibrary.set(otherModelsArray, {remove: false});
console.log(myLibrary.models);*!/

updateArray = [
	{name:"Transformer",author:"Amme Homes",year:"2001",cid:'c0'},
	{name:"FPGA Chapter 1",author:"Charles Lee",year:"2002",cid:'c3'}
];
//myLibrary.set(updateArray, {merge: false});
myLibrary.set(updateArray, {remove: false});
console.log(myLibrary.models);*/

//---lecture 11
/*console.log(myLibrary.get('c1'));
console.log(myLibrary.models);
console.log(myLibrary.at(1));*/

/*for(var i = 0; i < myLibrary.length; i++){
	console.log(myLibrary.at(i).get('name'));
}*/

/*myLibrary.forEach(function(model){
	console.log(model.get('author'));
})*/

//console.log(myLibrary.pluck('name'));
//console.log(myLibrary.where({name: 'Transformer'}));
//console.log(myLibrary.findWhere({year: '1993'}));
//console.log(myLibrary.groupBy({year: '1993'}));

//---leture 12
var Library = Backbone.Collection.extend({
	model: Book,
	url: 'http://localhost:8080/books/',
 	initialize: function(){
 		this.on('remove', function(removeModel, models, options){
 			console.log('we removed model at index '+ options.index);
 		})

 	}

});

var myLibrary = new Library();

myLibrary.push([
	{name:"The Alchemist",author:"Paulo Coehlo",year:"1993"},
	{name:"Lord of Flies",author:"William Goldwing",year:"1996"}
]);

myLibrary.unshift({name:"Transformer",author:"Amme Homes",year:"2007"});

myLibrary.add({name:"Lord of Flies",author:"William Goldwing",year:"2006", cid:"c2"},{merge:true});

/*myLibrary.forEach(function(model){
	model.save();
});

var myModel = new Book({
	name:"Book 1",author:"Author 1",year:"2010"
});

myLibrary.create(myModel);
*/

var myDeletedModel = new Book();
myDeletedModel.set('id',1);
myDeletedModel.destroy();

myLibrary.fetch({
	success:function(){
		console.log('Collection retreived from the server!');
	},
	error:function(){
		console.log('An error happended!');
	}
});
console.log(myLibrary.models);


