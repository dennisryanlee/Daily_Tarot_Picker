
-- CREATE DATABASE Tarotcards;
-- USE Tarotcards; 
-- SHOW TABLES;
-- DROP TABLE Journal;
-- DROP TABLE Descriptions;

 --  MAIN TABLES 
/*
CREATE TABLE Users (
user_id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(60) NOT NULL UNIQUE,
password VARCHAR(60) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
*/
/* 1 user to many journals
CREATE TABLE Journal (
journal_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
entry_one TEXT,
entry_two TEXT,
entry_three TEXT,
entry_four TEXT,
entry_five TEXT,
created_at DATE
);
*/
/* 1 user to 1 description
CREATE TABLE Descriptions (
description_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
description_link_one TEXT,
description_link_two TEXT,
description_link_three TEXT
)
*/
-- REFERENCE TABLES
CREATE TABLE Users_Journal (
uj_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT
journal_id INT
);

CREATE TABLE Users_Descriptions (
ud_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT
description_id INT
);