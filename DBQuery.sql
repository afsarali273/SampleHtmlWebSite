CREATE SCHEMA `person` ;
use person;
-- Need to add all other fields here
CREATE TABLE PERSON (
    id INT PRIMARY KEY auto_increment,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    dob VARCHAR(50),
    email VARCHAR(50),
    mobile VARCHAR(20)
);

INSERT INTO PERSON(first_name,last_name,dob,email,mobile) 
VALUES ("Jamser","Ali",'1990-09-01',"jamserali@gmail.com","94657845");