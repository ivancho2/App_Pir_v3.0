var express = require('express');
var router = express.Router();
var controllers = require('.././controllers');// reconoce el index solo?

router.get('/', function(req, res, next) {
  res.redirect('../Login');
});
router.get('/test',controllers.test.test);

router.get('/Login',function(req, res, next) {
  if (!(typeof req.session.identificacion_Persona!='undefined') || req.session.identificacion_Persona==null) {
    res.render('login',{info : req.flash('info')});
  }else{
    res.redirect('/Dashboard/#');
  }
});
router.get('/Logout',controllers.Session_Controller.Logout);

router.post('/Login', controllers.Session_Controller.Login);

module.exports = router;
