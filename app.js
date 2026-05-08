const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import das CONTROLLERS do projeto
const controllerFilme = require('./controller/filme/controller_filme.js')
const controllerGenero = require('./controller/genero/controller_genero.js')
//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

const app = express()

const corsOptions = {
    origin: ['*'],
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: ['Content-type', 'Autorization']
}

app.use(cors(corsOptions))

//ENDPOINTS

//Endpoint para inserir um filme 
app.post('/v1/senai/locadora/filme', bodyParserJSON, async function(request, response){
    //Recebe o conteúdo dentro do body da requisição
    let dados = request.body

    //Recebe o content type da requisição para validar se é um JSON
    let contentType = request.headers['content-type'] 

    let result = await controllerFilme.inserirNovoFilme(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para listar todos os filmes
app.get('/v1/senai/locadora/filme', async function(request, response){
    let result = await controllerFilme.listarFilme()

    response.status(result.status_code)
    response.json(result)
})

//Endpoint para buscar o filme pelo ID
app.get('/v1/senai/locadora/filme/:id', async function(request, response) {
    //Recebe o ID via paramêtro
    let id = request.params.id 
    let result = await controllerFilme.buscarFilme(id)

    response.status(result.status_code)
    response.json(result)
})

// Endpoint para Atualizar um filme pelo ID 
app.put('/v1/senai/locadora/filme/:id', bodyParserJSON, async function(request, response){
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
app.delete('/v1/senai/locadora/filme/:id', async function (request, response) {
    let id = request.params.id

    let result = await controllerFilme.excluirFilme(id)

    response.status(result.status_code)
    response.json(result)
    
})

//Endpoint para inserir um genero 
app.post('/v1/senai/locadora/genero', bodyParserJSON, async function(request, response){

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.inserirNovoGenero(dados, contentType)

    response.status(result.status_code)
    response.json(result)
})


// Endpoint para listar gêneros
app.get('/v1/senai/locadora/genero', async function(request, response){

    let result = await controllerGenero.listarGenero()

    response.status(result.status_code)
    response.json(result)
})


// Endpoint para buscar gênero pelo ID
app.get('/v1/senai/locadora/genero/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerGenero.buscarGenero(id)

    response.status(result.status_code)
    response.json(result)
})


// Endpoint para atualizar gênero
app.put('/v1/senai/locadora/genero/:id', bodyParserJSON, async function(request, response){

    let id = request.params.id

    let dados = request.body

    let contentType = request.headers['content-type']

    let result = await controllerGenero.atualizarGenero(dados, id, contentType)

    response.status(result.status_code)
    response.json(result)
})


// Endpoint para deletar gênero
app.delete('/v1/senai/locadora/genero/:id', async function(request, response){

    let id = request.params.id

    let result = await controllerGenero.excluirGenero(id)

    response.status(result.status_code)
    response.json(result)
})

//Seve para inicializar a API para receber requisições
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log('API Funcionando na porta ' + PORT);
})