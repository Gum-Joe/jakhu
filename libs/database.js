// Database script
var mongoose = require('mongoose');
// scheme
var UserSchema = new mongoose.Schema({
  username: { type: String }
, pwd: String
});
var user = mongoose.model('users', UserSchema);

module.exports = {user: user, UserSchema: UserSchema};
