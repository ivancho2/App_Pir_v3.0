var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	getRegistrar_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Registrar_Grupo_Modulo', {Usuario: req.session.Persona});
	},
	getConsultar_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Consultar_Grupo_Modulo', {Usuario: req.session.Persona});
	},
	getModificar_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona});
	},
	getEliminar_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona});
	},

	postRegistrar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		var sw;
		(req.body.estado_switch_Modulo!='on')? sw = 0: sw = 1 ;

		console.log(req.body.Codigo_Nomenclatura_Modulo,' - ',sw);
		// console.log(modulo);
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			Modulo.Registrar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo, req.body.nombre_Modulo, req.body.descripcion_Modulo,sw, 'activo', req.session.Persona.identificacion_Persona).then(resultado => {
				console.log("Albums: ",resultado);
				if (resultado.boolean) {
					console.log('true en registro return');
					res.render('Gestionar_Grupo_Modulo/Registrar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Modulo '+req.body.Codigo_Nomenclatura_Modulo+' Registrado correctamente!'});
				} else {
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Registrar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al Insertar el Nuevo Usuario'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postConsultar_Grupo_Modulo: function(req, res, next) {
		var Class_Modulo = require('../class/Modulo');
		var Interface_Modulo = require('../interfaces/IModulo');
		console.log('getIndex function');
		var Modulo = new Class_Modulo();
		var IModulo = new Interface_Modulo();
		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Modulo.Consultar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo).then(resultado => {
				console.log("Albums: ", resultado);
				if (resultado!=null) {
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Modulo Consultado correctamente!';
					// console.log("Albums2: ", resultado);
					// console.log('true en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Consultar_Grupo_Modulo', resultado);
				}else{
					console.log('else en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Consultar_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Modulo'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	postModificar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo).then(resultado => {
				console.log("Albums: ", resultado);
				if (resultado!=null){
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Modulo Consultado correctamente!';
					// console.log("Albums2: ", resultado);
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', resultado);
				}else{
					console.log('else en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Modulo'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	putModificar_Grupo_Modulo: function(req, res, next) {
		var Class_Modulo = require('../class/Modulo');
		var Interface_Modulo = require('../interfaces/IModulo');
		console.log('getIndex function');
		var Modulo = new Class_Modulo();
		var IModulo = new Interface_Modulo();
		var sw;
		(req.body.estado_switch_Modulo!='on')? sw = 0: sw = 1 ;
		console.log(req.body.Codigo_Nomenclatura_Modulo,' - ',sw);
		// console.log(modulo);
		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			Modulo.Modificar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo, req.body.nombre_Modulo, req.body.descripcion_Modulo).then(resultado => {
				console.log("Albums: ",resultado);
				if (resultado.boolean){
					console.log('true en Actualizacion return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Modulo '+req.body.Codigo_Nomenclatura_Modulo+' Actualizado correctamente!'});
				}else{
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al actualizar los datos del Modulo'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postEliminar_Grupo_Modulo: function(req, res, next) {
		var Class_Modulo = require('../class/Modulo');
		var Interface_Modulo = require('../interfaces/IModulo');
		console.log('getIndex function');
		var Modulo = new Class_Modulo();
		var IModulo = new Interface_Modulo();
		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Modulo.Consultar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo).then(resultado => {
				console.log("Albums: ", resultado);
				if (resultado!=null){
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Modulo Consultado correctamente!';
					// console.log("Albums2: ", resultado);
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', resultado);
				}else{
					console.log('else en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Modulo'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	deleteEliminar_Grupo_Modulo: function(req, res, next) {
		var Class_Modulo = require('../class/Modulo');
		var Interface_Modulo = require('../interfaces/IModulo');
		console.log('getIndex function');
		var Modulo = new Class_Modulo();
		var IModulo = new Interface_Modulo();
		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
			console.log('true implementr Modulo DashBoard');
			Modulo.Eliminar_Grupo_Modulo(req.body.Codigo_Nomenclatura_Modulo).then(resultado => {
				console.log("Albums: ",resultado);
				if (resultado.boolean){
					console.log('true en Eliminar return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Modulo '+req.body.Codigo_Nomenclatura_Modulo+' Inhabilitado correctamente!'});
				}else{
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al Eliminar el Modulo '+req.body.Codigo_Nomenclatura_Modulo+'!'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	}
};
