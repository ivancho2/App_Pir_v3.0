var mqtt = require('mqtt');
module.exports = {
  vara:"hoamunod",
  ini: function(){
    console.log('dentro de ini');
    var client_mqtt = mqtt.connect([{
        host: '127.0.0.1',
        port: 1883
    }]);
    client_mqtt.on('connect', function() {
        client_mqtt.subscribe('ESP8266_120215');
        console.log('concectado a localhost MQTT y suscrito a ESP8266_120215');
    });
    client_mqtt.on('message', function(topic, message) {
        console.log('MQTT: (topic)'+topic.toString()+' (message)'+message.toString());
        if (message != 'PIR:true') {

        } else {
            console.log("PIR detectado desde " + topic.toString());
            //aqui va codigo de cuando un pir detecte movimiento
        }
    });
  },
  suscripcion : function (str_Codigo_Nomenclatura_Modulo) {
    console.log('Mostrando str_Codigo_Nomenclatura_Modulo');
    console.log(str_Codigo_Nomenclatura_Modulo);
  },
  unsuscripcion : function (str_Codigo_Nomenclatura_Modulo) {

  },
  prt: function(argument) {
    console.log(argument);
  }
};
