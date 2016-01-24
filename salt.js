var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(1);
var hash = bcrypt.hashSync("Overthrow queen at this party", salt);
console.log(hash);
