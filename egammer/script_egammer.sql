create database  egammer;
use egammer;

create table usuario (

	usu_codigo bigint primary key auto_increment,
    usu_nome varchar(250),
    usu_senha varchar(250),
    usu_email varchar(200),
    usu_tipo varchar(30)
)

create table pedido (
	
    ped_codigo bigint primary key auto_increment,
    ped_data date,
    ped_valor double,
    usu_codigo bigint,
    constraint usu_fk foreign key (usu_codigo) references usuario (usu_codigo)
)

create table genero (
	
    gen_codigo bigint primary key auto_increment,
    gen_descricao varchar(250)
)

create table desenvolvedora (
	des_codigo bigint primary key auto_increment,
    des_studio varchar(250),
    des_distribuidora varchar(250)
)

create table game (
	
	gam_codigo bigint primary key auto_increment,
    gam_titulo varchar(250),
	gam_descricao varchar(500),
	gam_preco double, 
	gam_quant bigint,
	gam_capa varchar(500),
	gam_img01 varchar(500),
	gam_img02 varchar(500),
	gam_img03 varchar(500),
	gam_classificacao varchar(10),
	gam_data date,
	gam_plataforma varchar(50),
	gen_codigo bigint,
	des_codigo bigint,
	constraint gen_fk foreign key (gen_codigo) references genero (gen_codigo),
	constraint des_fk foreign key (des_codigo) references desenvolvedora (des_codigo)
)
    
create table item_pedido (
	
    ite_codigo bigint primary key auto_increment,
    ite_preco double,
    ite_quant bigint,
    ite_total double,
    ped_codigo bigint,
    gam_codigo bigint,
    constraint ped_fk foreign key (ped_codigo) references pedido (ped_codigo),
    constraint gam_fk foreign key (gam_codigo) references game (gam_codigo)
)


create table autorizacao (
	
    aut_id bigint primary key auto_increment,
    aut_nome varchar(250)
)

create table uau_usuario_autorizacao (
	usu_codigo bigint,
    aut_id bigint,
    constraint usr_aut_fk foreign key (usu_codigo) references usuario (usu_codigo),
    constraint aut_usu_fk foreign key (aut_id) references autorizacao (aut_id)
)

