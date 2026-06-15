//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo classificação da controller
const controllerClassificacao = require('../controller/classificacao_indicativa/controller_classificacao.js')

// Endpoint para inserir classificação
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerClassificacao.inserirNovaClassificacao(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar classificações
router.get('/', async function(request, response){

    const result = await controllerClassificacao.listarClassificacao()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar classificação pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerClassificacao.buscarClassificacao(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar classificação
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerClassificacao.atualizarClassificacao(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})


// Endpoint para deletar classificação
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerClassificacao.excluirClassificacao(id)

    return response.status(result.status_code).json(result)
})

module.exports = router 