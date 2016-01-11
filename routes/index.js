var express = require('express');
var router = express.Router();

var siteData = {
  title: 'CopyChef',
  version: '1.0.0',
  authors: 'Adam, Lidia, Nick, Stephen'
};

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = siteData;
  data.user = req.user;
  res.render('index', data);
});

// get for add recipe
router.get('/add_recipe', function(req, res, next) {
  var data = siteData;
  data.user = req.user;
  res.render('add', data);
});




module.exports = router;
