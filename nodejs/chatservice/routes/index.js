var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Nodejs in docker!!!' });
  var db = req.db;
  console.log(db)
  var collection = db.get('usercollection');
});

module.exports = router;
