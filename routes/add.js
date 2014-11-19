var express = require('express');
var router = express.Router();

/* Show add page */
router.get('/', function(req, res) {
  res.render('add', { title: 'ADD A PAGE' });
});

// Add new page
router.post('/add/submit', function(req, res) {

  res.redirect("/add");
});

module.exports = router;
