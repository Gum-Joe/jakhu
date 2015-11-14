var keypair = require('keypair');
var api = require('./build/Release/api');

var pair = keypair();
console.log(pair);
api.pem("client.pem", pair.public)
