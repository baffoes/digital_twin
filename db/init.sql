CREATE DATABASE IF NOT EXISTS digital_twin;
USE digital_twin;

CREATE TABLE iF NOT EXISTS building (
    id INT PRIMARY KEY AUTO_INCREMENT,   
    latitude INT NOT NULL,               
    longitude INT NOT NULL,              
    functie VARCHAR(255) NOT NULL,      
    isOpen BOOLEAN NOT NULL DEFAULT FALSE,             
    capaciteit INT NOT NULL              
);

INSERT INTO building (id, latitude, longitude, functie, isOpen, capaciteit) VALUES
(1, 1500, 300, 'Kantoor', true, 200),
(2, 300, 200, 'Winkel', false, 300),
(3, 200, 250, 'Appartement', true, 400),
(4, 1000, 220, 'School', true, 500);

CREATE TABLE event (
    id BIGINT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255),
    start_date_event DATE,
    end_date_event DATE,
    description TEXT
);