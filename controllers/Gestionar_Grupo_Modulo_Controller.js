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
	getSuscribir_Modulo_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Suscribir_Modulo_Grupo_Modulo', {Usuario: req.session.Persona});
	},
	getEliminar_Modulo_Grupo_Modulo: function(req, res, next) {
		res.render('Gestionar_Grupo_Modulo/Eliminar_Modulo_Grupo_Modulo', {Usuario: req.session.Persona});
	},

	postRegistrar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();

		var sw;
		(req.body.estado_switch_Grupo_Modulos!='on')? sw = 0: sw = 1 ;

		console.log(req.body.nombre_Grupo_Modulos,' - ',sw);
		// console.log(modulo);
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implementr Grupo de Modulos DashBoard');
			Grupo_Modulo.Registrar_Grupo_Modulo(req.body.nombre_Grupo_Modulos, req.body.descripcion_Grupo_Modulos,sw, req.session.Persona.identificacion_Persona).then(resultado => {
				console.log("Reg_Grupo: ",resultado);
				if (resultado.boolean) {
					console.log('true en registro return');
					res.render('Gestionar_Grupo_Modulo/Registrar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Grupo de Modulos ('+req.body.nombre_Grupo_Modulos+') Registrado correctamente!'});
				} else {
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Registrar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al Insertar el Nuevo Usuario'});
				}
			});
		} else {
			console.log('error en la interface Grupo_Modulos');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postConsultar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();

		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Grupo_Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.nombre_Grupo_Modulos).then(resultado => {
				console.log("Grupo Consultado: ", resultado);
				if (resultado!=null) {
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Grupo de Modulos Consultado correctamente!';
					// console.log("Albums2: ", resultado);
					// console.log('true en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Consultar_Grupo_Modulo', resultado);
				}else{
					console.log('else en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Consultar_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Grupo de Modulo'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	postModificar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Grupo_Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.nombre_Grupo_Modulos).then(resultado => {
				console.log("Albums: ", resultado);
				if (resultado!=null){
					resultado.Usuario=req.session.Persona;
					resultado.info_success = 'Modulo Consultado correctamente!';
					// console.log("Albums2: ", resultado);
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', resultado);
				}else{
					console.log('else en Consultar return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Consultar el Grupo de Modulos'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	putModificar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		// console.log(modulo);
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Grupo_Modulo DashBoard');
			Grupo_Modulo.Modificar_Grupo_Modulo(req.body.id_Grupo_Modulos,req.body.nombre_Grupo_Modulos, req.body.descripcion_Grupo_Modulos).then(resultado => {
				console.log("Albums: ",resultado);
				if (resultado.boolean){
					console.log('true en Actualizacion return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Modulo '+req.body.nombre_Grupo_Modulos+' Actualizado correctamente!'});
				}else{
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Modificar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al actualizar los datos del Grupo de Modulos'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	postEliminar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Grupo_Modulo DashBoard');
			// console.log(req.body.Identificacion,req.body.Nombres,req.body.Apellidos,req.body.Usuario,req.body.Password,req.body.optionsRadios);
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.nombre_Grupo_Modulos).then(resultado => {
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
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona, info_error : 'Error en implementacion de Interface' });
		}
	},
	deleteEliminar_Grupo_Modulo: function(req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Grupo_Modulo DashBoard');
			Grupo_Modulo.Eliminar_Grupo_Modulo(req.body.id_Grupo_Modulos).then(resultado => {
				console.log("Albums: ",resultado);
				if (resultado.boolean){
					console.log('true en Eliminar return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona, info_success : 'Grupo de Modulo ('+req.body.nombre_Grupo_Modulos+') Eliminado correctamente!'});
				}else{
					console.log('else en registro return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Grupo_Modulo', {Usuario: req.session.Persona,info_error : 'Error Query al Eliminar el Grupo de Modulos ('+req.body.nombre_Grupo_Modulos+')!'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	// metodo para listar los modulos suscrito a un determinado grupo y renderizar la vista
	postSuscribir_Modulo_Grupo_Modulo:function (req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Interface Suscripcion_listar_Modulos de Modulo a Grupo DashBoard');
			//primero consulto el codigo del grupo con este nombre_Grupo_Modulos
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.nombre_Grupo_Modulos).then(result_Grupo_Modulo => {
				// console.log("Albums: ",result_Grupo_Modulo);
				if (result_Grupo_Modulo!=null){
					// console.log(result_Grupo_Modulo);
					//Luego listo los modulos suscritos a este grupo
					data_response={
						nombre_Grupo_Modulos: req.body.nombre_Grupo_Modulos,
						id_Grupo_Modulos:result_Grupo_Modulo.id_Grupo_Modulos,
						Usuario:req.session.Persona,
						info_success : 'Listado de Modulos consultado correctamente!'
					}
					Grupo_Modulo.Listar_Modulos_Suscritos_Grupo(result_Grupo_Modulo.id_Grupo_Modulos).then(list_modulos => {
						// console.log("Lista de Modulos Suscritos: ",list_modulos);
						if (list_modulos!=null){
							console.log('true en Listar Suscritos a Grupo return');
							data_response.suscritos=list_modulos;
						}else{
							console.log('null en list_modulos');
							data_response.suscritos=null;
						}
						Grupo_Modulo.Listar_Modulos_NO_Suscritos_Grupo(result_Grupo_Modulo.id_Grupo_Modulos).then(list_no_modulos => {
							if (list_no_modulos!=null){
								console.log('true en Listar NO!! Suscritos a Grupo return');
								data_response.no_suscritos=list_no_modulos;
							}else{
								data_response.no_suscritos=null;
								console.log('null en list_NO_modulos');
							}
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							// console.log(data_response.suscritos.length);
							// console.log(data_response.no_suscritos.length);
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							// console.log(data_response.suscritos[0].Codigo_Nomenclatura_Modulo);
							// console.log(data_response.suscritos[1].Codigo_Nomenclatura_Modulo);
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							res.render('Gestionar_Grupo_Modulo/Suscribir_Modulo_Grupo_Modulo', data_response);
						});
					});
				}else{
					console.log('else en listar modulos de grupo return');
					res.render('Gestionar_Grupo_Modulo/Suscribir_Modulo_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Listar Modulos suscritos al Grupo de Modulos!'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
//metodo para actualizar nuevas suscripciones
	putSuscribir_Modulo_Grupo_Modulo:function (req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Interface Suscripcion de Modulo a Grupo DashBoard');
			// console.log(req.body.suscritos);
			var Array_promise=[];
			for (var i = 1; i < req.body.suscritos.length; i++) {
				Array_promise.push(
					new Promise(function (response_promise, reject){
						// console.log(req.body.suscritos[i]);
						// console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
						Grupo_Modulo.Suscribir_Modulo_Grupo_Modulo(req.body.id_Grupo_Modulos,(req.body.suscritos[i]),req.session.Persona.identificacion_Persona).then(resultado => {
							// console.log("Resultado a promesa Registro de 1 modulo: ",resultado.boolean);
							response_promise({boolean:(resultado.boolean)});
						});
					})
				);
			}
			Promise.all(Array_promise).then(function (restult_all_promises) {
				console.log(restult_all_promises);
				var estado_suscripciones = {};
				for (var i = 0; i < restult_all_promises.length; i++) {
					estado_suscripciones[req.body.suscritos[i]] = restult_all_promises[i].boolean;
				}
				data_response={
					Usuario: req.session.Persona,
					nombre_Grupo_Modulos: req.body.nombre_Grupo_Modulos,
					id_Grupo_Modulos:req.body.id_Grupo_Modulos,
					info_success : 'Suscripciones realizadas!',
					estado_suscripciones : estado_suscripciones
				}
				Grupo_Modulo.Listar_Modulos_Suscritos_Grupo(req.body.id_Grupo_Modulos).then(list_modulos => {
					// console.log("Lista de Modulos Suscritos: ",list_modulos);
					if (list_modulos!=null){
						data_response.suscritos=list_modulos;
					}else{
						data_response.suscritos=null;
					}
					Grupo_Modulo.Listar_Modulos_NO_Suscritos_Grupo(req.body.id_Grupo_Modulos).then(list_no_modulos => {
						if (list_no_modulos!=null){
							data_response.no_suscritos=list_no_modulos;
						}else{
							data_response.no_suscritos=null;
						}
						console.log(data_response);
						res.render('Gestionar_Grupo_Modulo/Suscribir_Modulo_Grupo_Modulo', data_response);
					});
				});
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface'});
		}
	},
	postEliminar_Modulo_Grupo_Modulo:function (req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Interface Eliminar_Modulo_Grupo_Modulo de Modulo a Grupo DashBoard');
			//primero consulto el codigo del grupo con este nombre_Grupo_Modulos
			Grupo_Modulo.Consultar_Grupo_Modulo(req.body.nombre_Grupo_Modulos).then(result_Grupo_Modulo => {
				// console.log("Albums: ",result_Grupo_Modulo);
				if (result_Grupo_Modulo!=null){
					// console.log(result_Grupo_Modulo);
					//Luego listo los modulos suscritos a este grupo
					data_response={
						nombre_Grupo_Modulos: req.body.nombre_Grupo_Modulos,
						id_Grupo_Modulos:result_Grupo_Modulo.id_Grupo_Modulos,
						Usuario:req.session.Persona,
						info_success : 'Listado de Modulos consultado correctamente!'
					}
					Grupo_Modulo.Listar_Modulos_Suscritos_Grupo(result_Grupo_Modulo.id_Grupo_Modulos).then(list_modulos => {
						// console.log("Lista de Modulos Suscritos: ",list_modulos);
						if (list_modulos!=null){
							console.log('true en Listar Suscritos a Grupo return');
							data_response.suscritos=list_modulos;
						}else{
							console.log('null en list_modulos');
							data_response.suscritos=null;
						}
						Grupo_Modulo.Listar_Modulos_NO_Suscritos_Grupo(result_Grupo_Modulo.id_Grupo_Modulos).then(list_no_modulos => {
							if (list_no_modulos!=null){
								console.log('true en Listar NO!! Suscritos a Grupo return');
								data_response.no_suscritos=list_no_modulos;
							}else{
								data_response.no_suscritos=null;
								console.log('null en list_NO_modulos');
							}
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							// console.log(data_response.suscritos.length);
							// console.log(data_response.no_suscritos.length);
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							// console.log(data_response.suscritos[0].Codigo_Nomenclatura_Modulo);
							// console.log(data_response.suscritos[1].Codigo_Nomenclatura_Modulo);
							// console.log('----------------$$$$$$$$$$$$$$$$$$$');
							res.render('Gestionar_Grupo_Modulo/Eliminar_Modulo_Grupo_Modulo', data_response);
						});
					});
				}else{
					console.log('else en listar modulos de grupo return');
					res.render('Gestionar_Grupo_Modulo/Eliminar_Modulo_Grupo_Modulo', {Usuario: req.session.Persona, info_error : 'Error Query al Listar Modulos suscritos al Grupo de Modulos!'});
				}
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	},
	deleteEliminar_Modulo_Grupo_Modulo:function (req, res, next) {
		var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
		var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
		// console.log('getIndex function');
		var Grupo_Modulo = new Class_Grupo_Modulo();
		var IGrupo_Modulo = new Interface_Grupo_Modulo();
		if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
			console.log('true implement Interface Eliminar_Modulo_Grupo_Modulo de Modulo a Grupo DashBoard');
			// console.log(req.body.suscritos);
			var Array_promise=[];
			for (var i = 1; i < req.body.suscritos.length; i++) {
				Array_promise.push(
					new Promise(function (response_promise, reject){
						Grupo_Modulo.Eliminar_Modulo_Grupo_Modulo(req.body.id_Grupo_Modulos,(req.body.suscritos[i])).then(resultado => {
							console.log("Resultado a promesa DELETE de 1 modulo: ",resultado.boolean);
							response_promise({boolean:(resultado.boolean)});
						});
					})
				);
			}
			Promise.all(Array_promise).then(function (restult_all_promises) {
				console.log(restult_all_promises);
				var estado_suscripciones = {};
				for (var i = 0; i < restult_all_promises.length; i++) {
					estado_suscripciones[req.body.suscritos[i]] = restult_all_promises[i].boolean;
				}
				data_response={
					Usuario: req.session.Persona,
					nombre_Grupo_Modulos: req.body.nombre_Grupo_Modulos,
					id_Grupo_Modulos:req.body.id_Grupo_Modulos,
					info_success : 'Suscripciones realizadas!',
					estado_suscripciones : estado_suscripciones
				}
				Grupo_Modulo.Listar_Modulos_Suscritos_Grupo(req.body.id_Grupo_Modulos).then(list_modulos => {
					// console.log("Lista de Modulos Suscritos: ",list_modulos);
					if (list_modulos!=null){
						data_response.suscritos=list_modulos;
					}else{
						data_response.suscritos=null;
					}
					Grupo_Modulo.Listar_Modulos_NO_Suscritos_Grupo(req.body.id_Grupo_Modulos).then(list_no_modulos => {
						if (list_no_modulos!=null){
							data_response.no_suscritos=list_no_modulos;
						}else{
							data_response.no_suscritos=null;
						}
						console.log(data_response);
						res.render('Gestionar_Grupo_Modulo/Eliminar_Modulo_Grupo_Modulo', data_response);
					});
				});
			});
		} else {
			// console.log('error en la interface IGrupo_Modulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface'});
		}
	}
};
