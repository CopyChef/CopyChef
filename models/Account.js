var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passport = require('passport-local-mongoose');

var Account = new Schema ({
  username: String,
  password: String
});

Account.plugin(passport);

module.exports = mongoose.model('Account', Account);
