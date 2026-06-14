const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerTipoTelefone  =  require('../controller/tipo_telefone/controller_tipo_telefone.js')

// Endpoint para inserir tipo telefone
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerTipoTelefone.inserirNovoTipoTelefone(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar tipos de telefone
router.get('/', async function(request, response){

    let result = await controllerTipoTelefone.listarTipoTelefone()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar tipo telefone pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerTipoTelefone.buscarByIdTipoTelefone(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar tipo telefone
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerTipoTelefone.atualizarTipoTelefone(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar tipo telefone
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerTipoTelefone.excluirByIdTipoTelefone(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 