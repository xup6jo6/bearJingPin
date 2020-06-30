var mongoose = require('mongoose');
var Schema = mongoose.Schema;
 
var userSchema = new Schema({
    appellation:String,
    account:String,
    password:String,
    level:Number,
    exp:Number,
    money:Number,
    love:Number
});
module.exports = mongoose.model('userModel', userSchema);