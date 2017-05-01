var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	//funciones del controlador
	getIndex: function(req, res, next) {

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
	},
	//Rutas para DASHBOARD

	//Usuario
		//Registrar_Usuario
	getRegistrar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Registrar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
		//Contular_Usuario
		//lee datos post y retorna el usuario consultado
	postConsultar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Consultar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	//Modificar_Usuario
	//lee datos put y modifica el usuario
	putModificar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Modificar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	},
	//Inhabilitar_Usuario
	//lee datos delete y inhabilita el usuario en el sistema
	deleteInhabilitar_Usuario: function(req, res, next) {
		res.render('Gestionar_Usuario/Inhabilitar_Usuario', {Nombre: 'Jorge Ivan Niño'});
	}
};

/*

this.postNuevaPersona = function(req, res, next) {
            var salt = bcrypt.genSaltSync(10);
            var password = bcrypt.hashSync(req.body.Apellido, salt);
            var fechaactual = new Date();
            var fecha = dateFormat(fechaactual, 'yyyy-mm-dd h:MM:ss');


            var user = {
                nombre: req.body.Nombre,
                identificacion: req.body.Identificacion,
                password: password,
                fecha_creacion: fecha
            };

            var config = require('.././database/config');
            var db = mysql.createConnection(config);
            db.connect();

            db.query('INSERT INTO usuarios SET ?', user, function(err, rows, fields) {
                if (err) throw err;

            });

            ObjP = {
                Identificacion: req.body.Identificacion,
                Nombre: req.body.Nombre,
                Apellido: req.body.Apellido,
                Telefono: req.body.Telefono,
                fecha_creacion: fecha,
                fkRol: 3
            };


            var config = require('.././database/config')

            var db = mysql.createConnection(config);
            db.connect();
            db.query('INSERT INTO persona SET ?', ObjP, function(err, rows, fields) {
                if (err) throw err;
                db.end();
            });

            res.render('persona/nuevapersona', {
                info: 'Persona creada correctamente'
            });

            req.flash('info', 'Se ha registrado correctamente, ya puede iniciar sesion');
            return res.redirect('/auth/signin');


        }*/
