var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');


// id_Grupo_Modulos               | int(11)     | NO   | PRI | NULL    | auto_increme
// nombre_Grupo_Modulos           | varchar(45) | YES  |     | NULL    |
// descripcion_Grupo_Modulos      | varchar(50) | YES  |     | NULL    |
// estado_switch_Grupo_Modulos    | tinyint(1)  | YES  |     | NULL    |
// Persona_identificacion_Persona | int(11)     | NO   | PRI | NULL    |
function Grupo_Modulos(){
	int_id_Grupo_Modulos=0;
	str_nombre_Grupo_Modulos='';
	str_descripcion_Grupo_Modulos='';
	int_estado_switch_Grupo_Modulos=0;
	int_Persona_identificacion_Persona=0;
}

Grupo_Modulos.prototype.Registrar_Grupo_Modulo = function(int_id_Grupo_Modulos, str_nombre_Grupo_Modulos, str_descripcion_Grupo_Modulos, int_estado_switch_Grupo_Modulos, int_Persona_identificacion_Persona) {
	return new Promise(function (response, reject){
		ObjP = {
			id_Grupo_Modulos : int_id_Grupo_Modulos;
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos;
			descripcion_Grupo_Modulos : str_descripcion_Grupo_Modulos;
			estado_switch_Grupo_Modulos : int_estado_switch_Grupo_Modulos;
			Persona_identificacion_Persona : int_Persona_identificacion_Persona;
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('INSERT INTO grupo_modulos SET ?', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en el insert Grupo_Modulos');
				console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				console.log('Grupo de Modulos insertada correctamente.');
				response({ boolean:true});
				conn.end();
			}
		});
		console.log('Fin regi Grupo Modulo');
	});
};
Grupo_Modulos.prototype.Consultar_Grupo_Modulo = function(str_nombre_Grupo_Modulos) {
	return new Promise(function (response, reject){
		ObjP = {
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos
		};
		console.log('consult grupo modulos');
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT * FROM grupo_modulos WHERE ? LIMIT 1', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({ Modulo : null });
			} else {
				if (rows.length) {
					console.log('Grupo de Modulos Consultado correctamente.');
					console.log(rows);
					var ObjA = {
						id_Grupo_Modulos: rows[0].id_Grupo_Modulos,
						nombre_Grupo_Modulos: rows[0].nombre_Grupo_Modulos,
						descripcion_Grupo_Modulos: rows[0].descripcion_Grupo_Modulos,
						estado_switch_Grupo_Modulos: rows[0].estado_switch_Grupo_Modulos,
						Persona_identificacion_Persona: rows[0].Persona_identificacion_Persona,
					};
					console.log(ObjA);
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
Grupo_Modulos.prototype.Modificar_Grupo_Modulo = function(int_id_Grupo_Modulos, str_nombre_Grupo_Modulos, str_descripcion_Grupo_Modulos) {
	console.log('Modificar Grupo de Modulo');
	return new Promise(function (response, reject){
		console.log(int_id_Grupo_Modulos);
		ObjP = {
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos,
			descripcion_Grupo_Modulos : str_descripcion_Grupo_Modulos
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
			if (err) {
				conn.query('UPDATE grupo_modulos SET ? WHERE ?', [ ObjP, {nombre_Grupo_Modulos: str_nombre_Grupo_Modulos}], function(err, rows, fields) {
				console.log('error en UPDATE');
				console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				console.log('Grupo de Modulos modificado correctamente.');
				response({ boolean:true});
				conn.end();
			}
		});
		// console.log('Fin regi Modulo');
	});
};
Grupo_Modulos.prototype.Eliminar_Grupo_Modulo = function(str_Codigo_Nomenclatura_Modulo) {
	return new Promise(function (response, reject){
		ObjP = {
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('DELETE FROM grupo_modulos WHERE ?', [ObjP], function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({boolean:false});
			} else {
				console.log('Grupo de Modulos eliminada correctamente.');
				conn.end();
				response({boolean:true});
			}
		});
	});
};
module.exports = Grupo_Modulos;
