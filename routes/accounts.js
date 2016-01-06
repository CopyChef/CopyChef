var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Account = require('../models/Account');
var router = express.Router();

//configure passport
passport.use(new LocalStrategy(Account.authenticate()));
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());
//end configuration for passport

router.get('/', function(req, res){
  res.render('account', {user: req.user});
});

router.get('/login', function(req, res){
  res.render('login', {user: req.user});
});

router.post('/login', passport.authenticate('local', { failureRedirect: '/account'}),
  function(req, res) {
    res.redirect('/recipes');
  }
);

router.get('/register', function(req, res){
  res.render('register', {user: req.user});
});

router.post('/register', function(req, res){
  Account.register(new Account({
    username: req.body.username
}),
  req.body.password,
  function(err, account) {
    if (err) {
      return res.render('register', { account: account});
    }
    passport.authenticate('local') (req, res, function() {
      res.redirect('/');
    });
  });
});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
