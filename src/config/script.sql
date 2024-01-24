-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS `db_helpdesk`;
-- Seleccionar la base de datos
USE `db_helpdesk`;
-- Crear la tabla de empleados
CREATE TABLE IF NOT EXISTS `users` (
    `id_user` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100),
    `last_name` VARCHAR(100),
    `user` VARCHAR(100),
    `password` VARCHAR(255),
    `rol` VARCHAR(50),
    `status` INT(11),
    `creationDate` DATETIME,
    `updateDate` DATETIME
);
-- Crear la tabla de categorias
CREATE TABLE IF NOT EXISTS `categories` (
    `id_category` INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100),
    `status` INT(11)
);
