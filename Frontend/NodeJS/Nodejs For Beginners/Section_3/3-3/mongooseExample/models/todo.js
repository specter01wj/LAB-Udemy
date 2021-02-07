var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TodoSchema = new Schema({
	name:String,
	createdAt:{type:Date,default:Date.now}
});

mongoose.model('todo',TodoSchema);