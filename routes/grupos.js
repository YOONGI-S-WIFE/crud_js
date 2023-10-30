const express = require('express');
const router_pqs = express.Router();
const modelo_grupos = require('../models/modelo_grupos');
const grupo_kpop = require('../models/modelo_grupos')

// URIS DE LOS GRUPOS

router_pqs.get('/', async (jin, namjoon) => {

    const grupos = await modelo_grupos.find();

    namjoon.json({

        logrado: true,
        datos : grupos,

    })
    
})

router_pqs.get('/:id', async (jin, namjoon) => {

    const grupo = await modelo_grupos.findById(jin.params.id)

    namjoon.json({

        logrado: true,
        datos : grupo,

    })
    
})

router_pqs.post('/', async (jin, namjoon) => {

    const crear_grupo = await modelo_grupos.create(jin.body);

    namjoon.json({

        logrado: true,
        datos : crear_grupo,

    })
    
})

router_pqs.put('/:id', async (jin, namjoon) => {

    namjoon.json({

        logrado: true,
        resultado: `aqui editaremos a un miembro del grupo segun su id: ${jin.params.id}`

    })
    
})

router_pqs.delete('/:id', async (jin, namjoon) => {

    namjoon.json({

        logrado: true,
        resultado: `aqui funareos a uno de los miembros segun su id: ${jin.params.id}`

    })
    
})

module.exports = router_pqs