var NodeRSA = require('node-rsa');
var fs = require('fs');
var configh = require('web-os-config');
// Create key
var key = new NodeRSA({b: 2048});
// export
fs.appendFileSync("public.pem", key.exportKey('pkcs1-public-pem'), 'utf8');
fs.appendFileSync("private.pem", key.exportKey('pkcs1-private-pem'), 'utf8');
