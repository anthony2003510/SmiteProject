-- CLAVES FORANEAS
USE SmiteWiki
ALTER TABLE gods
ADD CONSTRAINT FK_pantheonsgods
FOREIGN KEY (id_pantheon) REFERENCES pantheons(id_pantheon);


ALTER TABLE gods
ADD CONSTRAINT FK_rolesgods
FOREIGN KEY (id_rol) REFERENCES roles(id_rol);


