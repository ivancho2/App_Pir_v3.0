var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');

function Modulo() {
	str_Codigo_Nomenclatura_Modulo = '';
	str_nombre_Modulo = '';
	str_descripcion_Modulo = '';
	int_estado_switch_Modulo = 0;
	str_estado_Modulo = '';
	int_Persona_identificacion_Persona = 0;
}

Modulo.prototype.Registrar_Modulo = function(str_Codigo_Nomenclatura_Modulo, str_nombre_Modulo, str_descripcion_Modulo, int_estado_switch_Modulo, str_estado_Modulo, int_Persona_identificacion_Persona) {
// mysql> insert into modulo values ('ESP8266_234TEST' ,'nombre_modulotest' ,'descripcion modulo test',1,'activo',1);
	return new Promise(function (response, reject){
		ObjP = {
			Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo,
			nombre_Modulo: str_nombre_Modulo,
			descripcion_Modulo: str_descripcion_Modulo,
			estado_switch_Modulo: int_estado_switch_Modulo,
			estado_Modulo: str_estado_Modulo,
			Persona_identificacion_Persona: int_Persona_identificacion_Persona
		};
		prot
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('INSERT INTO modulo SET ?', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				console.log('Modulo insertada correctamente.');
				response({ boolean:true});
				conn.end();
			}
		});
		// console.log('Fin regi Modulo');
	});
};
Modulo.prototype.Consultar_Modulo = function(str_Codigo_Nomenclatura_Modulo) {
	return new Promise(function (response, reject){
		ObjP = {
			Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo
		};
		console.log('consult modul');
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT * FROM Modulo WHERE ? LIMIT 1', ObjP, function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({ Modulo : null });
			} else {
				if (rows.length) {
					console.log('Modulo Consultado correctamente.');
					console.log(rows);
					var ObjA = {
						Codigo_Nomenclatura_Modulo: rows[0].Codigo_Nomenclatura_Modulo,
						nombre_Modulo: rows[0].nombre_Modulo,
						descripcion_Modulo: rows[0].descripcion_Modulo,
						estado_switch_Modulo: rows[0].estado_switch_Modulo,
						estado_Modulo: rows[0].estado_Modulo,
						Persona_identificacion_Persona: rows[0].Persona_identificacion_Persona
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
Modulo.prototype.Modificar_Modulo = function(str_Codigo_Nomenclatura_Modulo, str_nombre_Modulo, str_descripcion_Modulo) {
	console.log('Modificar_Modulo');
	return new Promise(function (response, reject){
		// str_Codigo_Nomenclatura_Modulo, str_nombre_Modulo, str_descripcion_Modulo, int_estado_switch_Modulo, str_estado_Modulo, int_Persona_identificacion_Persona) {
		console.log(str_Codigo_Nomenclatura_Modulo);
		ObjP = {
			nombre_Modulo: str_nombre_Modulo,
			descripcion_Modulo: str_descripcion_Modulo
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('UPDATE modulo SET ? WHERE ?', [ ObjP, {Codigo_Nomenclatura_Modulo:str_Codigo_Nomenclatura_Modulo}], function(err, rows, fields) {
			if (err) {
				console.log('error en UPDATE');
				console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				console.log('Modulo modificado correctamente.');
				response({ boolean:true});
				conn.end();
			}
		});
		// console.log('Fin regi Modulo');
	});
};
Modulo.prototype.Eliminar_Modulo = function(str_Codigo_Nomenclatura_Modulo) {
	return new Promise(function (response, reject){
		ObjP = {
			estado_Modulo:'inhabilitado'
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('UPDATE Modulo SET ? WHERE ?', [ObjP, {Codigo_Nomenclatura_Modulo:str_Codigo_Nomenclatura_Modulo}], function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({boolean:false});
			} else {
				console.log('Modulo eliminada correctamente.');
				conn.end();
				response({boolean:true});
			}
		});
	});
};
module.exports = Modulo;
