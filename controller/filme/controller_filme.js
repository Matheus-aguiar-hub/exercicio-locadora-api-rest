/****************************************************************
 * Objetivo: Arquivo responsável pela validação, tratamento e
 *          Manipulação de dados para o CRUD de filmes
 * Data: 17/04/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
****************************************************************/

//Import do arquivo de padronização de mensagens
const config_message = require('../modulo/configMessages.js') 

//Import do arquivo DAO para fazer o CRUD do filme no banco de dados
const filmeDAO = require('../../model/DAO/filme/filmes.js')

//Impor de arquivos do controller
const controller_classificacao  = require('../classificacao_indicativa/controller_classificacao.js')
const controller_filme_genero   = require('./controller_filme_genero.js')
const controller_produtora      = require('../produtora/controller_produtora.js')
const controller_filme_idioma   = require('./controller_filme_idioma.js')

//Função para inserir um novo filme
const inserirNovoFilme = async function(filmes, contentType){

    //Criando um clone do objeto JSON para manipular a sua estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))
    
    try{
    //Validação para o tipo de dados da requisição (somente JSON)
    if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){
    
    //Validação de dados para os atributos do filme (Status 400)
    let validar = await validarDados(filmes)

    //Se a função validar retornar um json de erro, iremos devolver ao APP o erro
    if(validar){
        return validar // 400
    }
    else{
        //Encaminha os dados do filme para o DAO
        let result = await filmeDAO.insertFilme(filmes)

        if(result){ // 201
            //Criando o atributo id no Json do filme e colocando o novo ID gerado após o insert
            filmes.id = result

            //Manipulação de dados para inserir os Generos do Filme
            for (genero of filmes.genero){
             //Cria o objeto JSON com os ID's do filme e do gênero
            let filmeGenero        = {"id_filme": filmes.id, 
                                    "id_genero": genero.id,
                                }

            if (filmes.idioma && filmes.idioma.length > 0) {
                for (let idioma of filmes.idioma) {
                    let filmeIdioma = {
                        "id_filme": filmes.id,
                        "id_idioma": idioma.id,
                        "tipo": idioma.tipo
                    }
                    await controller_filme_idioma.inserirNovoFilmeIdioma(filmeIdioma)
                }
            }
            //Chama a controller do filme genero para inserir os ID's
            let resultInsertGenero = await controller_filme_genero.inserirNovoFilmeGenero(filmeGenero)
            
            if(!resultInsertGenero.status){
                return message.SUCCESS_CREATED_WARNING // 201 com alerta de dados não inseridos
            }

            }
            message.DEFAULT_MESSAGE.status      = message.SUCCESS_CREATED_ITEM.status
            message.DEFAULT_MESSAGE.status_code = message.SUCCESS_CREATED_ITEM.status_code
            message.DEFAULT_MESSAGE.message     = message.SUCCESS_CREATED_ITEM.message
            message.DEFAULT_MESSAGE.response    = filmes
        }else{ // 500
            return message.ERROR_INTERNAL_SERVER_MODEL // 500
        }

        return message.DEFAULT_MESSAGE
        }
    }else{
        return message.ERROR_CONTENT_TYPE // 415    
    }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (controller)
    }
}

//Função para atualizar um filme
const atualizarFilme = async function(filmes, id, contentType){
    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do Content Type para receber apenas JSON
        if(String(contentType).toUpperCase() == 'APPLICATION/JSON'){

            //Validação para o id incorreto
            let resultBuscarID = await buscarFilme(id)
            
            //Se a função buscar encontrar o filme o atributo status do JSON será verdadeiro
            //isso significa que o filme existe na base, caso não retorne true, então
            //o retorno da função poderá ser um 400 ou 404 ou até mesmo um 500
            if(resultBuscarID.status){
                let validar = await validarDados(filmes)

                //Validação de campos obrigatórios para atualização (Body)
                if(!validar){
                    //Adiciono o atributo id do filmes no JSON para ser enviado ao DAO
                    filmes.id = id

                    //Chama a função do DAO para atualizar o filme (dados e o ID)
                    let result = await filmeDAO.updateFilme(filmes)

                    if(result){

                        //Manipulação de dados na tabela de relação entre filmes e genero
                        let resultDeleteGenero = await controller_filme_genero.excluirGenerosIdFilme(filmes.id)

                        //Após a exclusão de todos os gêneros relacionados com o filme 
                        if(resultDeleteGenero.status){
                                        //Manipulação de dados para inserir os Generos do Filme
                        for (genero of filmes.genero){
                            //Cria o objeto JSON com os ID's do filme e do gênero
                        let filmeGenero        = {"id_filme": filmes.id, 
                                                "id_genero": genero.id,
                                            }

                    if (filmes.idioma && filmes.idioma.length > 0) {
                        for (let idioma of filmes.idioma) {
                            let filmeIdioma = {
                                "id_filme": filmes.id,
                                "id_idioma": idioma.id,
                                "tipo": idioma.tipo
                            }
                            await controller_filme_idioma.inserirNovoFilmeIdioma(filmeIdioma)
                        }
                    }
                        //Chama a controller do filme genero para inserir os ID's
                        let resultInsertGenero = await controller_filme_genero.inserirNovoFilmeGenero(filmeGenero)
                        
                        if(!resultInsertGenero.status){
                            return message.SUCCESS_CREATED_WARNING // 201 com alerta de dados não inseridos
                            
                        }   

                        }

                        message.DEFAULT_MESSAGE.status      = message.SUCESS_UPDATED_ITEM.status
                        message.DEFAULT_MESSAGE.status_code = message.SUCESS_UPDATED_ITEM.status_code
                        message.DEFAULT_MESSAGE.message     = message.SUCESS_UPDATED_ITEM.message
                        message.DEFAULT_MESSAGE.response    = filmes
                        return message.DEFAULT_MESSAGE //200 (Atualizado)
                    }else{
                        return message.ERROR_INTERNAL_SERVER_MODEL //500

                    }

                }

                }else{
                    return validar //400
                }
            }else{
                return resultBuscarID // 400 ou 404 ou 500
            }
        }else{
            return message.ERROR_CONTENT_TYPE // 415
        }
    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER // 500 (Controller)

    }
}

//Função para retornar todos os filmes
const listarFilme = async function(){

    //Criando clone do objeto JSON para manipular a estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    try {
        //Chama a função DAO para retornar a lista de todos os filmes
        let result = await filmeDAO.selectAllFilme()

        //Validação para verificar se DAO conseguiu processar os dados
        if(result){
            //Validação para verificar se existe conteúdo no array
            if(result.length > 0 ){

                //Percorre O ARRAY de filmes para identificar os dados de classificação
                for(filmes of result){
                    //Busca na controller da classificação o ID referente aos dados
                    let resultClassificacao = await controller_classificacao.buscarClassificacao(filmes.id_classificacao_indicativa)
                    //Se a classificação foi encontrada
                    if(resultClassificacao.status){
                        //Cria o atributo classificação no filme e adiciona os dados referente a classificação
                        filmes.classificacao = resultClassificacao.response.classificacao
                        //Apaga o atributo id_classificação_indicativa do filme para não ficar repetido
                        delete filmes.id_classificacao_indicativa 
                    }

                    //Busca na controller da produtora o ID referente aos dados do filme
                    let resultProdutora = await controller_produtora.buscarProdutora(filmes.id_produtora)
                    //Se a produtora foi encontrada
                    if(resultProdutora.status){
                        //Cria o atributo produtora no filme e adiciona o objeto completo retornado da controller dela
                        filmes.produtora = resultProdutora.response.produtora
                        //Apaga o atributo id_produtora do filme para limpar o JSON
                        delete filmes.id_produtora
                    }

                    //Cria o objeto de gênero relacionado ao Filme
                    let resultGenero = await controller_filme_genero.buscarGeneroIdFilme(filmes.id)
                    // console.log(resultGenero)
                    if(resultGenero.status){
                        filmes.genero = resultGenero.response.filme_genero
                    }
                }
                message.DEFAULT_MESSAGE.status         = message.SUCESS_RESPONSE.status
                message.DEFAULT_MESSAGE.status_code    = message.SUCESS_RESPONSE.status_code
                message.DEFAULT_MESSAGE.response.count = result.length
                message.DEFAULT_MESSAGE.response.filme = result

                return message.DEFAULT_MESSAGE //200 (Dados do filme)

            }else return message.ERROR_NOT_FOUND //404  

        }else return message.ERROR_INTERNAL_SERVER_MODEL //500 (model)

    } catch (error) {
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (controller) 
    }
}

//Função para buscar um filme pelo id
const buscarFilme = async function(id){
     //Criando clone do objeto JSON para manipular a estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

        try {
            //Validação para garantir que o ID seja válido
            if(id == undefined || id == '' || id == null || isNaN(id)){
            message.ERROR_BAD_REQUEST.field = '[ID] INVÁLIDO'
            return message.ERROR_BAD_REQUEST // 400
        }else{
            let result = await filmeDAO.selectByIdFilme(id)

            if(result){
                if(result.length > 0){

                //Percorre O ARRAY de filmes para identificar os dados de classificação
                for(filmes of result){
                    //Busca na controller da classificação o ID referente aos dados
                    let resultClassificacao = await controller_classificacao.buscarClassificacao(filmes.id_classificacao_indicativa)
                    //Se a classificação foi encontrada
                    if(resultClassificacao.status){
                        //Cria o atributo classificação no filme e adiciona os dados referente a classificação
                        filmes.classificacao = resultClassificacao.response.classificacao
                        //Apaga o atributo id_classificação_indicativa do filme para não ficar repetido
                        delete filmes.id_classificacao_indicativa 
                    }
                    //Cria o objeto de gênero relacionado ao Filme
                    let resultGenero = await controller_filme_genero.buscarGeneroIdFilme(filmes.id)
                    // console.log(resultGenero)
                    if(resultGenero.status){
                        filmes.genero = resultGenero.response.filme_genero
                    }
                }
                    message.DEFAULT_MESSAGE.status          = message.SUCESS_RESPONSE.status
                    message.DEFAULT_MESSAGE.status_code     = message.SUCESS_RESPONSE.status_code
                    message.DEFAULT_MESSAGE.response.filme  = result

                    return message.DEFAULT_MESSAGE //200
                }else{
                    return message.ERROR_NOT_FOUND //404
                }
            }else result = message.ERROR_INTERNAL_SERVER_MODEL // 500 (model)
        }

        } catch (error) {
            return message.ERROR_INTERNAL_SERVER_CONTROLLER
        }
}

//Função para excluir um filme 
const excluirFilme = async function(id){
    let message = JSON.parse(JSON.stringify(config_message))

    try{
        //Validação do erro 400 e do 404
        let resultBuscarID = await buscarFilme(id)

        //Validação para verificar se o status é verdadeiro(se existe o filme)
        if(resultBuscarID.status){
            //Chamar a função do DAO para excluir o filme
            let result = await filmeDAO.deleteFilme(id)

            if(result){
                return  message.SUCESS_DELETED_ITEM //200 (Registro excluido)
            }else{
                return message.ERROR_INTERNAL_SERVER_MODEL//500 (model)
            }
        }else{
            return resultBuscarID // 400 ou 404
        }

    }catch (error){
        return message.ERROR_INTERNAL_SERVER_CONTROLLER //500 (Controller)
    }
}

//Função para validar todos os dados de filme (obrigatórios, qtde de caracteres, etc)
const validarDados = async function(filmes){
     //Criando clone do objeto JSON para manipular a estrutura local sem modificar a estrutura original
    let message = JSON.parse(JSON.stringify(config_message))

    //Validação de dados para os atributos do filme (status 400)
    if(filmes.nome == undefined || filmes.nome == '' || filmes.nome == null || filmes.nome.length > 80){
        message.ERROR_BAD_REQUEST.field = '[NOME] INVÁLIDO'
        return message.ERROR_BAD_REQUEST //400
        
    }else if(filmes.data_lancamento == undefined || filmes.data_lancamento == '' || filmes.data_lancamento == null || filmes.data_lancamento.length != 10){
        message.ERROR_BAD_REQUEST.field = '[DATA_LANCAMENTO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.duracao == undefined || filmes.duracao == '' || filmes.duracao == null || filmes.duracao.length < 5){
        message.ERROR_BAD_REQUEST.field = '[DURACAO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.sinopse == undefined || filmes.sinopse == '' || filmes.sinopse == null){
        message.ERROR_BAD_REQUEST.field = '[SINOPSE] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(isNaN(filmes.avaliacao) || filmes.avaliacao.length > 3){
        message.ERROR_BAD_REQUEST.field = '[AVALIAÇÃO] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.valor == undefined || filmes.valor == '' || filmes.valor == null ||filmes.valor.split('.')[0].length > 3 || isNaN(filmes.valor)){
        message.ERROR_BAD_REQUEST.field = '[VALOR] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

    }else if(filmes.capa.length > 255){
        message.ERROR_BAD_REQUEST.field = '[CAPA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST

        //  Validação para a FK da classificação
    }else if(filmes.id_classificacao_indicativa == undefined || filmes.id_classificacao_indicativa == ''  || filmes.id_classificacao_indicativa == null || isNaN(filmes.id_classificacao_indicativa) || filmes.id_classificacao_indicativa.length <=0){
        message.ERROR_BAD_REQUEST.field = '[ID_CLASSIFICAÇÃO_INDICATIVA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else if(filmes.id_produtora == undefined || filmes.id_produtora == ''  || filmes.id_produtora == null || isNaN(filmes.id_produtora) || filmes.id_produtora.length <=0){
        message.ERROR_BAD_REQUEST.field = '[ID_PRODUTORA] INVÁLIDO'
        return message.ERROR_BAD_REQUEST
    }else{
        return false
    }
}

module.exports = {
    inserirNovoFilme,
    listarFilme,
    buscarFilme,
    excluirFilme,
    atualizarFilme
}