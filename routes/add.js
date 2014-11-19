var express = require('express');
var router = express.Router();
var models = require('../models');

/* Show add page */
router.get('/', function(req, res) {
  res.render('add', { title: 'ADD A PAGE' });
});

// Add new page
router.post('/submit', function(req, res) {

  var title = req.body.title,
      body = req.body.body;

  var generateUrlName = function(name) {
    if (typeof name != "undefined" && name !== "") {
      // Removes all non-alphanumeric characters from name
      // And make spaces underscore
      return name.replace(/[\s]/ig,"_").replace(/[^\w]/ig,"");
    } else {
      // Generates random 5 letter string
      return Math.random().toString(36).substring(2,7);
    }
  };


  var url_name = generateUrlName(title);

  models.Page.create({ "title": title, "body":body, "url_name": url_name}, function(page){
    res.redirect('/');
  });

});

module.exports = router;
