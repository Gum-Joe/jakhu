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

var NotifSchema = new mongoose.Schema({
  app: String,
  text: String,
  iconPath: String,
  link: String
});
var notification = mongoose.model('notifications', NotifSchema);

var AppSchema = new mongoose.Schema({
  name: String,
  path: String,
  author: String,
  iconPath: String,
  installDate: Date,
  version: String,
});
var Apps = mongoose.model('apps', AppSchema);

module.exports = {Apps: Apps, user: user, UserSchema: UserSchema, oauth: oauth, OAuthSchema: OAuthSchema, token: token, notification: notification};
