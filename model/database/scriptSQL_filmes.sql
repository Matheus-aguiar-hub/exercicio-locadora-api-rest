#Cria o database do projeto de filmes
create database db_filmes_20261_a;

#Ativa o uso do database de filmes
use db_filmes_20261_a;

#Cria a tabela de filmes
create table tbl_filmes(
	id 				int not null primary key auto_increment,
    nome 			varchar(80) not null,
    data_lancamento date not null,
    duracao 		time not null,
    sinopse			text not null,
    avaliacao		decimal(3,2) default null,
    valor 			decimal(5,2) not null default 0,
	capa			varchar(255)
);

show tables;

#inserir daods
insert into tbl_filmes (
						nome, 
                        data_lancamento, 
                        duracao, 
                        sinopse, 
                        avaliacao, 
                        valor, 
                        capa,
                        trailer_url,
                        status,
                        id_classificacao_indicativa
                        )
				values(
						'Super Mario Galaxy: O Filme',
						'2026-04-02',
						'01:39:00',
                        'Uma nova aventura leva Mario a enfrentar um inédito e ameaçador super vilão. Em Super Mario Galaxy: O Filme, 
                        o bigodudo encanador italiano e seus aliados embarcam numa aventura galáctica repleta de ação e momentos emocionantes 
                        depois de salvar o Reino dos Cogumelos.',
                        '3',
                        '50.70',
                        'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg',
                        'daddsaddasdsadasdsadsadasdasdasdsd',
                        'Em produção',
                        1
                        ),
                        (
						'As Cronicas de Etherion',
						'2021-01-15',
						'02:10:45',
						'Um guerreiro precisa unir os reinos magicos antes da chegada de uma grande escuridao.',
						'5',
						'59.90',
						'http://etherion.jpg',
                        'daddsaddasdsadasdsadsadasdasdasdsd',
                        'ativo',
                        2
						);
                        
alter table tbl_filmes add status varchar(15);
                        
select * from tbl_tipo_telefone;

select tbl_filmes.nome as nome_filme, tbl_filmes.sinopse, tbl_filmes.data_lancamento, tbl_filmes.capa, tbl_filmes.duracao, tbl_filmes.valor, tbl_filmes.avaliacao, 
		tbl_classificacao_indicativa.sigla, tbl_classificacao_indicativa.nome as nome_classificacao, tbl_classificacao_indicativa.descricao, tbl_classificacao_indicativa.idade_minima
		from tbl_filmes
        inner join tbl_classificacao_indicativa
			on tbl_classificacao_indicativa.id = tbl_filmes.id_classificacao_indicativa;

desc tbl_classificacao_indicativa;

select * from tbl_filmes order by id asc;

delete from tbl_filmes where id > 0;

show databases;

use db_filmes_20261_a;

show tables from db_filmes_20261_a;

create table tbl_genero(
	id 				int not null primary key auto_increment,
    tipo 			varchar(30) not null,
    descricao		text not null
);

desc tbl_genero;

insert into tbl_genero (tipo,
						descricao
                        )
				values(
						'Comédia',
						'Desenvolvido para provocar humor e riso.'
						),
						(
						'Drama',
						'Foca no desenvolvimento realista de conflitos emocionais e personagens.'
						),
						(
						'Terror/Horror',
						'Projetado para causar medo, tensão e suspense.'
						),
						(
						'Ficção Científica',
						'Explora conceitos imaginativos, tecnologia ou futuro.'
						),
						(
						'Romance',
						'Foca no desenvolvimento de um relacionamento amoroso.'
						),
						(
						'Suspense/Thriller',
						'Mantém o público tenso e ansioso com tramas de mistério.'
						),
						(
						'Animação',
						'Filmes feitos com desenhos, modelos ou computação gráfica.'
						),
						(
						'Aventura',
						'Narrativas de jornadas e exploração.'
						),
						(
						'Faroeste',
						'Ambientado no oeste americano, foca em conflitos da fronteira.'
						);
                        
select * from tbl_genero;

create table tbl_classificacao_indicativa(
	id 				int not null primary key auto_increment,
    nome 			varchar(50) not null,
    descricao		text not null,
    sigla			varchar(3) not null,
    idade_minima	varchar(3) not null
);

desc tbl_filme_genero;

insert into tbl_classificacao_indicativa(nome,
										descricao,
                                        sigla,
                                        idade_minima
										)value(
											'Livre',
											'Não expõe crianças a conteúdos potencialmente prejudiciais.',
											'L',
											0
											),
											(
											'Não recomendado para menores de 10 anos',
											'Conteúdo violento ou linguagem inapropriada para crianças, ainda que em menor intensidade.',
											'10',
											10
											),
											(
											'Não recomendado para menores de 12 anos',
											'As cenas podem conter agressão física, consumo de drogas e insinuação sexual.',
											'12',
											12
											),
											(
											'Não recomendado para menores de 14 anos',
											'Conteúdos mais violentos e/ou de linguagem sexual mais acentuada.',
											'14',
											14
											),
											(
											'Não recomendado para menores de 16 anos',
											'Conteúdos mais violentos ou com conteúdo sexual mais intenso, com cenas de tortura, suicídio, estupro e nudez total.',
											'16',
											16
											),
											(
											'Não recomendado para menores de 18 anos',
											'Conteúdos violentos e sexuais extremos. Cenas de sexo, incesto ou atos repetidos de tortura, mutilação e abuso sexual.',
											'18',
											18
											);
                                            
select * from tbl_estado;

create table tbl_estado(id int not null primary key auto_increment,
						sigla varchar(3) not null,
						nome varchar(35) not null 
);

insert into tbl_estado (sigla, nome)value(
										'SP',
										'São Paulo'
										),
										(
										'RJ',
										'Rio de Janeiro'
										),
										(
										'MG',
										'Minas Gerais'
										),
										(
										'PR',
										'Paraná'
										),
										(
										'SC',
										'Santa Catarina'
										),
										(
										'RS',
										'Rio Grande do Sul'
										),
										(
										'BA',
										'Bahia'
										),
										(
										'GO',
										'Goiás'
										),
										(
										'PE',
										'Pernambuco'
										),
										(
										'CE',
										'Ceará'
										);

use db_filmes_20261_a;

show tables;

desc tbl_filme_genero;

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
                                
#Adicionar a coluna do FK e criar relação com a tabela classificação 
alter table tbl_filmes
			add column id_classificacao_indicativa int not null,
			add constraint FK_CLASSIFICACAO_INDICATIVA_FILME
				foreign key (id_classificacao_indicativa)
                references tbl_classificacao_indicativa(id);
                
select * from tbl_classificacao_indicativa;

show tables;

delete from tbl_filmes;

create table tbl_filme_idioma (	id int not null auto_increment primary key,
								tipo varchar(100) not null,
								id_idioma int not null,
                                
                                #Relação com idioma
                                constraint 		FK_IDIOMA_FILMEIDIOMA
								foreign key 	(id_idioma)
                                references  	tbl_idioma(id)
                                )