// Database script
var mongoose = require('mongoose');
// scheme
var UserSchema = new mongoose.Schema({
  username: { type: String }
, pwd: String
});
var user = mongoose.model('users', UserSchema);

var OAuthSchema = new mongoose.Schema({
  githubUser: String
});
var oauth = mongoose.model('oauthh', OAuthSchema);

var TokenSchema = new mongoose.Schema({
  userId: String,
  token: String
});
var token = mongoose.model('rememberme', TokenSchema);

module.exports = {user: user, UserSchema: UserSchema, oauth: oauth, OAuthSchema: OAuthSchema, token: token};
