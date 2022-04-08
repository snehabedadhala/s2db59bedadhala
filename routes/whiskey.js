var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('whiskey', { title: 'Search Results whiskey' });
});

module.exports = router;
