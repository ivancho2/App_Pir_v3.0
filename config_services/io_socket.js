var implements = require('implements');
module.exports = function(server) {

  var online=0;
  io = require('socket.io')(server);
  io.on('connection', function(socket){
    online++;
    socket.on('event', function(data){
      console.log('impresion de evento en sockeet modulo');
    });
    socket.on('disconnect', function(){
      online--;
      console.log('Un Cliente se ha desconectado del Socket');
      io.sockets.emit('message','Clientes en Linea #'+online);
    });
    var address = socket.handshake.address;
    var idx = address.lastIndexOf(':');
    if (~idx && ~address.indexOf('.'))
    address = address.slice(idx + 1);

    console.log('Alguien se ha conectado '+ address);
    io.sockets.emit('message','Un Cliente se ha Conectado al Socket');
    io.sockets.emit('message','Clientes en Linea # '+online);

    //si alguien se conecta y solicita las listas de datos
    socket.on('Solicitud_Listas', function() {
      console.log('solicitaron listas');
      Listar_Modulos().then(lista_modulos => {
        // console.log('despues de promesa');
        // console.log(lista_modulos);
        if (lista_modulos!=null) {
          socket.emit('Lista_Modulos',lista_modulos);
        } else {
          console.log('errro al cargar lista de modulos');
        }
      });
    });
    //   - si cambia desde el DOM. cambiarlo en todos
    socket.on('Cambiar_Estado_Modulo', function(data) {
      console.log('Cambiar_Estado_Modulo');
      console.log(data);
      Cambiar_Estado_Modulo(data.str_Codigo_Nomenclatura_Modulo, data.int_estado_switch_Modulo, data.int_Persona_identificacion_Persona).then(state => {
        if (state) {
          io.sockets.emit('UPDATE_Cambiar_Estado_Modulo', data);
        }
      });
    });
    socket.on('Cambiar_Estado_Grupo', function(data) {
      console.log('Cambiar_Estado_Grupo');
      console.log(data);
      Cambiar_Estado_Grupo(data.int_id_Grupo_Modulos,data.int_estado_switch_Grupo_Modulos, data.int_Persona_identificacion_Persona).then(state => {
        if (state) {
          io.sockets.emit('UPDATE_Cambiar_Estado_Grupo', data);
        }
      });
    });

    socket.on('message', function(data) {
      console.log('-------------------');
      console.log(data);
      console.log('-------------------');
    });
  });
}


function Listar_Modulos() {
  return new Promise(function (response, reject){
    var Class_Modulo = require('../class/Modulo');
    var Interface_Modulo = require('../interfaces/IModulo');
    //console.log('getIndex function');
    var Modulo = new Class_Modulo();
    var IModulo = new Interface_Modulo();
    if (implements(Modulo, IModulo) == true) {
      Modulo.Listar_Modulos().then(List_Modulos => {
        if (List_Modulos!=null) {
          // console.log(List_Modulos);
          response(List_Modulos);
        }else{
          console.log('else en registro return');
          response(null);
        }
      });
    }else{
      response(null);
    }
  });
}

function Listar_Grupos() {
  return new Promise(function (response, reject){
    var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
    var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
    // console.log('getIndex function');
    var Grupo_Modulo = new Class_Grupo_Modulo();
    var IGrupo_Modulo = new Interface_Grupo_Modulo();

    if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
      Grupo_Modulo.Listar_Grupo_Modulos().then(List_Grupo_Modulos => {
        if (List_Grupo_Modulos!=null) {
          // console.log(List_Modulos);
          response(List_Grupo_Modulos);
        }else{
          console.log('else en registro return');
          response(null);
        }
      });
    }else{
      response(null);
    }
  })
}

function Cambiar_Estado_Modulo(str_Codigo_Nomenclatura_Modulo, int_estado_switch_Modulo, int_Persona_identificacion_Persona) {
  return new Promise(function (response, reject){
    var Class_Modulo = require('../class/Modulo');
    var Interface_Modulo = require('../interfaces/IModulo');
    //console.log('getIndex function');
    var Modulo = new Class_Modulo();
    var IModulo = new Interface_Modulo();
    if (implements(Modulo, IModulo) == true) {
      Modulo.Cambiar_Estado_Switch(str_Codigo_Nomenclatura_Modulo,int_estado_switch_Modulo, int_Persona_identificacion_Persona).then(state => {
        if (state!=false) {
          response(true);
        }else{
          console.log('else en registro return');
          response(false);
        }
      });
    }else{
      response(false);
    }
  });
}

function Cambiar_Estado_Grupo(int_id_Grupo_Modulos,int_estado_switch_Grupo_Modulos, int_Persona_identificacion_Persona) {
  return new Promise(function (response, reject){
    var Class_Grupo_Modulo = require('../class/Grupo_Modulo');
    var Interface_Grupo_Modulo = require('../interfaces/IGrupo_Modulo');
    // console.log('getIndex function');
    var Grupo_Modulo = new Class_Grupo_Modulo();
    var IGrupo_Modulo = new Interface_Grupo_Modulo();
    if (implements(Grupo_Modulo, IGrupo_Modulo) == true) { //a la clase Modulo implementeme la interface IGrupo_Modulo
      Grupo_Modulo.Cambiar_Estado_Switch_Grupo(int_id_Grupo_Modulos,int_estado_switch_Grupo_Modulos, int_Persona_identificacion_Persona).then(state => {
        if (state!=false) {
          console.log('Cambio de estado de Grupo Correcto');
          response(true);
        }else{
          console.log('else en registro return');
          response(false);
        }
      });
    }else{
      response(false);
    }
  })
}
