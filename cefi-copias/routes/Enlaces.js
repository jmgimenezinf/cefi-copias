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

router.get('/autores', function(req, res) {
      models.Autor.findAll().then(function(autores) {
        res.send({autores});
      })
});

router.get('/titulos', function(req, res) {
      models.Titulo.findAll().then(function(titulos) {
        res.send({titulos});
      })
});



module.exports = router;
