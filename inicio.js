var variableServidor = require("./servidor");
var variableEnrutador = require("./enrutador");
var variablePeticiones = require("./peticiones");

var manejador = {};
manejador['/'] = variablePeticiones.exportsInicioModuloPeticiones;
manejador['/pagina1'] = variablePeticiones.exportsPagina1ModuloPeticiones;
manejador['/pagina2'] = variablePeticiones.exportsPagina2ModuloPeticiones;

variableServidor.exportsDeServidor(variableEnrutador.parametroRutear);