
CREATE DATABASE IF NOT EXISTS companydb;

USE companydb; 

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT, 
  name VARCHAR(45) DEFAULT NULL,
  salary int(11) DEFAULT NULL,
  PRIMARY KEY (id)
);

INSERT INTO employee (name, salary) VALUES ('John', 1000);
