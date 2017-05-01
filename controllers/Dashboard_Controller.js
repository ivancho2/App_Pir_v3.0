var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
	//funciones del controlador
	home: function(req, res) {
		console.log('en home:'+req.session.usuario);
		res.render('dashboard_home');
	}
};
