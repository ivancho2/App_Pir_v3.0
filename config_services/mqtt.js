var implements = require('implements');
var mqtt = require('mqtt');
module.exports = {

  init: function(){
    console.log('dentro de ini');
    client_mqtt = mqtt.connect([{
        host: '127.0.0.1',
        port: 1883
    }]);
    client_mqtt.on('connect', function() {
      var Class_Modulo = require('../class/Modulo');
  		var Interface_Modulo = require('../interfaces/IModulo');
  		var Modulo = new Class_Modulo();
  		var IModulo = new Interface_Modulo();
  		if (implements(Modulo, IModulo) == true) { //a la clase Modulo implementeme la interface IModulo
  			Modulo.Listar_Modulos().then(lista_modulos => {
  				if (lista_modulos!=null) {
  					// console.log('true en Listar_Modulos retorno a mqtt');
            // console.log(lista_modulos);
            lista_modulos.forEach(function(item_list) {
              // console.log(item_list.Codigo_Nomenclatura_Modulo);
              client_mqtt.subscribe(item_list.Codigo_Nomenclatura_Modulo);
              console.log('concectado a localhost MQTT y suscrito a ',item_list.Codigo_Nomenclatura_Modulo);
            });
  				}	else {
            console.log('lista_modulos vacia');
  				}
  			});
  		} else {
        console.log('error en la interface IModulo');
  		}
    });
    client_mqtt.on('message', function(topic, message) {
        console.log('MQTT: (topic)'+topic.toString()+' (message)'+message.toString());
        if (message != 'PIR:true') {
          // console.log(topic,' <--> ',message);
        } else {
            console.log("PIR detectado desde " + topic.toString());
            //aqui va codigo de cuando un pir detecte movimiento
        }
    });
  },
  suscripcion : function (str_Codigo_Nomenclatura_Modulo) {
    console.log('Suscrito a '+str_Codigo_Nomenclatura_Modulo);
    client_mqtt.subscribe(str_Codigo_Nomenclatura_Modulo);
  },
  unsuscripcion : function (str_Codigo_Nomenclatura_Modulo) {
    console.log('Unsuscripcion a '+str_Codigo_Nomenclatura_Modulo);
    client_mqtt.unsubscribe(str_Codigo_Nomenclatura_Modulo);
  },
  publish_mqtt : function (topic, data) {
    console.log('MQTT: (topic) ',topic,' (data) ', data);
    client_mqtt.publish(topic.toString(), data.toString());
  }
};
