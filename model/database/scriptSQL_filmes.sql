#Cria o database do projeto de filmes
create database db_filmes_20261_a;

#Ativa o uso do database de filmes
use db_filmes_20261_a;

#Alteração das tabelas
alter table tbl_filmes add status varchar(15);
show tables;

#TABELA PRINCIPAL
desc tbl_filmes;

#TABELA SEM CHAVE PRIMARIA
desc tbl_genero;
desc tbl_classificacao_indicativa;
desc tbl_idioma;
desc tbl_sexo;
desc tbl_nacionalidade;
desc tbl_tipo_telefone;
desc tbl_produtora;


#TABELA INTERMEDIA / CHAVE ESTRANGEIRA
desc tbl_filme_genero;
desc tbl_filme_idioma;

-- ------------------------------------------------------------------------
-- 						TABELAS SEM CHAVE ESTRANGEIRA
-- ------------------------------------------------------------------------

create table tbl_genero(
						id 				int not null primary key auto_increment,
						tipo 			varchar(30) not null,
						descricao		text not null
						);

create table tbl_classificacao(
										id 				int not null primary key auto_increment,
										nome 			varchar(50) not null,
										descricao		text not null,
										sigla			varchar(3) not null,
										idade_minima	varchar(3) not null
										);

create table tbl_idioma(
					id int not null primary key auto_increment,
					nome varchar(100) not null,
					sigla varchar(8) not null
					);
                        
create table tbl_sexo(
					id int not null primary key auto_increment,
                    nome varchar(30) not null,
					sigla varchar(5) not null
                    );

create table tbl_nacionalidade(
							id int not null primary key auto_increment,
							nome_pais varchar(100) not null
							);

create table tbl_tipo_telefone(
							id int not null primary key auto_increment,
							tipo varchar(30) not null
                            );
                            
create table tbl_produtora(
						id int not null primary key auto_increment,
                        nome_fantasia varchar(80) not null,
                        cnpj varchar(30) not null,
                        razao_social varchar(100) not null,
                        website varchar(255),
                        data_inicio date not null,
                        status_produtora varchar(15) not null,
                        email varchar(255) not null
						);

-- ------------------------------- CHAVES ESTRANGEIRAS --------------------------------------------------------

#Cria a tabela de filmes
create table tbl_filmes(
					id 				int not null primary key auto_increment,
					nome 			varchar(80) not null,
					data_lancamento date not null,
					duracao 		time not null,
					sinopse			text not null,
					avaliacao		decimal(3,2) default null,
					valor 			decimal(5,2) not null default 0,
					capa			varchar(255),
					trailer_url		varchar(255),
					status_filme	varchar(15)
					);

#Adicionar a coluna do FK e criar relação com a tabela classificação 
alter table tbl_filmes
			add column id_classificacao_indicativa int not null,
			add constraint FK_CLASSIFICACAO_INDICATIVA_FILME
				foreign key (id_classificacao_indicativa)
                references tbl_classificacao_indicativa(id);
alter table tbl_filmes
			add column id_produtora int not null,
            add constraint FK_PRODUTORA_FILME
				foreign key (id_produtora)
                references tbl_produtora(id);


-- ------------------------------------------------------------------------------------------------------------

--  ------------------------------ TABELAS INTERMEDIARIAS -----------------------------------------------------

create table tbl_filme_genero (	id 			int not null auto_increment primary key,
								id_filme 	int not null,
                                id_genero 	int not null,
                                
                                #Relação para o Filme
                                constraint		FK_FILME_FILMEGENERO
                                foreign key 	(id_filme)
                                references 		tbl_filmes(id),
                                
                                #Relação para o Genero
                                constraint 		FK_GENERO_FILMEGENERO
                                foreign key 	(id_genero)
                                references  	tbl_genero(id)
                                );
                                
create table tbl_filme_idioma (	id int not null auto_increment primary key,
								tipo varchar(100) not null,
								id_idioma int not null,
                                
                                #Relação com idioma
                                constraint 		FK_IDIOMA_FILMEIDIOMA
								foreign key 	(id_idioma)
                                references  	tbl_idioma(id)
                                );

-- -------------------------------------------------------------------------------------------------------

--  ------------------------------ INNER JOIN'S -----------------------------------------------------


-- ------------------------------------------------------------------------------------------------------------
