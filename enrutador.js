function funcionEnrutar(arg_manejador,arg_ruta) {
    console.log("Voy a Rutear algo para " + arg_ruta);
    return arg_manejador[arg_ruta]();
}

exports.parametroRutear = funcionEnrutar;