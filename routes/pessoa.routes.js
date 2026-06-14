const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerPessoa  = require('../controller/pessoa/controller_pessoa.js')

// Endpoint para inserir tipo telefone
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerPessoa.inserirNovaPessoa(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar tipos de telefone
router.get('/', async function(request, response){

    let result = await controllerPessoa.listarPessoas()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar tipo telefone pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerPessoa.buscarByIdPessoa(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar tipo telefone
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerPessoa.atualizarPessoa(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar tipo telefone
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerPessoa.excluirByIdPessoa(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 