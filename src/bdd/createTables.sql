USE SmiteWiki


DROP TABLE gods;
CREATE TABLE gods
(
    id_god INT PRIMARY KEY NOT NULL,
    name_god NVARCHAR(50) NOT NULL,
    id_pantheon INT NOT NULL,
    id_rol INT NOT NULL,
    dmg_type NVARCHAR(50) NOT NULL,
    atack_type NVARCHAR (50) NOT NULL,
    lore_god NVARCHAR(MAX)
);

DROP TABLE pantheons;
CREATE TABLE pantheons
(
    id_pantheon INT PRIMARY KEY NOT NULL,
    name_pantheon NVARCHAR(50) NOT NULL,
    lore_pantheon NVARCHAR(MAX) 
)

DROP TABLE roles;
CREATE TABLE roles
(
    id_rol INT PRIMARY KEY NOT NULL,
    name_rol NVARCHAR(50) NOT NULL,
    desc_rol NVARCHAR(250) NOT NULL,
    passive_rol NVARCHAR(250) NOT NULL
)



