
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
-- 1 user to many journals
/* 
CREATE TABLE Journal (
journal_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT,
created_at DATE
card INT,
entry_one TEXT,
entry_two TEXT,
entry_three TEXT,
);
*/

-- REFERENCE TABLE
CREATE TABLE Users_Journal (
uj_id INT AUTO_INCREMENT PRIMARY KEY,
user_id INT
journal_id INT
);
