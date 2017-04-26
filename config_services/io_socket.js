var server=require('../bin/www');
var io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    //ver ip a travez de la peticion al socket
    var ip = socket.handshake.address;
    printer('Alguien se ha conectado ' + ip);

    // // actualizar lista de sensores registrados
    // socket.emit('update_registered', array_registered);

    // // registrar un nuevo sensor
    // socket.on('register', function(data) {
    //     array_registered.push(data);
    //     io.sockets.emit('update_registered', array_registered); //emitir a todos los socket  (io.sockets) los esp registrados
    // });

    // socket.on('UPDATE', function(data) {
    //     for (var name in data) {
    //         for (var index_array in array_registered) {
    //             for (var index_2 in array_registered[index_array]) {
    //                 if (name == index_2) {
    //                     array_registered[index_array][index_2]['state'] = data[name]['state'];
    //                     // client.publish(name, data[name]['state']);
    //                     io.sockets.emit('update_registered', array_registered); //emitir a todos los socket  (io.sockets) los esp registrados
    //                     printer('Update_' + name + ': ' + data[name]['state']);
    //                 }
    //             }
    //         }
    //     }

    // });
});

function printer(argument) {
    console.log(argument);
    // io.sockets.emit('log', argument.toString());
}
module.exports=io;