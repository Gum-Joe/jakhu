var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("ef0777484b53b62df1a30cd309c67737427d82c0", salt);
console.log(hash);
