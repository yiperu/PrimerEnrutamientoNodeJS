var variableModuloHttp = require("http");
var variableModuloUrl = require("url");

function funcionIniciar(arg_funcIniciar_ModRutear,manejador) {

    function funcionArrancaServidor(requiere, respuesta) {

        var variableRuta = variableModuloUrl.parse(requiere.url).pathname;

        console.log("Alguien se ha conectado desde un navegador");

        arg_funcIniciar_ModRutear(manejador,variableRuta);

        respuesta.writeHead(200,{"Content-Type":"text/html"});
        respuesta.write("<h1>El servido Funciona Correctamente usando Ahora Modulo</h1>");
        respuesta.end("El texto que escribo aqui tambien se muestra en el navegador");
    }
    variableModuloHttp.createServer(funcionArrancaServidor).listen(8888);
}

exports.exportsDeServidor = funcionIniciar;