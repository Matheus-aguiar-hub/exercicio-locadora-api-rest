const express           = require('express')
const router            = express.Router()
const bodyParserJSON    = require('body-parser')

const controllerFilme =  require('../controller/filme/controller_filme.js')

//Endpoint para inserir um filme 
router.post('/', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body

    //Recebe o content type da requisição para validar se é um JSON
    let contentType = request.headers['content-type'] 

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar todos os filmes
router.get('/', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para buscar o filme pelo ID
router.get('/:id', async function(request, response) {
    //Recebe o ID via paramêtro
    let id = request.params.id 
    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para Atualizar um filme pelo ID 
router.put('/:id', bodyParserJSON, async function(request, response){
    // Recebe o content type da requisição
    let contentType = request.headers['content-type']
    // Recebe o ID do registro a ser atualizado
    let id = request.params.id
    // Recebe os dados enviados no corpo da requisição
    let dados = request.body

    // Chama a função de atualizar na controller e encaminha os dados, id e content-type
    // obedecendo a ordem de criação na função da controller
    let result = await controllerFilme.atualizarFilme(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para Deletar um filme pelo ID
router.delete('/:id', async function (request, response) {
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
    
})

module.exports = router