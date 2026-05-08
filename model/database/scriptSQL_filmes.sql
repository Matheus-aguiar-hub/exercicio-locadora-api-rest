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
                        capa
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
                        'https://br.web.img3.acsta.net/c_310_420/img/5b/ea/5bea1aeac3323aeaaf82449a34fafbbf.jpg'
                        );
                        
select * from tbl_filmes;

desc tbl_filmes;

select * from tbl_filmes order by id asc;

TRUNCATE TABLE tbl_filmes;

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

desc tbl_classificacao_indicativa;

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
                                            
select * from tbl_classificacao_indicativa;