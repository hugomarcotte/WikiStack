var express = require('express');
var router = express.Router();
var models = require('../models');

/* Show add page */
router.get('/:id', function(req, res) {

  models.Page.findOne({ _id: req.params.id },function(err, page){

    res.render('wiki', { title: page.title, body: page.body, id: req.params.id });
  });

});

module.exports = router;
