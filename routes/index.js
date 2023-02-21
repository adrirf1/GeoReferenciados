var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express PRO' });
});

router.get('/gmap', function(req, res, next) {
  res.render('gmap', { title: 'Google Maps' });
});

module.exports = router;
