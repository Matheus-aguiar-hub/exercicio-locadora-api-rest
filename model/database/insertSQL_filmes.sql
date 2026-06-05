use db_filmes_20261_a;

select * from tbl_genero;
select * from tbl_classificacao_indicativa;
select * from tbl_idioma;
select * from tbl_sexo;
select * from tbl_nacionalidade;
select * from tbl_tipo_telefone;

-- --------------------------------
-- 			TABELA GÊNERO
-- --------------------------------

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
                        
-- --------------------------------
-- TABELA CLASSIFICAÇÃO INDICATIVA
-- --------------------------------

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
                                            
  
-- -------------------------------------------------
-- 				TABELA DE IDIOMA
-- -------------------------------------------------
insert into tbl_idioma (
						nome,
                        sigla
						)
						values(
						'Português',
						'PT-BR'
						),
						(
						'Inglês',
						'EN'
						),
						(
						'Espanhol',
						'ES'
						),
						(
						'Francês',
						'FR'
						),
						(
						'Alemão',
						'DE'
						);

-- -------------------------------------------------
-- 				TABELA SEXO
-- -------------------------------------------------
insert into tbl_sexo(
					nome,
                    sigla)
					values(
					'Masculino',
					'M'
					),
					(
					'Feminino',
					'F'
					),
					(
					'Não Binário',
					'NB'
					),
					(
					'Outro',
					'OUT'
					),
					(
					'Prefere Não Informar',
					'PNI'
					);
                        
-- -------------------------------------------------
-- 				TABELA NACIONALIDADE
-- -------------------------------------------------
insert into tbl_nacionalidade (
								nome_pais
                                )
								values(
								'Brasil'
								),
								(
								'Estados Unidos'
								),
								(
								'Canadá'
								),
								(
								'Reino Unido'
								),
								(
								'França'
								);
                                
-- -------------------------------------------------
-- 				TABELA TIPO DE TELEFONE
-- -------------------------------------------------

insert into tbl_tipo_telefone ( 
						tipo
						)
                        values(
						'Comercial'
						),
						(
						'Celular'
						),
						(
						'WhatsApp'
						),
						(
						'SAC'
						),
						(
						'Suporte Técnico'
						);
                        
-- -------------------------------------------------
-- 				TABELA PRODUTORA
-- -------------------------------------------------

insert into tbl_produtora(
						nome_fantasia,
                        cnpj,
                        razao_social,
                        website,
                        data_inicio,
                        status_produtora,
                        email
						)
						values(
						'Galaxy Pictures',
						'12.345.678/0001-90',
						'Galaxy Pictures Producoes Cinematograficas LTDA',
						'https://www.galaxypictures.com',
						'2015-03-12',
						'Ativa',
						'contato@galaxypictures.com'
						),
						(
						'Vision Studios',
						'23.456.789/0001-81',
						'Vision Studios Entretenimento LTDA',
						'https://www.visionstudios.com',
						'2012-08-25',
						'Ativa',
						'contato@visionstudios.com'
						),
						(
						'Dragon Films',
						'34.567.890/0001-72',
						'Dragon Films Producoes Audiovisuais LTDA',
						'https://www.dragonfilms.com',
						'2018-06-14',
						'Ativa',
						'contato@dragonfilms.com'
						),
						(
						'Nebula Entertainment',
						'45.678.901/0001-63',
						'Nebula Entertainment Brasil LTDA',
						'https://www.nebulaentertainment.com',
						'2020-11-03',
						'Ativa',
						'contato@nebulaentertainment.com'
						),
						(
						'Sunrise Motion Pictures',
						'56.789.012/0001-54',
						'Sunrise Motion Pictures LTDA',
						'https://www.sunrisemotion.com',
						'2010-01-20',
						'Ativa',
						'contato@sunrisemotion.com'
						);