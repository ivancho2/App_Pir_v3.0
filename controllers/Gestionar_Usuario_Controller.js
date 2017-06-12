var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	getRegistrar_Usuario: function(req, res, next) {
	//console.log('get consul Usuario');
		res.render('Gestionar_Usuario/Registrar_Usuario', {Usuario: req.session.Persona});
	},
	getConsultar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Consultar_Usuario', {Usuario: req.session.Persona});
	},
	getModificar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Modificar_Usuario', {Usuario: req.session.Persona});
	},
	getEliminar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Eliminar_Usuario', {Usuario: req.session.Persona});
	},
	postRegistrar_Usuario: function(req, res, next) {
	//console.log('en reg usuario');
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
	//console.log('getIndex function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
		//console.log('true implementr persona DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Persona.Registrar_Persona(req.body.Identificacion,req.body.Nombres, req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios).then(resultado => {
			//console.log("Albums: ",resultado);
				if (resultado.boolean) {
				//console.log('true en registro return');
					res.render('Gestionar_Usuario/Registrar_Usuario', {Usuario: req.session.Persona, info_success : 'Persona Registrada correctamente!'});
				}else{
				//console.log('else en registro return');
					res.render('Gestionar_Usuario/Registrar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Insertar el Nuevo Usuario'});
				}
			});
		} else {
		//console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postConsultar_Usuario: function(req, res, next) {
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
	//console.log('getIndex function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
		//console.log('true implementr persona DashBoard');
		//console.log(req.body.Identificacion);
			// console.log(Persona.);

			Persona.Consultar_Persona(req.body.Identificacion).then(resultado => {
			//console.log("Albums: ", resultado);
				if (resultado!=null) {
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Persona Consultada correctamente!';
					// console.log("Albums2: ", resultado);
					// console.log('true en Consultar return');
					res.render('Gestionar_Usuario/Consultar_Usuario', resultado);
				}else{
				//console.log('else en Consultar return');
					res.render('Gestionar_Usuario/Consultar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Usuario'});
				}
			});
		} else {
			// console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postModificar_Usuario: function(req, res, next) {
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
		// console.log('getIndex function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
			// console.log('true implementr persona DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Persona.Consultar_Persona(req.body.Identificacion).then(resultado => {
				// console.log("Albums: ", resultado);
				if (resultado!=null) {
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Persona Consultada correctamente!';
					// console.log("Albums2: ", resultado);
					// console.log('true en Consultar return');
					res.render('Gestionar_Usuario/Modificar_Usuario', resultado);
				}else{
					// console.log('else en Consultar return');
					res.render('Gestionar_Usuario/Modificar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Usuario'});
				}
			});
		} else {
			// console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	putModificar_Usuario: function(req, res, next) {
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
		// console.log('putModificar_Usuario function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
			// console.log('true implementr persona DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Persona.Modificar_Persona(req.body.Identificacion,req.body.Nombres, req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios).then(resultado => {
				// console.log("Albums: ", resultado);
				if (resultado.boolean) {
					// console.log('true en registro return');
					res.render('Gestionar_Usuario/Modificar_Usuario', {Usuario: req.session.Persona, info_success : 'Persona Modificada correctamente!'});
				}else{
					// console.log('else en registro return');
					res.render('Gestionar_Usuario/Modificar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Insertar el Nuevo Usuario'});
				}
			});
		} else {
			// console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postEliminar_Usuario: function(req, res, next) {
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
	//console.log('getIndex function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
		//console.log('true implementr persona DashBoard');
		//console.log(req.body.Identificacion);
			Persona.Consultar_Persona(req.body.Identificacion).then(resultado => {
			//console.log("Albums: ", resultado);
				if (resultado!=null) {
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Persona Consultada correctamente!';
					// console.log("Albums2: ", resultado);
					// console.log('true en Consultar return');
					res.render('Gestionar_Usuario/Eliminar_Usuario', resultado);
				}else{
				//console.log('else en Consultar return');
					res.render('Gestionar_Usuario/Eliminar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Usuario'});
				}
			});
		} else {
			// console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	deleteEliminar_Usuario: function(req, res, next) {
	//console.log('Delete Usuario');
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
	//console.log('putModificar_Usuario function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
			// console.log('true implementr persona DashBoard');
		//console.log(req.body.Identificacion);
			Persona.Eliminar_Persona(req.body.Identificacion).then(resultado => {
			//console.log("Albums: ", resultado);
				if (resultado.boolean) {
					// console.log('true en registro return');
					res.render('Gestionar_Usuario/Eliminar_Usuario', {Usuario: req.session.Persona, info_success : 'Persona Inhabilitada correctamente!'});
				}else{
					// console.log('else en registro return');
					res.render('Gestionar_Usuario/Eliminar_Usuario', {Usuario: req.session.Persona, info_error : 'Error Query al Eliminar el Usuario, El Usuario probablemente no existe!'});
				}
			});
		} else {
		//console.log('error en la interface IPersona');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	}
};
