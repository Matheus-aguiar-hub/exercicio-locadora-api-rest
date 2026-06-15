//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo produtora da controller
const controllerProdutora = require('../controller/produtora/controller_produtora')

// Endpoint para inserir produtora
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerProdutora.inserirNovaProdutora(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar produtoras
router.get('/', async function(request, response){

    const result = await controllerProdutora.listarProdutora()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar produtora pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerProdutora.buscarProdutora(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar produtora
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerProdutora.atualizarProdutora(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar produtora
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerProdutora.excluirProdutora(id)

    return response.status(result.status_code).json(result)
})

module.exports = router