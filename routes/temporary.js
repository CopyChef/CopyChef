// Router for Restaurant search
router.get('/search/:Restaurant', function(req, res, next) {
  model.find({ Restaurant: req.params.Restaurant}, function (err, recipe){
    if (err) console.log(error);
    res.json(recipe);
  });

});
// End router for Restaurant search
