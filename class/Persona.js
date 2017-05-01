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
			identificacion_Persona: int_identificacion,
			nombres_Persona: str_nombres,
			apellidos_Persona: str_apellidos,
			usuario_Persona: str_usuario,
			password_Persona: str_password,
			Rol_Persona_id_Rol_Persona: int_rol_usuario
		};
		// console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('INSERT INTO persona SET ?', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
			} else {
				console.log('Persona insertada correctamente.');
				conn.end();
			}
		});
		return true;
	};

	this.Consultar_Persona = function(int_identificacion) {
		ObjP = {
			identificacion_Persona: int_identificacion
		};
		console.log('consult person');
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT * FROM persona WHERE ? LIMIT 1', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				return null;
			} else {
				console.log('Persona Consultada correctamente.');
				console.log(row);
				conn.end();
				return this; //persona
			}
		});

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
