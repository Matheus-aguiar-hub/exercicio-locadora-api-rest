const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Fazendo com que o swagger leia o arquivo YAML para gerar a documentação em web
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

//Criando um objeto para manipular dados do body da API em formato JSON
const bodyParserJSON = bodyParser.json()

const app = express()

//Carregando o arquivo YAML para o swagger
const swaggerDocument = YAML.load('./openapi.yaml')

const corsOptions = {
    origin: ['*'],
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    allowedHeaders: ['Content-type', 'Autorization']
}

app.use(cors(corsOptions))

//Configuração do Swagger para acessar a documentação da API
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
)

//Import das ROTAS do projeto
const classificacaoRoutes           = require('./routes/classificacao_indicativa.routes')
const filmeRoutes                   = require('./routes/filme.routes.js')
const generoRoutes                  = require('./routes/genero.routes.js')
const idiomaRoutes                  = require('./routes/idioma.routes.js')
const nacionalidadeRoutes           = require('./routes/nacionalidade.routes.js')
const pessoaRoutes                  = require('./routes/pessoa.routes.js')
const produtoraRoutes               = require('./routes/produtora.routes.js')
const sexoRoutes                    = require('./routes/sexo.routes.js')
const telefoneRoutes                = require('./routes/tipo_telefone.routes.js')

//Importação dos endpoints com o use
app.use('/v1/senai/locadora/classificacao', classificacaoRoutes)
app.use('/v1/senai/locadora/filme', filmeRoutes)
app.use('/v1/senai/locadora/genero', generoRoutes)
app.use('/v1/senai/locadora/idioma', idiomaRoutes)
app.use('/v1/senai/locadora/nacionalidade', nacionalidadeRoutes)
app.use('/v1/senai/locadora/pessoa', pessoaRoutes)
app.use('/v1/senai/locadora/produtora', produtoraRoutes)
app.use('/v1/senai/locadora/sexo', sexoRoutes)
app.use('/v1/senai/locadora/tipo-telefone', telefoneRoutes)

//Seve para inicializar a API para receber requisições
const PORT = process.env.PORT || 8080;

app.listen(PORT, function(){
    console.log('API Funcionando na porta ' + PORT);
})