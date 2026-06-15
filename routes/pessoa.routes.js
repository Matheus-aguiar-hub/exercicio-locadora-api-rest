//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo pessoa da controller
const controllerPessoa = require('../controller/pessoa/controller_pessoa.js')

// Endpoint para inserir pessoa
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerPessoa.inserirNovaPessoa(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar pessoas
router.get('/', async function(request, response){

    const result = await controllerPessoa.listarPessoas()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar pessoa pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerPessoa.buscarByIdPessoa(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar pessoa
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerPessoa.atualizarPessoa(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar pessoa
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerPessoa.excluirByIdPessoa(id)

    return response.status(result.status_code).json(result)
})

module.exports = router