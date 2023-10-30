const express = require("express");
const dot_env = require("dotenv");
const color = require("colors");
const grupos = require('./routes/grupos');
const empresas = require('./routes/empresas');
const conectar = require("./config/db");

// contruimos el objeto

const yoongi = express();

// unimos a las rutas

yoongi.use(express.json());
yoongi.use ('/grupos', grupos);
yoongi.use ('/empresas', empresas);

// creamos las variables de entorno

dot_env.config(

    {path : './config/.env'}

)

// lamamos la conexion a base de datos 

conectar();

// tomamos una variable puerto del entorno

const puerto_por_que_si = process.env.PUERTO

// pruebas para las url

yoongi.get ('/taehyung', function funcion_por_que_si (jin, namjoon) {

    namjoon.send ("Yoongi mi varon :3")
    
})

yoongi.get ('/taehyung/:id', function hobi (jin, namjoon) {

    namjoon.send (`el parametro que nuestro solecito 🌞hobi🌞 recibio fue: ${jin.params.id}`)
    
})

// creamos el servidor

yoongi.listen (puerto_por_que_si, function amamos_a_yoongi () {

    console.log(`aqui amamos a Min Yoongi y a todos los BTS, mostramos el puerto ${puerto_por_que_si} por que toca`.bgBlue.black);
    
})