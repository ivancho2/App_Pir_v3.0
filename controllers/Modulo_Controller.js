var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	getRegistrar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Registrar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	getConsultar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Consultar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	getModificar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Modificar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	getInhabilitar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Inhabilitar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},

	postRegistrar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Registrar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	postConsultar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Consultar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	putModificar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Modificar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	},
	deleteInhabilitar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Inhabilitar_Modulo', {Nombre: 'Jorge Ivan Niño'});
	}
};
