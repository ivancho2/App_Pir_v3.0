var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');
var client_mqtt=require('../config_services/mqtt');

function Modulo() {
	str_Codigo_Nomenclatura_Modulo = '';
	str_nombre_Modulo = '';
	str_descripcion_Modulo = '';
	int_estado_switch_Modulo = 0;
	int_Persona_identificacion_Persona = 0;
}

Modulo.prototype.Registrar_Modulo = function(str_Codigo_Nomenclatura_Modulo, str_nombre_Modulo, str_descripcion_Modulo, int_estado_switch_Modulo, int_Persona_identificacion_Persona) {
	// mysql> insert into modulo values ('ESP8266_234TEST' ,'nombre_modulotest' ,'descripcion modulo test',1,'activo',1);
	return new Promise(function (response, reject){
		ObjP = {
			Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo,
			nombre_Modulo: str_nombre_Modulo,
			descripcion_Modulo: str_descripcion_Modulo,
			estado_switch_Modulo: int_estado_switch_Modulo,
			Persona_identificacion_Persona: int_Persona_identificacion_Persona
		};
		//console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('INSERT INTO modulo SET ?', ObjP, function(err, rows, fields) {
			if (err) {
				//console.log('error en la consulta');
				//console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				//console.log('Modulo insertada correctamente.');
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
		//console.log('consult modul');
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT * FROM Modulo WHERE ? LIMIT 1', ObjP, function(err, rows, fields) {
			if (err) {
				//console.log('error en la consulta');
				conn.end();
				response({ Modulo : null });
			} else {
				if (rows.length) {
					//console.log('Modulo Consultado correctamente.');
					//console.log(rows);
					var ObjA = {
						Codigo_Nomenclatura_Modulo: rows[0].Codigo_Nomenclatura_Modulo,
						nombre_Modulo: rows[0].nombre_Modulo,
						descripcion_Modulo: rows[0].descripcion_Modulo,
						estado_switch_Modulo: rows[0].estado_switch_Modulo,
						Persona_identificacion_Persona: rows[0].Persona_identificacion_Persona
					};
					//console.log(ObjA);
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
	//console.log('Modificar_Modulo');
	return new Promise(function (response, reject){
		// str_Codigo_Nomenclatura_Modulo, str_nombre_Modulo, str_descripcion_Modulo, int_estado_switch_Modulo,int_Persona_identificacion_Persona) {
		//console.log(str_Codigo_Nomenclatura_Modulo);
		ObjP = {
			nombre_Modulo: str_nombre_Modulo,
			descripcion_Modulo: str_descripcion_Modulo
		};
		//console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('UPDATE modulo SET ? WHERE ?', [ ObjP, {Codigo_Nomenclatura_Modulo:str_Codigo_Nomenclatura_Modulo}], function(err, rows, fields) {
			if (err) {
				//console.log('error en UPDATE');
				//console.log(err);
				conn.end();
				response({ boolean:false});
			} else {
				//console.log('Modulo modificado correctamente.');
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
			Codigo_Nomenclatura_Modulo:str_Codigo_Nomenclatura_Modulo
		};
		//console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('DELETE FROM  Modulo WHERE ?', ObjP, function(err, rows, fields) {
			if (err) {
				//console.log('error en la consulta');
				conn.end();
				response({boolean:false});
			} else {
				//console.log('Modulo eliminado correctamente.');
				conn.end();
				response({boolean:true});
			}
		});
	});
};
Modulo.prototype.Listar_Modulos = function() {
	return new Promise(function (response, reject){
		ObjP = {};
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT * FROM  Modulo', function(err, rows, fields) {
			if (err) {
				//console.log('error en la consulta');
				conn.end();
				response(null);
			} else {
				if (rows.length) {
					ObjP=rows;
					conn.end();
					// console.log('Listar_Modulos');
					// console.log(ObjP);
					// console.log('------------------------------');
					response(ObjP);
				}else{
					//console.log('error query Listar_Modulos');
					conn.end();
					response(null);
				}
			}
		});
	});
};
Modulo.prototype.Cambiar_Estado_Switch = function(str_Codigo_Nomenclatura_Modulo, int_estado_switch_Modulo, int_Persona_identificacion_Persona) {
	//console.log('Cambiar_Estado_Switch');
	return new Promise(function (response, reject){
		//console.log(str_Codigo_Nomenclatura_Modulo);
		ObjP = {
			estado_switch_Modulo: int_estado_switch_Modulo
		};
		//console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('UPDATE modulo SET ? WHERE ?', [ ObjP, {Codigo_Nomenclatura_Modulo:str_Codigo_Nomenclatura_Modulo}], function(err, rows, fields) {
			if (err) {
				//console.log('error en UPDATE');
				//console.log(err);
				conn.end();
				response(false);
			} else {
				//console.log('Cambio Switch de Modulo realizado correctamente.');
				console.log('emiiendo desde socket a mqtt topic',str_Codigo_Nomenclatura_Modulo, ' el valor ',int_estado_switch_Modulo);
				client_mqtt.publish_mqtt(str_Codigo_Nomenclatura_Modulo,int_estado_switch_Modulo);
				// ------- generando el reporte
				var d=Date().split(' ');
				var timestamp=d[0]+'-'+d[1]+'-'+d[2]+'-'+d[3]+' '+d[4];
				ObjA = {
					fecha_Reporte_Cambio_Estado_Modulo: timestamp,
					nuevo_estado_switch: int_estado_switch_Modulo,
					Modulo_Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo,
					Persona_identificacion_Persona: int_Persona_identificacion_Persona
				};
				conn.query('INSERT INTO reporte_cambio_estado_modulo SET ?', ObjA, function(err, rows, fields) {
					if (err) {
						console.log('error en Insert Reporte Cambio Sw Modulo');
						//console.log(err);
						conn.end();
						response(false);
					} else {
						//console.log('Insert Reporte Cambio Sw Modulo correctamente');
						conn.end();
						response(true);
					}
				});
				// -------
			}
		});
	});
};

module.exports = Modulo;
