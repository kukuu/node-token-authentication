var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
//mongoose.model takes 2 paameters: an identification. This will be pluralised by mongodb for the 
//collection name automatically as 'users'
//second parameter is an instantiated schema from its object created
module.exports = mongoose.model('User', new Schema({ 
	name: String, 
	password: String, 
	admin: Boolean 
}));
