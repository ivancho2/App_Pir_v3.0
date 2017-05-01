var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

router.use(function(req, res, next) {
  console.log('Time: ', Date.now());
  console.log('Debe ser usuario autenticado para entrar a esta Vista');
  next();
});
router.get('/', function(req, res, next) {
  res.redirect('../Login');
});
router.get('/Login', function(req, res, next) {
  res.render('login');
});
router.post('/Login', controllers.Usuario_Controller.postRegistrar_Usuario);

module.exports = router;
