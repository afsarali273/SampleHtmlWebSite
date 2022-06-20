CREATE SCHEMA `person` ;
use person;
-- Need to add all other fields here
CREATE TABLE PERSON (
    id INT PRIMARY KEY auto_increment,
    person_id VARCHAR (100) NOT NULL,
    first_name VARCHAR (50) NOT NULL,
    last_name VARCHAR (50) NOT NULL,
    dob VARCHAR(20),
    email VARCHAR(50),
    mobile VARCHAR(20),
    institute_name VARCHAR(50),
    hsc_board VARCHAR(20),
    ssc_board VARCHAR(20)
);

-- POST API call 
INSERT INTO PERSON(person_id,first_name,last_name,dob,email,mobile) 
VALUES ("1233445","Jamser","Ali","12-03-1992","jamser@gmail.com","94657845");

-- Patch Query 
UPDATE PERSON
SET institute_name = "abc ", hsc_board = "bsc",ssc_board="cbsc"
WHERE person_id="1233445";