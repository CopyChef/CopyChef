var express = require('express');
var router = express.Router();
var model = require('../models/Recipe');

router.get('/', function(req, res, next) {
  model.find(function (err, recipes){
    if (err) console.log(err);
    res.json(recipes);
  });
});


router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function (err, recipe){
    if (err) console.log(error);
    // res.json(recipe);
    res.render('practice', recipe);
  });
});

// Router for Restaurant search
router.get('/search/:Restaurant', function(req, res, next) {
  model.find({ Restaurant: req.params.Restaurant}, function (err, recipe){
    if (err) console.log(error);
    res.json(recipe);
  });

});
// End router for Restaurant search


router.post('/', function(req, res, next) {
  model.create(req.body, function (err, recipe){
    if (err) console.log(err);
    res.json(recipe);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, recipe){
    if (err) console.log(err);
    res.json(recipe);
  });
});

router.patch('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, recipe){
    if (err) console.log(err);
    res.json(recipe)
  });
});

router.delete('/:id', function(req, res, next) {
  model.findByIdAndRemove(req.params.id, req.body, function (err, recipe){
    if (err) console.log(err);
    res.json({"Message": "You succesfully removed that recipe"});
  });
});

router.get('/find/:keyword', function(req, res) {
  model.find({ 'Restaurant': req.params.keyword,  }, function(err, results) {
    console.log(results);
    res.json(results);
  });
});

router.post('/submit', function(req, res) {

  var input = req.body;
  console.log(input);
  // modify input to match requirements, parse floats, etc
  model.create({

  }, function(err, result) {
    if (err) console.log(err);
    res.json(result);
  })

});


module.exports = router;
