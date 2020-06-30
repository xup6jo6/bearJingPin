var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userStatusSchema = new Schema({
    account:String,
    level:Number,
    exp:Number,
    money:Number,
    love:Number
});
module.exports = mongoose.model('userStatus', userStatusSchema);