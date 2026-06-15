//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo tipo telefone da controller
const controllerTipoTelefone = require('../controller/tipo_telefone/controller_tipo_telefone.js')

// Endpoint para inserir tipo telefone
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerTipoTelefone.inserirNovoTipoTelefone(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar tipos de telefone
router.get('/', async function(request, response){

    const result = await controllerTipoTelefone.listarTipoTelefone()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar tipo telefone pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerTipoTelefone.buscarByIdTipoTelefone(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar tipo telefone
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerTipoTelefone.atualizarTipoTelefone(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar tipo telefone
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerTipoTelefone.excluirByIdTipoTelefone(id)

    return response.status(result.status_code).json(result)
})

module.exports = router