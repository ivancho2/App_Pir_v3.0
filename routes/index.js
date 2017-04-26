var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express My APP PIR' });
});

router.get('/Login', function(req, res, next) {
  res.render('index', { title: 'Express My APP PIR LOGIN' });
});


module.exports = router;