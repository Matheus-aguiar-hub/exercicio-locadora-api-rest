/********************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de daods MySQL na tabela
 * Data 15/04/2026
 * Autor: Matheus Aguiar
 * Versão: 1.0
 ********************************************************************************/

//import da biblioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knex_file.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)

const insertFilme_genero = async function(filme_genero){
    try {
    let sql = `insert into tbl_filme_genero (
                        id_filme,
                        id_genero
                        )
                values(
                        '${filme_genero.id_filme}',
                        '${filme_genero.id_genero}'
                        );`

    //Executar o scriptSQL no banco de dados
    let result = await knexConex.raw(sql)

    if(result) return result[0].insertId //Retorna o ID gerado no banco de dados
    else return false
    
    }catch(error){
        // console.log(error)
        return false
    }
}

const updateFilme_genero = async function(filme_genero){
        try {
            // Script para atualizar os dados do BD
            let sql = `update tbl_filme_genero set
                            id_filme                = '${filme_genero.id_filme}',
                            id_genero               = '${filme_genero.id_genero}'
                            where id                =  ${filme_genero.id}`
              
            // Executa o script SQL no BD
            let result = await knexConex.raw(sql)
    
            if(result)
                return true
            else
                return false
        } catch (error) {
            return false
        }
}


const selectAllFilme_genero= async function(){
    try {
        let sql = 'select * from tbl_filme_genero order by id desc'
        
        let result = await knexConex.raw(sql)

        //Validação para verificar se o retorno do banco é um array
        //se o scriptSQL der erro, o banco não devolve um array
        if(Array.isArray(result)){
            return result[0]
        }else return false

    } catch (error){
        return false
    }
}

const selectByIdFilme_genero = async function(id){
    try {
        let sql = `select * from tbl_filme_genero where id=${id}`
        let result = await knexConex.raw(sql)
        if(Array.isArray(result)){
            return result[0]
        }else return false

    } catch (error) {
        return false
    }
}

const deleteFilme_genero = async function(id){
    try{
        let sql = `delete from tbl_filme_genero
                     where id=${id}`

    let result = await knexConex.raw(sql)

    if(result){
        return true
    }else{
        return false
    }
    }catch(error){
        return false
    }
}

module.exports = {
    insertFilme_genero,
    updateFilme_genero,
    selectAllFilme_genero,
    selectByIdFilme_genero,
    deleteFilme_genero
}