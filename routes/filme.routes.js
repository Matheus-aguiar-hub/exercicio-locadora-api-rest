//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo filme da controller
const controllerFilme = require('../controller/filme/controller_filme.js')

// Endpoint para inserir filme
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerFilme.inserirNovoFilme(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar filmes
router.get('/', async function(request, response){

    const result = await controllerFilme.listarFilme()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar filme pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerFilme.buscarFilme(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar filme
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerFilme.atualizarFilme(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar filme
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerFilme.excluirFilme(id)

    return response.status(result.status_code).json(result)
})

module.exports = router