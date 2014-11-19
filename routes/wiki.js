var express = require('express');
var router = express.Router();
var models = require('../models');

/* Show add page */
router.get('/:url_name', function(req, res) {

  models.Page.findOne({ url_name: req.params.url_name },function(err, page){
    res.render('show', { title: page.title, body: page.body});
  });
  
});

module.exports = router;
