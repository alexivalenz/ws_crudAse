CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE datos_usuarios(
	id_usuario int PRIMARY KEY NOT NULL,
	nombre_usuario varchar(100) NOT NULL,
	estatus_usuario int NOT NULL
);

INSERT INTO datos_usuarios(nombre_usuario, estatus_usuario) VALUES ('nombre',1)

SELECT * FROM datos_usuarios;

--DROP TABLE datos_usuarios;

