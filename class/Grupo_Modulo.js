var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var dateFormat = require('dateformat');

function Grupo_Modulos(){
	int_id_Grupo_Modulos=0;
	str_nombre_Grupo_Modulos='';
	str_descripcion_Grupo_Modulos='';
	int_estado_switch_Grupo_Modulos=0;
	int_Persona_identificacion_Persona=0;
}

Grupo_Modulos.prototype.Registrar_Grupo_Modulo = function(str_nombre_Grupo_Modulos, str_descripcion_Grupo_Modulos, int_estado_switch_Grupo_Modulos, int_Persona_identificacion_Persona) {
	return new Promise(function (response, reject){
		ObjP = {
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos,
			descripcion_Grupo_Modulos : str_descripcion_Grupo_Modulos,
			estado_switch_Grupo_Modulos : int_estado_switch_Grupo_Modulos,
			Persona_identificacion_Persona : int_Persona_identificacion_Persona
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
		console.log(ObjP);
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
		console.log('ID del grupo a modificar: '+int_id_Grupo_Modulos);
		ObjP = {
			nombre_Grupo_Modulos : str_nombre_Grupo_Modulos,
			descripcion_Grupo_Modulos : str_descripcion_Grupo_Modulos
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		// console.log('en fun res');
		conn.connect();
		conn.query('UPDATE grupo_modulos SET ? WHERE ?', [ ObjP, {id_Grupo_Modulos: int_id_Grupo_Modulos}], function(err, rows, fields) {
			if (err) {
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
Grupo_Modulos.prototype.Eliminar_Grupo_Modulo = function(int_id_Grupo_Modulos) {
	return new Promise(function (response, reject){
		ObjP = {
			id_Grupo_Modulos : int_id_Grupo_Modulos
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
Grupo_Modulos.prototype.Suscribir_Modulo_Grupo_Modulo= function (int_id_Grupo_Modulos,str_Codigo_Nomenclatura_Modulo, int_Persona_identificacion_Persona) {
	return new Promise(function (response, reject){
		var d=Date().split(' ');
		var timestamp=d[0]+'-'+d[1]+'-'+d[2]+'-'+d[3]+' '+d[4];
		ObjP = {
			fecha_Suscripcion: timestamp,
			Grupo_Modulos_id_Grupo_Modulos: int_id_Grupo_Modulos,
			Modulo_Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo,
			Persona_identificacion_Persona: int_Persona_identificacion_Persona
		};
		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('INSERT INTO suscripcion_modulo_grupo_modulos SET ?', [ObjP], function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({boolean:false});
			} else {
				console.log('Suscripcion de Modulo a Grupo realizado correctamente.');
				conn.end();
				response({boolean:true});
			}
		});
	});
};
Grupo_Modulos.prototype.Eliminar_Modulo_Grupo_Modulo= function (int_id_Grupo_Modulos,str_Codigo_Nomenclatura_Modulo) {
	return new Promise(function (response, reject){
		ObjP = {
			Grupo_Modulos_id_Grupo_Modulos: int_id_Grupo_Modulos
		};
		ObjA = {
			Modulo_Codigo_Nomenclatura_Modulo: str_Codigo_Nomenclatura_Modulo
		};

		console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		console.log('entrando a delete en eliminar suscripcion_modulo_grupo_modulos');
		conn.query('DELETE FROM suscripcion_modulo_grupo_modulos WHERE ? AND ?', [ObjP,ObjA], function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({boolean:false});
			} else {
				console.log('Eliminado Modulo de Grupo realizado correctamente.');
				conn.end();
				response({boolean:true});
			}
		});
	});
};
Grupo_Modulos.prototype.Listar_Modulos_Suscritos_Grupo= function (int_id_Grupo_Modulos) {
	return new Promise(function (response, reject){
		ObjP = {
			Grupo_Modulos_id_Grupo_Modulos : int_id_Grupo_Modulos
		};
		// console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT m.Codigo_Nomenclatura_Modulo, m.nombre_Modulo FROM modulo m INNER JOIN suscripcion_modulo_grupo_modulos sm ON m.Codigo_Nomenclatura_Modulo = sm.Modulo_Codigo_Nomenclatura_Modulo WHERE ?', [ObjP], function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({ Modulo : null });
			} else {
				if (rows.length) {
					console.log('Lista a Grupo de Modulos Consultado correctamente.');
					ObjA=rows;
					console.log(ObjA);
					conn.end();
					response(ObjA);
				}else{
					console.log('NINGUN MODULO SUSCRITO ENCONTRADO');
					conn.end();
					response(null);
				}
			}
		});
	});
};
Grupo_Modulos.prototype.Listar_Modulos_NO_Suscritos_Grupo= function (int_id_Grupo_Modulos) {
	return new Promise(function (response, reject){
		// console.log(ObjP);
		var conf_mysql = require('../config_services/conf_mysql');
		var conn=mysql.createConnection(conf_mysql);
		conn.connect();
		conn.query('SELECT mno.* FROM (SELECT m.Codigo_Nomenclatura_Modulo, m.nombre_Modulo FROM modulo m LEFT JOIN suscripcion_modulo_grupo_modulos sm ON m.Codigo_Nomenclatura_Modulo = sm.Modulo_Codigo_Nomenclatura_Modulo WHERE sm.Grupo_Modulos_id_Grupo_Modulos = ?) msi RIGHT JOIN modulo mno ON mno.Codigo_Nomenclatura_Modulo=msi.Codigo_Nomenclatura_Modulo WHERE  msi.Codigo_Nomenclatura_Modulo IS NULL', int_id_Grupo_Modulos , function(err, rows, fields) {
			if (err) {
				console.log('error en la consulta');
				conn.end();
				response({ Modulo : null });
			} else {
				if (rows.length) {
					console.log('Lista (NO SUSCRITOS!) a Grupo de Modulos Consultado correctamente.');
					ObjA=rows;
					console.log(ObjA);
					response(ObjA);
					conn.end();
				}else{
					console.log('NINGUN MODULO NO-SUSCRITO ENCONTRADO');
					conn.end();
					response(null);
				}
			}
		});
	});
};
module.exports = Grupo_Modulos;
