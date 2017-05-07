var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');

function Persona() {

	this.int_identificacion;
	this.str_nombres;
	this.str_apellidos;
	this.str_usuario;
	this.str_password;
	this.str_rol_usuario;
	// var fechaactual = new Date();
	// var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');
	// this.fecha_creacion = fecha;
	this.Registrar_Persona = function(int_identificacion, str_nombres, str_apellidos, str_usuario, str_password, int_rol_usuario) {

		return new Promise(function (response, reject){
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
			// console.log('en fun res');
			conn.connect();
			conn.query('INSERT INTO persona SET ?', ObjP, function(err, rows, fields) {
				if (err) {
					console.log('error en la consulta');
					conn.end();
					response({ boolean:false});
				} else {
					console.log('Persona insertada correctamente.');
					response({ boolean:true});
					conn.end();
				}
			});
			// console.log('Fin regi persona');
		});
	};
	this.Consultar_Persona = function(int_identificacion) {

		return new Promise(function (response, reject){
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
					response({ Persona : null });
				} else {
					if (rows.length) {
						console.log('Persona Consultada correctamente.');
						console.log(rows);
						var ObjA= {
							identificacion_Persona : rows[0].identificacion_Persona,
							nombres_Persona : rows[0].nombres_Persona,
							apellidos_Persona : rows[0].apellidos_Persona,
							usuario_Persona : rows[0].usuario_Persona,
							password_Persona : rows[0].password_Persona,
							Rol_Persona_id_Rol_Persona : rows[0].Rol_Persona_id_Rol_Persona
						};
						// console.log(ObjA);
						conn.end();
						response(ObjA);
					}else{
						conn.end();
						response(null);
					}
				}
			});
		});
	};
	this.Modificar_Persona = function(int_identificacion, str_nombres, str_apellidos, str_usuario, str_password, int_rol_usuario) {
		console.log('Modificar_Persona');
		return new Promise(function (response, reject){
			ObjP = {
				nombres_Persona: str_nombres,
				apellidos_Persona: str_apellidos,
				usuario_Persona: str_usuario,
				password_Persona: str_password,
				Rol_Persona_id_Rol_Persona: int_rol_usuario
			};
			console.log('Modificar_Persona promise');
			// console.log(ObjP);
			var conf_mysql = require('../config_services/conf_mysql');
			var conn=mysql.createConnection(conf_mysql);
			console.log('en fun res');
			console.log( [ObjP, {identificacion_Persona : int_identificacion}]);
			conn.connect();
			conn.query('UPDATE persona SET ? WHERE ?',[ObjP, {identificacion_Persona : int_identificacion}]  , function(err, rows, fields) {
				if (err) {
					console.log('error en la consulta');
					conn.end();
					response({boolean:false});
				} else {
					console.log('Persona actualizada correctamente.');
					conn.end();
					response({boolean:true});
				}
			});
			// console.log('Fin regi persona');
		});
	};
	this.Inhabilitar_Persona = function(int_identificacion) {

		return new Promise(function (response, reject){
			ObjP = {
				identificacion_Persona: int_identificacion
			};
			console.log(ObjP);
			var conf_mysql = require('../config_services/conf_mysql');
			var conn=mysql.createConnection(conf_mysql);
			conn.connect();
			conn.query('DELETE FROM persona WHERE ?', ObjP, function(err, rows, fields) {
				if (err) {
					console.log('error en la consulta');
					conn.end();
					response({boolean:false});
				} else {
					console.log('Persona eliminada correctamente.');
					conn.end();
					response({boolean:true});
				}
			});
		});
	};
	return this;
}
module.exports = Persona;
