const conexion = require ('mongoose');

// funcion para conectar a la base de datos

const conectar = async () => {

    await conexion.connect(process.env.DATA_BASE);

    console.log("nos hemos conectado a la industria del k-pop, gracias ello podremos interactuar con grupos kpop".bgCyan.dim);
    
}

module.exports = conectar;