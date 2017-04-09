var models  = require('../models');
var express = require('express');
var router  = express.Router();
// var myParser = require("body-parser");

// router.use(myParser.urlencoded({extended : true}));
router.get('/tags', function(req, res) {
//   var nuevaMarca= req.body.marca;
models.Tag.findAll().then(function(tags) {
  res.send({tags});
})

});


module.exports = router;
