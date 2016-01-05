var express = require('express');
var router = express.Router();
var model = require('../models/Recipe');

router.get('/', function(req, res, next) {
  model.find(function (err, recipes){
    if (err) console.log(error);
    res.json(recipes);
  });
});


router.get('/:id', function(req, res, next) {
  model.findById(req.params.id, function (err, recipe){
    if (err) console.log(error);
    res.json(recipe);
  });
});

router.post('/', function(req, res, next) {
  model.create(req.body, function (err, recipe){
    if (err) console.log(error);
    res.json(recipe);
  });
});

router.put('/:id', function(req, res, next) {
  model.findByIdAndUpdate(req.params.id, req.body, function (err, recipe){
    if (err) console.log(error);
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


module.exports = router;
