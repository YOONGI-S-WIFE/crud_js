const db = require('mongoose');

// definimos el modelo que es exclusivo para mongo

const plantilla_data_base = new db.Schema({

    nombre_grupo: {
        
        type : String,
        unique: true,
        required : [true, "el nombre del grupo es necesario"], 
        minLenght: [2, "el nombre del grupo debe ser de minimo 2 craacteres"]

    },

    nombre_primer_miembro: {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique : [true, "el nombre de los miembros dentro del grupo debe ser unico"],
        required : [true, "el grupo debe tener almenos 2 integrantes"],

    },

    nombre_segundo_miembro: {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],
        required : [true, "el grupo debe tener almenos 2 integrantes"],

    },

    nombre_tercer_miembro: {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_cuarto_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_quinto_miembro: {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_sexto_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_sexto_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],
        
    },

    nombre_septimo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_octavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_noveno_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_decimo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_onceavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_doceavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_treceavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_catorceavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_quinceavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_diecisiesavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_diecisieteavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_dieciochoavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },
    nombre_diecinueveavo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_vigesimo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_vigecimo_primero_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_vigecimo_segundo_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_vigesimo_tercero_miembro : {

        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    nombre_vigesimo_cuarto_miembro : {


        type : String,
        minLenght: [2, "el nombre del miembro debe ser de minimo 2 craacteres"],
        unique: [true, "el nombre de los miembros dentro del grupo debe ser unico"],

    },

    fecha_debut : {

        type : Date,
        required : [true, "se debe tener una fecha de debut"]
    },

    fecha_disband : {

        type : Date

    },
    
});

const grupo_kpop = db.model('grupos', plantilla_data_base);

module.exports = grupo_kpop;