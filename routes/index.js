var express = require('express');
var User = require('../models/user.js');

module.exports = function(passport){
  var router = express.Router();

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index', { title: 'Express' , user : req.user });
  });

  // FACEBOOK
  router.get('/auth/facebook',
    passport.authenticate('facebook'),
    function(req, res) {});

  router.get('/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/account');
    });

  router.get('/auth/twitter',
    passport.authenticate('twitter'),
    function(req, res){});

  router.get('/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/account');
    });

  // GOOGLE
  router.get('/auth/google',
    passport.authenticate('google', { scope: [
      'https://www.googleapis.com/auth/plus.login',
      'https://www.googleapis.com/auth/plus.profile.emails.read'
    ] }
  ));

  router.get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/' }),
    function(req, res) {
      res.redirect('/account');
  });


  router.get('/register', function(req, res) {
    res.render('register', { });
  });

  router.post('/register', function(req, res) {
    User.register(new User({ username : req.body.username }), req.body.password, function(err, account) {
      if (err) {
        return res.render('register', { account : account });
      }

      passport.authenticate('local')(req, res, function () {
        res.redirect('/');
      });
    });
  });

  router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
  });

  router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
  });

  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  return router;
}
