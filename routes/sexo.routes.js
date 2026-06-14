const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerSexo  =  require('../controller/sexo/controller_sexo.js')
 
// Endpoint para inserir tipo telefone
router.post('/', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerSexo.inserirNovoSexo(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para listar tipos de telefone
router.get('/', async function(request, response){

    let result = await controllerSexo.listarSexo()

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para buscar tipo telefone pelo ID
router.get('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerSexo.buscarSexo(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para atualizar tipo telefone
router.put('/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerSexo.atualizarSexo(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para deletar tipo telefone
router.delete('/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerSexo.excluirSexo(id)

    response.status(result.status_code)
    response.json(result)
})

module.exports = router 