CREATE DATABASE curso;
USE curso;
CREATE TABLE prod(  
    cod_prod INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    desc_prod VARCHAR(150) NOT NULL,
    ean_prod BIGINT,
    dtcad_prod DATE NOT NULL  
);
CREATE TABLE est(
    cod_prod_est INT NOT NULL,
    qtd_est INT NOT NULL
);
CREATE TABLE mov(
    id_mov BIGINT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    tipo_mov CHAR NOT NULL,
    cod_prod INT NOT NULL,
    qtd_mov INT NOT NULL,
    dt_mov DATE,
    hr_mov TIME
);

INSERT INTO prod (desc_prod,ean_prod,dtcad_prod)values("TENIS ADIDAS N38BR PRETO",123456789101112,'2022-10-01');