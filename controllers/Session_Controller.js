var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
  Login: function(req, res) {
    if (!(typeof req.session.Persona!='undefined') || req.session.Persona==null) {
      console.log('dentro de middleware, metodo: ', req.method);
      var conf_mysql = require('../config_services/conf_mysql');
      var conn=mysql.createConnection(conf_mysql);
      conn.connect();
      conn.query('SELECT * FROM persona WHERE usuario_Persona=? and password_Persona=? LIMIT 1', [req.body.usuario,req.body.password], function(err, rows, fields) {
        if (err) {
          console.log('error en la consulta');
          conn.end();
          return null;
        } else {
          console.log('Persona Consultada correctamente.');
          console.log(rows);
          var data_session=rows;
          conn.end();
          // console.log(data_session);//todo el set de resultado
          // console.log(data_session[0]);//primera encontrada
          if(data_session.length){
            req.session.Persona=data_session[0];
            console.log('ID Persona: '+data_session[0].identificacion_Persona);
            res.redirect('/Dashboard/#');
          }else{
            req.flash('info', 'Usuario o Password incorrecto!')
            res.redirect('/Login');
          }
        }
      });
    } else {
      console.log('error en la interface IPersona');
    }
  },
  Logout: function(req, res, next) {
    //destruir credenciales
    if (typeof req.session.Persona!='undefined') {
      console.log('Session Destruida');
      req.session.Persona=null;
    }
    // req.session.usuario=null;
    // req.session.password=null;
    res.redirect('../Login');
  }
}
