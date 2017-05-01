var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

/* GET home page. */
// router.get('/dashboard', controllers.Dashboard_Controller.getIndex);
// router.post('/dashboard', controllers.Dashboard_Controller.Post_Consultar_Persona); //genera error


router.get('/', function(req, res, next) {
  res.render('index', { Nombre: 'Jorge Ivan Niño'});
});
// router.get('/Gestionar_Usuario', controllers.Dashboard_Controller.getIndex);

// router.get('/dashboard', function(req, res, next) {
//   res.render('dashboard');
// });

/*
router.get('/personas', controllers.personacontroller.getPersonas);
router.get('/nueva/persona', controllers.personacontroller.getNuevaPersona);
router.post('/registrarpersona', controllers.personacontroller.postNuevaPersona);
router.post('/eliminarpersona', controllers.personacontroller.eliminarPersona);
router.get('/modificarpersona/:Identificacion', controllers.personacontroller.getModificarPersona);
router.post('/editarpersonas', controllers.personacontroller.postModificarPersona);
*/
module.exports = router;
