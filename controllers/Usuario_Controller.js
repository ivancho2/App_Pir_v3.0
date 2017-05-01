var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	getRegistrar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Registrar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	getConsultar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Consultar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	getModificar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Modificar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	getInhabilitar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Inhabilitar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},

	postRegistrar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Registrar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	postConsultar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Consultar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	putModificar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Modificar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	deleteInhabilitar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Inhabilitar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	}
};
