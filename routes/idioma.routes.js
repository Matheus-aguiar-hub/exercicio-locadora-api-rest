const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerIdioma  =  require('../controller/idioma/controller_idioma.js')

// Endpoint para inserir idioma
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerIdioma.inserirNovoIdioma(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar idiomas
router.get('/', async function(request, response){

    let result = await controllerIdioma.listarIdioma()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar idioma pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerIdioma.buscarIdioma(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar idioma
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerIdioma.atualizarIdioma(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar idioma
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerIdioma.excluirIdioma(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 