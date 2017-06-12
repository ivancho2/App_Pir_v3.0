var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

// middleware that is specific to this router
router.use(function(req, res, next) {
  console.log('Time: ', Date.now());
  if(req.session.Persona){
    console.log('Si logeado');
    // console.log(req.session.Persona);
    next();
  }else{
    console.log('No logeado');
    res.redirect('/Login');
  }
});
router.get('/',controllers.Dashboard_Controller.dashboard);

//Gestionar_Usuario
router.get('/Registrar_Usuario', controllers.Gestionar_Usuario_Controller.getRegistrar_Usuario);
router.get('/Consultar_Usuario', controllers.Gestionar_Usuario_Controller.getConsultar_Usuario);
router.get('/Eliminar_Usuario', controllers.Gestionar_Usuario_Controller.getEliminar_Usuario);
router.get('/Modificar_Usuario', controllers.Gestionar_Usuario_Controller.getModificar_Usuario);

router.post('/Registrar_Usuario', controllers.Gestionar_Usuario_Controller.postRegistrar_Usuario);
router.post('/Consultar_Usuario', controllers.Gestionar_Usuario_Controller.postConsultar_Usuario);
router.post('/Modificar_Usuario', controllers.Gestionar_Usuario_Controller.postModificar_Usuario);//consulta los datos
router.post('/PUT_Modificar_Usuario', controllers.Gestionar_Usuario_Controller.putModificar_Usuario); //modifica el usuario
router.post('/Eliminar_Usuario', controllers.Gestionar_Usuario_Controller.postEliminar_Usuario); //consulta los datos
router.post('/DELETE_Eliminar_Usuario', controllers.Gestionar_Usuario_Controller.deleteEliminar_Usuario);//Eliminar Usuario

//Gestionar_Modulos
router.get('/Registrar_Modulo', controllers.Gestionar_Modulo_Controller.getRegistrar_Modulo);
router.get('/Consultar_Modulo', controllers.Gestionar_Modulo_Controller.getConsultar_Modulo);
router.get('/Modificar_Modulo', controllers.Gestionar_Modulo_Controller.getModificar_Modulo);
router.get('/Eliminar_Modulo', controllers.Gestionar_Modulo_Controller.getEliminar_Modulo);

router.post('/Registrar_Modulo', controllers.Gestionar_Modulo_Controller.postRegistrar_Modulo);
router.post('/Consultar_Modulo', controllers.Gestionar_Modulo_Controller.postConsultar_Modulo);
router.post('/Modificar_Modulo', controllers.Gestionar_Modulo_Controller.postModificar_Modulo);
router.post('/PUT_Modificar_Modulo', controllers.Gestionar_Modulo_Controller.putModificar_Modulo);
router.post('/Eliminar_Modulo', controllers.Gestionar_Modulo_Controller.postEliminar_Modulo);
router.post('/DELETE_Eliminar_Modulo', controllers.Gestionar_Modulo_Controller.deleteEliminar_Modulo);

//Gestionar_Grupo_Modulos
router.get('/Registrar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getRegistrar_Grupo_Modulo);
router.get('/Consultar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getConsultar_Grupo_Modulo);
router.get('/Modificar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getModificar_Grupo_Modulo);
router.get('/Eliminar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getEliminar_Grupo_Modulo);

router.post('/Registrar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postRegistrar_Grupo_Modulo);
router.post('/Consultar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postConsultar_Grupo_Modulo);
router.post('/Modificar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postModificar_Grupo_Modulo);
router.post('/PUT_Modificar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.putModificar_Grupo_Modulo);
router.post('/Eliminar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postEliminar_Grupo_Modulo);
router.post('/DELETE_Eliminar_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.deleteEliminar_Grupo_Modulo);

// Suscribir Modulo a Grupo de Modulos
router.get('/Suscribir_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getSuscribir_Modulo_Grupo_Modulo);
router.post('/Suscribir_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postSuscribir_Modulo_Grupo_Modulo);
router.post('/PUT_Suscribir_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.putSuscribir_Modulo_Grupo_Modulo);


router.get('/Eliminar_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.getEliminar_Modulo_Grupo_Modulo);
router.post('/Eliminar_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postEliminar_Modulo_Grupo_Modulo);
router.post('/DELETE_Eliminar_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.deleteEliminar_Modulo_Grupo_Modulo);
// router.post('/Eliminar_Modulo_Grupo_Modulo', controllers.Gestionar_Grupo_Modulo_Controller.postEliminar_Modulo_Grupo_Modulo);


module.exports = router;
