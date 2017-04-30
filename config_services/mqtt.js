var mqtt = require('mqtt');
var client_mqtt = mqtt.connect([{
    host: 'localhost',
    port: 1883
}]);
client_mqtt.on('connect', function() {
    
/*
+   Suscribirse a todos los Modulos registrados y activos en el sistema
+       -consultarlos en la base de datos y almacenarlos en "array_registered"
+       -
+
+        // //array para el almacenamiento de sensores EJEMPLO ANTERIOR
+        // var array_registered = [{
+        //     ESP8266_120215: {
+        //         state: 'true'
+        //     }
+        // }, {
+        //     ESP8266_12696879: {
+        //         state: 'true'
+        //     }
+        // }]; //no es un objeto
+
+
+
+    // array_registered.forEach(function(item) {
+    //     for (var i in item) {
+    //         client_mqtt.subscribe(i);
+    //     }
+    // });
+
*/
 // ejemplo de suscripcion
    client_mqtt.subscribe('ESP8266_120215');
    printer('concectado a localhost MQTT y suscrito a ESP8266_120215');
});

client_mqtt.on('message', function(topic, message) {
    printer('MQTT: (topic)'+topic.toString()+' (message)'+message.toString());
    if (message != 'PIR:true') {
        // var new_state = {
        //     [topic.toString()]: {
        //         state: message.toString()
        //     }
        // };
        // array_registered.forEach(function(item, index) {
        //     for (var i in item) {
        //         if (i == topic.toString()) {
        //             array_registered[index] = new_state;
        //             // io.sockets.emit('update_registered', array_registered); //emitir a todos los socket  (io.sockets) los esp registrados
        //         }
        //     }
        // });
    } else {
        printer("PIR detectado desde " + topic.toString());
        //aqui va codigo de cuando un pir detecte movimiento
    }
});

function printer(argument) {
    console.log(argument);
    // io.sockets.emit('log', argument.toString());
}

 //lo exporto para poder usarlo en otras clases y 
 //suscribir o des-suscribirme a topicos
 module.exports=client_mqtt; 