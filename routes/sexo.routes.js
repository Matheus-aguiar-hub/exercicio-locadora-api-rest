//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo sexo da controller
const controllerSexo = require('../controller/sexo/controller_sexo.js')

// Endpoint para inserir sexo
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerSexo.inserirNovoSexo(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar sexos
router.get('/', async function(request, response){

    const result = await controllerSexo.listarSexo()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar sexo pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerSexo.buscarSexo(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar sexo
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerSexo.atualizarSexo(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar sexo
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerSexo.excluirSexo(id)

    return response.status(result.status_code).json(result)
})

module.exports = router