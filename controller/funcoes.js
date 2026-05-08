/* 
Autor: Matheus Aguiar
Objetivo: criar cada funções que retornem booleano, listando os contatos.
Data: 08/04/2026
Versão 1.0
*/

//Métodos para formatar os dados:
//Map é um método de array que percorre o array original e retorna um novo array com os dados formatados
//FlatMap é um método de array que "achata" o array, ou seja, ele remove os arrays internos e retorna um array único com todos os elementos

//Metodos para filtrar os dados:
//Filter é um método de array que cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida, e se não encontrar ele retorna um array vazio
//Includes é um método de string que verifica se a string contém a palavra chave, e retorna true ou false
//Find é um método de array que percorre o array e retorna o contéudo que seja igual a condição, e se não encontrar ele retorna undefined

//Importando os dados dos contatos
const importandoContatos = require('./contatos.js')

/*
Retorna todos os dados dos contatos utilizando array como:
nome, descrição, imagem, mensagens
*/
function getListarTodosContatos() {
    //Capturando dados dos contatos
    let objetoContatos = []

    importandoContatos.contatos['whats-users'].forEach(function (retornandoDados) {
        objetoContatos.push(retornandoDados.contacts)
    });

        return objetoContatos

}

/*(Todos os dados do profile que podem ser alterados como nome,“nick”,
foto, número, imagem, cor de fundo e dados da conta como criação e
encerramento, etc)*/
function getListarDadosProfile(){
    let objetoProfileContatos = []

    importandoContatos.contatos['whats-users'].forEach(function(retornandoProfile){

            objetoProfileContatos.push ({
                id: retornandoProfile.id,
                nickname: retornandoProfile.nickname,
                descricao: retornandoProfile.contacts.map(contacts => contacts.description),
                foto: retornandoProfile['profile-image'],
                numero: retornandoProfile.number,
                cor: retornandoProfile.background,
                dadosComeco: retornandoProfile['created-since'].start,
                dadosFinais: retornandoProfile['created-since'].end
            })
    })

    return objetoProfileContatos
}

//(Retornar apenas os dados pessoais de cada contato do usuário, como nome, foto e descrição)

function getListarDadosContatos(numero){
    let status = false 

    let objetoDadosUsuario = {
        dadosContato: {}
    }

    importandoContatos.contatos['whats-users'].forEach(function(retornandoDados){
            
            if(retornandoDados.number === numero){
                status = true

            objetoDadosUsuario.dadosContato = retornandoDados.contacts.map(contacts => ({
                nome: contacts.name,
                descricao: contacts.description,
                foto: contacts.image 
            }))
        }
    })

    if (status) {
        return objetoDadosUsuario;
    } else {
        return false;
    }
}

//Listar todas as mensagens trocadas de uma conta de usuário (Retornar todos os dados)
function getListarMensagensContatos(numero) {
    let status = false 

    let objetoMensagemContatos = {
        dadosContato: {}
    }

    importandoContatos.contatos['whats-users'].forEach(function(retornandoMensagens){
        if(retornandoMensagens.number == numero){
            status = true

        objetoMensagemContatos.dadosContato = {
            mensagens: retornandoMensagens.contacts.flatMap(contacts => { return contacts.messages.flatMap(
            messages => `${messages.sender}: ${messages.content} - ${messages.time}`)}),
            }
        }
    })

    if (status) {
        return objetoMensagemContatos;
    } else {
        return false;
    }
}

/* Listar uma conversa de um usuário e um contato
(Retornar dados como: nome, número de celular e as
conversas). Deve obrigatoriamente encaminhar a referência
para encontrar a conversa via Query e não via parâmetro)*/ 
function getListarConversaContatos (numero, nomeContatoViaQuery, palavraChave){
    let status = false
    let objetoConversaContatos = {
    dadosContato: {}
    }

    importandoContatos.contatos['whats-users'].forEach(function(retornandoConversa){
        
        if(retornandoConversa.number == numero.trim()){
            status = true

            // O find ele percorre o array e retorna o primero contéudo que ele econtrar e que seja igual a palavra chave, e se não encontrar ele retorna undefined
            let contatoEncontrado = retornandoConversa.contacts.find(contato => contato.name == nomeContatoViaQuery);
            if(contatoEncontrado){
                // O filter ele cria um novo array com todos os elementos que seja a palavra chave, o que não encontrar vai retornar vazio 
                let mensagensFiltradas = contatoEncontrado.messages.filter(item => {
                    // O includes ele verifica se a string contém a palavra chave, e retorna true ou false,
                    return item.content.toLowerCase().includes(palavraChave.toLowerCase());
                });

                objetoConversaContatos.dadosContato = {
                    nome: contatoEncontrado.name,
                    numero: retornandoConversa.number,
                    mensagens: mensagensFiltradas.map(filtro => `${filtro.sender}: ${filtro.content} - ${filtro.time}`)
                }
            }
        }
    })
    if(status){
        return objetoConversaContatos;}
    else{
        return false
    }     
}

// console.log(getListarTodosContatos())

// console.log(getListarDadosProfile())

// console.log(getListarDadosContatos('11966578996'))

// console.log(getListarMensagensContatos('11955577796'))

//  console.log(getListarConversaContatos('11955577796', 'Jonny Devited', 'FeRRAMenta'))

module.exports = {
    getListarTodosContatos,
    getListarConversaContatos,
    getListarMensagensContatos,
    getListarDadosContatos,
    getListarDadosProfile
}