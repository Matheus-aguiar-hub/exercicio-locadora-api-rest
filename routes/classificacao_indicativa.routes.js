const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

//Importando arquivo produto da controller
const controllerClassificacao = require('../controller/classificacao_indicativa/controller_classificacao.js')

// Endpoint para inserir classificação
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.inserirNovaClassificacao(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar classificações
router.get('/', async function(request, response){

    let result = await controllerClassificacao.listarClassificacao()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar classificação pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerClassificacao.buscarClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar classificação
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerClassificacao.atualizarClassificacao(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})


// Endpoint para deletar classificação
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerClassificacao.excluirClassificacao(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 