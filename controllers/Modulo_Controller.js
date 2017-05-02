var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	getRegistrar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Registrar_Modulo', {Usuario: req.session.Persona});
	},
	getConsultar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Consultar_Modulo', {Usuario: req.session.Persona});
	},
	getModificar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Modificar_Modulo', {Usuario: req.session.Persona});
	},
	getInhabilitar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Inhabilitar_Modulo', {Usuario: req.session.Persona});
	},

	postRegistrar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Registrar_Modulo', {Usuario: req.session.Persona});
	},
	postConsultar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Consultar_Modulo', {Usuario: req.session.Persona});
	},
	putModificar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Modificar_Modulo', {Usuario: req.session.Persona});
	},
	deleteInhabilitar_Modulo: function(req, res, next) {
		res.render('Gestionar_Modulo/Inhabilitar_Modulo', {Usuario: req.session.Persona});
	}
};
