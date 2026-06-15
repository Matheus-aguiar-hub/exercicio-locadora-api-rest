//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo gênero da controller
const controllerGenero = require('../controller/genero/controller_genero.js')

// Endpoint para inserir gênero
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerGenero.inserirNovoGenero(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar gêneros
router.get('/', async function(request, response){

    const result = await controllerGenero.listarGenero()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar gênero pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerGenero.buscarGenero(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar gênero
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerGenero.atualizarGenero(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar gênero
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerGenero.excluirGenero(id)

    return response.status(result.status_code).json(result)
})

module.exports = router