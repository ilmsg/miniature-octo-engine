const { Router } = require('express');
const router = Router();

const auth = require('../utils/auth');

router.get('/', auth, function(req, res, next) {
  res.send('register');
});

router.get('/register', function(req, res, next) {
  res.send('register');
});

router.post('/register', function(req, res, next) {
  res.json(req.body);
});

router.get('/login', function(req, res, next) {
  res.send('login');
});

router.post('/login', function(req, res, next) {
  res.json(req.body);
});

router.get('/profile', auth, function(req, res, next) {
  res.send('profile');
});

router.get('/logout', function(req, res, next) {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
