var mongoose = require ('mongoose');

var UserSchema = new mongoose.Schema ({
  Username: String,
  Email: String,
  UserPassword: String,
  IsAdmin: Boolean,
  Favorites: String
});

module.exports = mongoose.model('User', UserSchema);
