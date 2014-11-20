var express = require('express');
var router = express.Router();
var models = require('../models');

/* Show add page */
router.get('/:id', function(req, res) {


  models.Page.findOne({ _id: req.params.id },function(err, page){

    res.render('edit', { pageTitle: 'EDIT A PAGE', title: page.title, body: page.body, id: req.params.id});
  });


});

/* Delete page */
router.get('/delete/:id', function(req, res) {

  models.Page.remove({ _id: req.params.id }, function(err){
    res.redirect('/');
  });

});

// Save existing page
router.post('/submit/:id', function(req, res) {

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

  models.Page.findOne({ _id: req.params.id },function(err, page){

    page.title = title;
    page.body = body;
    page.url_name = url_name;

    console.log(page);
    page.save(function(err){
      res.redirect('/');
    });

  });
});

module.exports = router;
