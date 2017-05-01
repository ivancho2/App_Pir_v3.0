var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
  Login: function(req, res, next) {
    // res.render('Gestionar_Modulo/Registrar_Modulo', {Nombre: 'Jorge Ivan Niño'});
  },
  Logout: function(req, res, next) {
    //destruir credenciales

    res.redirect('../Login');
  }
}
