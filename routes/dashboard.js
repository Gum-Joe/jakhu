var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("");
  res.render('dashboard/index.ejs', {
    user: req.param("user")
  });
});

module.exports = router;