var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    appellation:String,
    account:String,
    password:String
});
module.exports = mongoose.model('userModel', userSchema);