var express = require('express');
var router = express.Router();
var models = require('../models');

/* Show add page */
router.get('/:id', function(req, res) {


  models.Page.findOne({ _id: req.params.id },function(err, page){

    res.render('page', { pageTitle: 'EDIT A PAGE', title: page.title, body: page.body});
  });


});

module.exports = router;
