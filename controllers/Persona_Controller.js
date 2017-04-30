var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	//funciones del controlador
	getPersonas: function(req, res, next) {
		var Class_Persona = require('../class/Persona');
		var Interface_Persona = require('../interfaces/IPersona');
		
		var Persona = new Class_Persona();
		var IPersona = new Interface_Persona();
		if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
			
			console.log('true implementr persona');
			Persona.Consultar_Persona(12);
			



			res.render('index', {
				title: 'Express My APP PIR',
				ms: 'get persona'
			});

		} else {
			// console.log('error en la interface IPersona');
		}
	},
	getNew_Personas: function(req, res, next) {
		res.render('index', {
			title: 'Express My APP PIR',
			ms: 'get NEW PERSONA'
		});
	}
};