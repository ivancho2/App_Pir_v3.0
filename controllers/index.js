var fs = require('fs');
var path = require('path');

var files = fs.readdirSync(__dirname);

files.forEach(function cargarcontroladores(file){
    
    var fileName = path.basename(file, '.js');

    if(fileName !== 'index'){
        exports[fileName] = require('./'+ fileName)
        console.log(cargarcontroladores, fileName);

        
    }

});