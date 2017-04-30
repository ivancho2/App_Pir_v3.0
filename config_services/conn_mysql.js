var mysql = require('mysql');

var config = {
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'app_pir'
};
console.log('coneccion mysql creada');
module.exports = mysql.createConnection(config);

/// estilo de conexion a la base de datos implementando esta clase
/*
var config = require('.././database/config')
var db = mysql.createConnection(config);
db.connect();
db.query('SELECT * FROM cliente inner join persona on Identificacion = fkPersona inner join Rol on fkRol = idRol and idRol=3', function(err, rows, fields) {
	if (err) throw err;

	Agenda = rows;
	db.end();
	res.render('agenda/agenda', {
		Agenda: Agenda
	});
});
*/