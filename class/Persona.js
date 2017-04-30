var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');

function Persona() {
	var int_identificacion;
	var str_nombres;
	var str_apellidos;
	var str_usuario;
	var str_password;
	var str_rol_usuario;
	// var fechaactual = new Date();
	// var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');
	// this.fecha_creacion = fecha;
	this.Registrar_Persona = function(int_identificacion, str_nombres, str_apellidos, str_usuario, str_password, int_rol_usuario) {

		ObjP = {
			identificacion_Persona: 1,
			nombres_Persona: 'Jorge Ivan',
			apellidos_Persona: 'Niño Monje',
			usuario_Persona: 'ivancho',
			password_Persona: 'ivancho',
			Rol_Persona_id_Rol_Persona: 1
		};
		// console.log(ObjP);

		var conn = require('../config_services/conn_mysql');
		// var db = mysql.createConnection(config);
		conn.connect();
		conn.query('INSERT INTO persona SET ?', ObjP, function(err, rows, fields) {
			if (err) {
				throw err;
				console.log('Error en query'+err);
			}
			conn.end();
		});
		console.log('require completado');
		console.log('Persona insertada correctamente.');
		return true; // boolean
	};

	this.Consultar_Persona = function(int_identificacion) {
		console.log('consult person');
		return this; //persona
	};
	this.Modificar_Persona = function(int_identificacion, str_nombres, str_apellidos, str_usuario, str_password, str_rol_usuario) {
		console.log('Modificar_Persona');
		return true; // boolean
	};
	this.Inhabilitar_Persona = function(int_identificacion) {

		return true; // boolean
	};
	return this;
}
module.exports = Persona;