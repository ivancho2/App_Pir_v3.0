var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

/* GET home page. */
router.get('/', controllers.Dashboard_Controller.getIndex);

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Express My APP PIR', ms:'My Dashboard' });
});

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

/*
router.get('/personas', controllers.personacontroller.getPersonas);
router.get('/nueva/persona', controllers.personacontroller.getNuevaPersona);
router.post('/registrarpersona', controllers.personacontroller.postNuevaPersona);
router.post('/eliminarpersona', controllers.personacontroller.eliminarPersona);
router.get('/modificarpersona/:Identificacion', controllers.personacontroller.getModificarPersona);
router.post('/editarpersonas', controllers.personacontroller.postModificarPersona);
*/
module.exports = router;
