const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerGenero =  require('../controller/genero/controller_genero.js')

//Endpoint para inserir um genero 
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar gêneros
router.get('/', async function(request, response){

    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar gênero pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar gênero
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar gênero
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 