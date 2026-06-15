//Dependências
const express           = require('express')
const router            = express.Router()

//Importando arquivo idioma da controller
const controllerIdioma = require('../controller/idioma/controller_idioma.js')

// Endpoint para inserir idioma
router.post('/', async function(request, response){

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerIdioma.inserirNovoIdioma(
        dados,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para listar idiomas
router.get('/', async function(request, response){

    const result = await controllerIdioma.listarIdioma()

    return response.status(result.status_code).json(result)
})

// Endpoint para buscar idioma pelo ID
router.get('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerIdioma.buscarIdioma(id)

    return response.status(result.status_code).json(result)
})

// Endpoint para atualizar idioma
router.put('/:id', async function(request, response){

    const id = request.params.id

    const dados = request.body

    const contentType = request.headers['content-type']

    const result = await controllerIdioma.atualizarIdioma(
        dados,
        id,
        contentType
    )

    return response.status(result.status_code).json(result)
})

// Endpoint para deletar idioma
router.delete('/:id', async function(request, response){

    const id = request.params.id

    const result = await controllerIdioma.excluirIdioma(id)

    return response.status(result.status_code).json(result)
})

module.exports = router