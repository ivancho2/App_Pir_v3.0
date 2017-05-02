var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

// middleware that is specific to this router
router.use(function(req, res, next) {
  console.log('Time: ', Date.now());
  if(req.session.Persona){
    console.log('Si logeado');
    console.log(req.session.Persona);
    next();
  }else{
    console.log('No logeado');
    res.redirect('/Login');
  }
});
router.get('/',function(req, res, next) {
  res.render('dashboard_home', {Usuario: req.session.Persona});
});

//Gestionar_Usuario
router.get('/Registrar_Usuario', controllers.Usuario_Controller.getRegistrar_Usuario);
router.get('/Consultar_Usuario', controllers.Usuario_Controller.getConsultar_Usuario);
router.get('/Modificar_Usuario', controllers.Usuario_Controller.getModificar_Usuario);
router.get('/Inhabilitar_Usuario', controllers.Usuario_Controller.getInhabilitar_Usuario);

router.post('/Registrar_Usuario', controllers.Usuario_Controller.postRegistrar_Usuario);
router.post('/Consultar_Usuario', controllers.Usuario_Controller.postConsultar_Usuario);
router.post('/Modificar_Usuario', controllers.Usuario_Controller.postModificar_Usuario);
router.put('/Modificar_Usuario', controllers.Usuario_Controller.putModificar_Usuario);
router.delete('/Inhabilitar_Usuario', controllers.Usuario_Controller.deleteInhabilitar_Usuario);

//Gestionar_Modulos
router.get('/Registrar_Modulo', controllers.Modulo_Controller.getRegistrar_Modulo);
router.get('/Consultar_Modulo', controllers.Modulo_Controller.getConsultar_Modulo);
router.get('/Modificar_Modulo', controllers.Modulo_Controller.getModificar_Modulo);
router.get('/Inhabilitar_Modulo', controllers.Modulo_Controller.getInhabilitar_Modulo);

router.post('/Registrar_Modulo', controllers.Modulo_Controller.postRegistrar_Modulo);
router.post('/Consultar_Modulo', controllers.Modulo_Controller.postConsultar_Modulo);
router.put('/Modificar_Modulo', controllers.Modulo_Controller.putModificar_Modulo);
router.delete('/Inhabilitar_Modulo', controllers.Modulo_Controller.deleteInhabilitar_Modulo);


module.exports = router;
