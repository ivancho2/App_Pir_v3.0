var mysql = require('mysql');
var dateFormat = require('dateformat');
var implements = require('implements');

module.exports = {
  test: function(req, res) {
    var Class_Persona = require('../class/Persona');
    var Interface_Persona = require('../interfaces/IPersona');

    var Persona = new Class_Persona();
    var IPersona = new Interface_Persona();
    console.log(Persona);
    console.log('antes de implement');
    if (implements(Persona, IPersona) == true) { //a la clase Persona implementeme la interface IPersona
      console.log('dentro de implements');
      res.render('index',{info : req.flash('info')});
    }
  }
}
