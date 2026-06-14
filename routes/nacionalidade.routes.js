const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerNacionalidade  =  require('../controller/nacionalidade/controller_nacionalidade.js')

// Endpoint para inserir nacionalidade
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerNacionalidade.inserirNovaNacionalidade(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar nacionalidades
router.get('/', async function(request, response){

    let result = await controllerNacionalidade.listarNacionalidade()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar nacionalidade pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerNacionalidade.buscarByIdNacionalidade(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar nacionalidade
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerNacionalidade.atualizarNacionalidade(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar nacionalidade
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerNacionalidade.excluirByIdNacionalidade(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 