/********************************************************************************
 * Objetivo: Arquivo responsável pelo CRUD no Banco de daods MySQL na tabela
 * Data 15/05/2026
 * Autor: Matheus Aguiar
 * Versão: 1.1
 ********************************************************************************/

//import da biblioteca para gerenciar o banco de dados Mysql no node.JS
const knex = require('knex')

//Import do arquivo de configuração para conexão com o BD Mysql
const knexConfig = require('../../database_config_knex/knex_file.js')

//Criar a conexão com o BD Mysql
const knexConex = knex(knexConfig.development)


const insertEstado = async function(estado){
    try {
        let sql = `insert into tbl_estado (
                            sigla,
                            nome
                            )
                    values(
                            '${estado.sigla}',
                            '${estado.nome}'
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

const updateEstado = async function(estado){
        try {
            // Script para atualizar os dados do BD
            let sql = `update tbl_tipo_telefone set
                            sigla           = '${estado.sigla}',
                            nome            = '${estado.nome}'
                            where id        =  ${estado.id}`
              
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

const selectAllEstado  = async function(){
    try {
        let sql = 'select * from tbl_estado order by id desc'

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

const selectByIdEstado  = async function(id){
    try {
        let sql = `select * from tbl_estado where id=${id}`

        let result = await knexConex.raw(sql)

        if(Array.isArray(result)){
            return result[0]
        }else return false

    } catch (error) {
        return false
    }
}

const deleteByIdEstado = async function(id){
    try{
        let sql = `delete from tbl_estado
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
    insertEstado,
    updateEstado,
    selectAllEstado,
    selectByIdEstado,
    deleteByIdEstado
}