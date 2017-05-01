var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	//funciones del controlador
	home: function(req, res, next) {

		//consultar todos los modulos, grupos de modulos, notificaciones, reportes de
		//cambios de estado y cargarlos a un array para renderizarlos en JADE
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
		console.log('getIndex function');
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
			console.log('true implementr persona DashBoard');
			Persona.Registrar_Persona(3, 'jo', 'nin', 'ivanc', 'ivanc', 1);
			res.render('index', {
				title: 'Express My APP PIR',
				ms: 'get persona'
			});
		} else {
			// console.log('error en la interface IPersona');
		}
		// res.render('template', { Nombre: 'Jorge Ivan Niño' });
	}
};
