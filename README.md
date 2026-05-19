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

A API disponibiliza operações completas de CRUD para 7 recursos distintos.

### Filmes

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/filme` | Lista todos os filmes |
| GET | `/v1/senai/locadora/filme/:id` | Busca um filme pelo ID |
| POST | `/v1/senai/locadora/filme` | Insere um novo filme |
| PUT | `/v1/senai/locadora/filme/:id` | Atualiza um filme pelo ID |
| DELETE | `/v1/senai/locadora/filme/:id` | Remove um filme pelo ID |

### Gêneros

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/genero` | Lista todos os gêneros |
| GET | `/v1/senai/locadora/genero/:id` | Busca um gênero pelo ID |
| POST | `/v1/senai/locadora/genero` | Insere um novo gênero |
| PUT | `/v1/senai/locadora/genero/:id` | Atualiza um gênero pelo ID |
| DELETE | `/v1/senai/locadora/genero/:id` | Remove um gênero pelo ID |

### Classificação Indicativa

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/classificacao` | Lista todas as classificações |
| GET | `/v1/senai/locadora/classificacao/:id` | Busca uma classificação pelo ID |
| POST | `/v1/senai/locadora/classificacao` | Insere uma nova classificação |
| PUT | `/v1/senai/locadora/classificacao/:id` | Atualiza uma classificação pelo ID |
| DELETE | `/v1/senai/locadora/classificacao/:id` | Remove uma classificação pelo ID |

### Idiomas

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/idioma` | Lista todos os idiomas |
| GET | `/v1/senai/locadora/idioma/:id` | Busca um idioma pelo ID |
| POST | `/v1/senai/locadora/idioma` | Insere um novo idioma |
| PUT | `/v1/senai/locadora/idioma/:id` | Atualiza um idioma pelo ID |
| DELETE | `/v1/senai/locadora/idioma/:id` | Remove um idioma pelo ID |

### Nacionalidades

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/nacionalidade` | Lista todas as nacionalidades |
| GET | `/v1/senai/locadora/nacionalidade/:id` | Busca uma nacionalidade pelo ID |
| POST | `/v1/senai/locadora/nacionalidade` | Insere uma nova nacionalidade |
| PUT | `/v1/senai/locadora/nacionalidade/:id` | Atualiza uma nacionalidade pelo ID |
| DELETE | `/v1/senai/locadora/nacionalidade/:id` | Remove uma nacionalidade pelo ID |

### Tipos de Telefone

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/tipo-telefone` | Lista todos os tipos de telefone |
| GET | `/v1/senai/locadora/tipo-telefone/:id` | Busca um tipo de telefone pelo ID |
| POST | `/v1/senai/locadora/tipo-telefone` | Insere um novo tipo de telefone |
| PUT | `/v1/senai/locadora/tipo-telefone/:id` | Atualiza um tipo de telefone pelo ID |
| DELETE | `/v1/senai/locadora/tipo-telefone/:id` | Remove um tipo de telefone pelo ID |

### Estados

| Método | Rota | Descrição |
|--------|------|-----------|
| GET | `/v1/senai/locadora/estado` | Lista todos os estados |
| GET | `/v1/senai/locadora/estado/:id` | Busca um estado pelo ID |
| POST | `/v1/senai/locadora/estado` | Insere um novo estado |
| PUT | `/v1/senai/locadora/estado/:id` | Atualiza um estado pelo ID |
| DELETE | `/v1/senai/locadora/estado/:id` | Remove um estado pelo ID |

---

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
