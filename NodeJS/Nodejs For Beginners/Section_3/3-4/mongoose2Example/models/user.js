var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:String,
	email:String
});

mongoose.model('user',UserSchema);