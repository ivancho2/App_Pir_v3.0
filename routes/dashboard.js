var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
router.get('/',controllers.Dashboard_Controller.getRegistrar_Usuario);

router.get('/Registrar_Usuario', controllers.Dashboard_Controller.getRegistrar_Usuario);

router.get('/Consultar_Usuario', function(req, res) {
  res.send('Consultar_Usuario');
});
router.get('/Modificar_Usuario', function(req, res) {
  res.send('Modificar_Usuario');
});
router.get('/Inhabilitar_Usuario', function(req, res) {
  res.send('Inhabilitar_Usuario');
});

module.exports = router;
