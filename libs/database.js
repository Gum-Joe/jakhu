// Database script
var mongoose = require('mongoose');
// scheme
var userSchema = new mongoose.Schema({
  username: { type: String }
, email: String
, pwd: String
});
var user = mongoose.model('users', userSchema);

module.exports = {user: user, userSchema: userSchema};
