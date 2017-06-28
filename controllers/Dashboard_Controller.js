var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	//funciones del controlador
	dashboard: function(req, res) {
		// res.render('dashboard_home',{Usuario: req.session.Persona});
		console.log('antes otro require');
		var client_mqtt=require('../config_services/mqtt');
		console.log('despuesde otro require');
		console.log(client_mqtt.vara);

		var Class_Modulo = require('../class/Modulo');
		var Interface_Modulo = require('../interfaces/IModulo');
		console.log('getIndex function');
		var Modulo = new Class_Modulo();
		var IModulo = new Interface_Modulo();
		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
		console.log('true implementr Modulo DashBoard');
			Modulo.Listar_Modulos().then(lista_modulos => {
			// console.log("Listar_Modulos: ",lista_modulos);
				if (lista_modulos!=null) {
					// console.log('true en Listar_Modulos retorno');
					var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
					var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
					var Grupo_Modulo = new Class_Grupo_Modulo();
					var IGrupo_Modulo = new Interface_Grupo_Modulo();
					if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Grupo_Modulo implementeme la interface IGrupo_Modulo
					// console.log('true implement Interface Suscripcion_listar_Modulos de Modulo a Grupo DashBoard');
						//primero consulto el codigo del grupo con este nombre_Grupo_Modulos
						Grupo_Modulo.Listar_Grupo_Modulos().then(lista_grupo_modulos => {
							if (lista_grupo_modulos!=null){
							console.log('true en Listar NO!! Suscritos a Grupo return');
							console.log('Lista modulos: ',lista_modulos);
							console.log('Lista grupos: ',lista_grupo_modulos);
								// res.render('dashboard_home',{Usuario: req.session.Persona});
								res.render('dashboard_home',{Usuario: req.session.Persona,Lista_Modulos:lista_modulos,Lista_Grupo_Modulos:lista_grupo_modulos});
							}else{
								res.render('dashboard_home',{Usuario: req.session.Persona,Lista_Modulos:lista_modulos});
							}
						});
					}	else {
					console.log('error en la interface IGrupo_Modulo');
						res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface Grupo_Modulo' });
					}
				}else{
				//console.log('else en consulta de Modulos');
					res.render('dashboard_home',{Usuario: req.session.Persona, info_error : 'Error Query al Listar los Modulos, probablemente no existe Modulos registrados.'});
				}
			});
		} else {
			// console.log('error en la interface IModulo');
			res.render('error', {Usuario: req.session.Persona,info_error : 'Error en implementacion de Interface' });
		}
	}
};
