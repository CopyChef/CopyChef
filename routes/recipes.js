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
    if (err) console.log(err);
    res.json(recipe);
            // res.render('practice', recipe);
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

// Router for any search
router.get('/search_all/:keyword', function(req, res, next) {
  model.find({ Restaurant: req.params.keyword}, function (err, recipe){
    if (err) {
      console.log(error);
    } else if (recipe == "") {
      console.log('test one');
      model.find({ NameOfDish: req.params.keyword}, function (err, recipe){
        if (recipe != "") {
          res.json(recipe);
        } else {
          model.find({ Tags: req.params.keyword}, function (err, recipe){
            res.json(recipe);
          });
        }
      });
    } else {
      res.json(recipe);
    }
  });

});
// End router for any search


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


module.exports = router;
