const express = require('express');

const router = express.Router();

function ensureAuthenticated(req, res, next){
  if (req.isAuthenticated()) {
    return next();
  } else {
    // req.flash('error_msg', 'You are not logged in');
    res.redirect('/users/login');
  }
}

router.get('/', (req, res) => {
  res.redirect('/users/login');
});

router.get('/user', ensureAuthenticated, (req, res) => {
  res.render('index');
});

router.get('/stream', ensureAuthenticated, (req, res) => {
  res.render('stream');
});

module.exports = router;
