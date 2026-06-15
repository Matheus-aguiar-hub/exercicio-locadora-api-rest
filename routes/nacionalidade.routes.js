//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo nacionalidade da controller
const controllerNacionalidade = require('../controller/nacionalidade/controller_nacionalidade.js')

// Endpoint para inserir nacionalidade
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerNacionalidade.inserirNovaNacionalidade(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar nacionalidades
router.get('/', async function(request, response){

    const result = await controllerNacionalidade.listarNacionalidade()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar nacionalidade pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerNacionalidade.buscarByIdNacionalidade(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar nacionalidade
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerNacionalidade.atualizarNacionalidade(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar nacionalidade
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerNacionalidade.excluirByIdNacionalidade(id)

    return response.status(result.status_code).json(result)
})

module.exports = router