# Locadora de Filmes — REST API

API RESTful desenvolvida em Node.js com arquitetura MVC para gerenciamento de uma locadora de filmes, contemplando operações completas de CRUD em múltiplos recursos.

---

## Visão Geral

O projeto expõe endpoints HTTP para criação, leitura, atualização e exclusão de dados relacionados a filmes e seus atributos auxiliares. A arquitetura segue o padrão MVC com separação entre controllers e models, garantindo baixo acoplamento e facilidade de manutenção.

---

## Tecnologias

| Tecnologia   | Finalidade |
|--------------|------------|
| Node.js      | Runtime de execução |
| Express      | Roteamento e servidor HTTP |
| Body-Parser  | Parsing do corpo das requisições JSON |
| CORS         | Controle de acesso à API |
| MySQL        | Banco de dados relacional |
| JavaScript (ES6+) | Linguagem principal |

---

## Estrutura do Projeto

```
projeto/
├── app.js                                         # Configuração do servidor e definição das rotas
├── controller/
│   ├── filme/
│   │   └── controller_filme.js                    # CRUD de filmes
│   ├── genero/
│   │   └── controller_genero.js                   # CRUD de gêneros
│   ├── classificacao_indicativa/
│   │   └── controller_classificacao.js            # CRUD de classificações indicativas
│   ├── idioma/
│   │   └── controller_idioma.js                   # CRUD de idiomas
│   ├── nacionalidade/
│   │   └── controller_nacionalidade.js            # CRUD de nacionalidades
│   ├── tipo_telefone/
│   │   └── controller_tipo_telefone.js            # CRUD de tipos de telefone
│   └── estado/
│       └── controller_estado.js                   # CRUD de estados
├── model/                                         # Camada de acesso ao banco de dados
└── doc/                                           # Documentação auxiliar
```

---

## Instalação

**Pré-requisitos:** Node.js e MySQL instalados na máquina.

```bash
# Clone o repositório
git clone https://github.com/Matheus-aguiar-hub/senai-locadora-api-full.git

# Acesse a pasta do projeto
cd senai-locadora-api-full

# Instale as dependências
npm install express --save
npm install cors --save
npm install body-parser --save

# Inicie o servidor
node app.js
```

O servidor será iniciado na porta `8080` por padrão.  
Para usar outra porta, defina a variável de ambiente `PORT` antes de executar.

---

## Endpoints

Todos os recursos seguem o padrão CRUD completo:

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/{recurso}` | Lista todos os registros |
| GET | `/v1/senai/locadora/{recurso}/:id` | Busca um registro pelo ID |
| POST | `/v1/senai/locadora/{recurso}` | Insere um novo registro |
| PUT | `/v1/senai/locadora/{recurso}/:id` | Atualiza um registro pelo ID |
| DELETE | `/v1/senai/locadora/{recurso}/:id` | Remove um registro pelo ID |

**Recursos disponíveis:** `filme` `genero` `classificacao` `idioma` `nacionalidade` `tipo-telefone` `estado`

## Respostas

### Sucesso — `200 OK`

```json
{
  "status_code": 200,
  "message": "Dados retornados com sucesso",
  "dados": []
}
```

### Criado — `201 Created`

```json
{
  "status_code": 201,
  "message": "Registro inserido com sucesso"
}
```

### Não encontrado — `404 Not Found`

```json
{
  "status_code": 404,
  "message": "Registro não encontrado"
}
```

---

## Arquitetura e Decisões Técnicas

- **Padrão MVC:** separação entre controllers (regras de negócio e validação) e models (acesso ao banco de dados), permitindo manutenção e expansão independentes de cada camada
- **CRUD completo:** todos os 7 recursos implementam os 4 verbos HTTP (`GET`, `POST`, `PUT`, `DELETE`), caracterizando uma API RESTful
- **Validação de Content-Type:** as rotas de escrita (`POST` e `PUT`) validam o header `Content-Type` da requisição antes de processar os dados
- **Async/Await:** todas as operações com banco de dados são assíncronas, evitando bloqueio do event loop do Node.js
- **Status HTTP semânticos:** cada resposta retorna o código HTTP correspondente ao resultado da operação

---

## Autor

**Matheus Aguiar**  
Versão: 1.0 — 2026
