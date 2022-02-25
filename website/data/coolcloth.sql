CREATE DATABASE  IF NOT EXISTS `coolcloth1_db` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `coolcloth1_db`;
-- MySQL dump 10.13  Distrib 8.0.18, for macos10.14 (x86_64)
--
-- Host: localhost    Database: coolcloth1_db
-- ------------------------------------------------------
-- Server version	8.0.16

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `username` varchar(16) NOT NULL,
  `name` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `dateborn` date NOT NULL,
  `sex` tinyint(4) NOT NULL,
  PRIMARY KEY (`username`),
  UNIQUE KEY `username_UNIQUE` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
INSERT INTO `clients` VALUES ('cliente','Cliente 1','cliente@gmail.com','cliente01.','1998-05-07',0),('cliente2','Cliente 2','cliente2@gmail.com','cliente02.','1988-10-09',1);
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id_Color` int(11) NOT NULL AUTO_INCREMENT,
  `name_color` varchar(20) NOT NULL,
  PRIMARY KEY (`id_Color`),
  UNIQUE KEY `id_Color_UNIQUE` (`id_Color`),
  UNIQUE KEY `name_color_UNIQUE` (`name_color`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (9,'Azul cielo'),(1,'Blanco'),(4,'Gris'),(5,'Gris Oxford'),(8,'Marino'),(7,'Morado'),(2,'Negro'),(3,'Rojo'),(6,'Rosa');
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id_images` int(11) NOT NULL AUTO_INCREMENT,
  `name_image` varchar(45) NOT NULL,
  PRIMARY KEY (`id_images`),
  UNIQUE KEY `id_images_UNIQUE` (`id_images`),
  UNIQUE KEY `name_image_UNIQUE` (`name_image`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'IMGPLACABSPI001_roja'),(3,'IMGPLADAMSPI001_roja'),(4,'IMGPLANINSPI001_ng'),(2,'IMGPLANINSPI001_roja');
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_images`
--

DROP TABLE IF EXISTS `product_images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_images` (
  `id_product_images` int(11) NOT NULL AUTO_INCREMENT,
  `images_id` int(11) NOT NULL,
  `stock_id` int(11) NOT NULL,
  PRIMARY KEY (`id_product_images`),
  UNIQUE KEY `id_product_images_UNIQUE` (`id_product_images`),
  KEY `images_id_idx` (`images_id`),
  KEY `stock_id_idx` (`stock_id`),
  CONSTRAINT `images_id` FOREIGN KEY (`images_id`) REFERENCES `images` (`id_images`),
  CONSTRAINT `stock_id` FOREIGN KEY (`stock_id`) REFERENCES `stock` (`id_Stock`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_images`
--

LOCK TABLES `product_images` WRITE;
/*!40000 ALTER TABLE `product_images` DISABLE KEYS */;
INSERT INTO `product_images` VALUES (1,1,8),(2,1,9),(3,1,10),(4,2,6),(5,2,7),(6,3,2),(7,3,3),(8,3,4),(9,3,5),(10,4,1);
/*!40000 ALTER TABLE `product_images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `model_Products` varchar(20) NOT NULL,
  `type_id` int(11) NOT NULL,
  `price` decimal(5,0) NOT NULL,
  `description_products` varchar(300) NOT NULL,
  `short_description` varchar(150) NOT NULL,
  `img_principal` varchar(45) NOT NULL,
  PRIMARY KEY (`model_Products`),
  UNIQUE KEY `id_Products_UNIQUE` (`model_Products`),
  KEY `type_id` (`type_id`),
  CONSTRAINT `type_id` FOREIGN KEY (`type_id`) REFERENCES `type_products` (`id_type_products`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES ('PLACABSPI001',3,365,'Playera manga corta, relaxed fit, Estampado en serigrafía sin tacto, 100% algodón, Hecho en México','Playera spiderman caballero','IMGPLACABSPI001.jpeg'),('PLADAMBAT001',2,350,'Playera con estampado de Batman y letras rojas 100% algodón','Playera Batman','IMGPLADAMBAT001.jpeg'),('PLADAMBAT002',2,350,'Playera de Dama de estampado de pintura de batman 100% algodón ','Playera Batman','IMGPLADAMBAT003.jpeg'),('PLADAMSPI001',2,345,'Playera manga corta, relaxed fit, Estampado en serigrafía sin tacto, 100% algodón, Hecho en México','Playera spiderman dama','IMGPLADAMSPI001.jpeg'),('PLANINSPI001',1,300,'Playera manga corta, relaxed fit, Estampado en serigrafía sin tacto, 100% algodón, Hecho en México','Playera spiderman niño','IMGPLANINSPI001.jpeg'),('SUDCABWW001',6,695,'Playera manga corta, relaxed fit, Estampado en serigrafía sin tacto, 100% algodón, Hecho en México','Sudadera wonder woman caballero','IMGSUDCABWW001.jpeg'),('SUDCABWW002',6,500,'Sudadera de caballero Wonder Woman','Sudadera WW caballero','IMGsudaderaWWH001.jpeg'),('SUDDAMGB001',5,450,'Sudadera Ghost Busters Dama ','Sudadera Ghost Busters Dama ','IMGsudaderaWWH001.jpeg'),('SUDDAMWW001',5,665,'Playera manga corta, relaxed fit, Estampado en serigrafía sin tacto, 100% algodón, Hecho en México','','IMGSUDDAMWW001.jpeg');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizes`
--

DROP TABLE IF EXISTS `sizes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizes` (
  `id_Sizes` int(11) NOT NULL AUTO_INCREMENT,
  `size` varchar(30) NOT NULL,
  PRIMARY KEY (`id_Sizes`),
  UNIQUE KEY `id_Sizes_UNIQUE` (`id_Sizes`),
  UNIQUE KEY `size_UNIQUE` (`size`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizes`
--

LOCK TABLES `sizes` WRITE;
/*!40000 ALTER TABLE `sizes` DISABLE KEYS */;
INSERT INTO `sizes` VALUES (2,'CH'),(4,'G'),(3,'M'),(1,'XCH'),(5,'XG'),(6,'XXG');
/*!40000 ALTER TABLE `sizes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stock`
--

DROP TABLE IF EXISTS `stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stock` (
  `id_Stock` int(11) NOT NULL AUTO_INCREMENT,
  `products_model` varchar(20) NOT NULL,
  `amount_Products` int(11) NOT NULL,
  `color_id` int(11) NOT NULL,
  `sizes_id` int(11) NOT NULL,
  `imgSecu_stock` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_Stock`),
  UNIQUE KEY `id_Stock_UNIQUE` (`id_Stock`),
  KEY `color_id` (`color_id`),
  KEY `id_Sizes` (`sizes_id`),
  KEY `model_Products` (`products_model`),
  CONSTRAINT `color_id` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id_Color`),
  CONSTRAINT `id_Sizes` FOREIGN KEY (`sizes_id`) REFERENCES `sizes` (`id_Sizes`),
  CONSTRAINT `model_Products` FOREIGN KEY (`products_model`) REFERENCES `products` (`model_Products`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stock`
--

LOCK TABLES `stock` WRITE;
/*!40000 ALTER TABLE `stock` DISABLE KEYS */;
INSERT INTO `stock` VALUES (1,'PLANINSPI001',10,2,1,NULL),(2,'PLADAMSPI001',5,3,1,NULL),(3,'PLADAMSPI001',5,3,2,NULL),(4,'PLADAMSPI001',5,3,3,NULL),(5,'PLADAMSPI001',5,3,4,NULL),(6,'PLANINSPI001',5,3,2,NULL),(7,'PLANINSPI001',5,3,3,NULL),(8,'PLACABSPI001',5,3,1,NULL),(9,'PLACABSPI001',5,3,2,NULL),(10,'PLACABSPI001',5,3,3,NULL),(11,'PLACABSPI001',6,3,6,NULL),(12,'SUDCABWW001',5,1,2,NULL),(13,'PLADAMBAT001',5,2,4,'IMGPLADAMBAT001_2.jpeg'),(14,'PLADAMBAT001',5,2,2,'null'),(15,'PLADAMBAT001',6,2,3,NULL),(16,'PLANINSPI001',3,4,4,'IMGPLANINSPI002.jpeg'),(17,'PLANINSPI001',6,5,2,'IMGPLANINSPI004.jpeg'),(18,'SUDCABWW002',6,1,1,NULL);
/*!40000 ALTER TABLE `stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type_products`
--

DROP TABLE IF EXISTS `type_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type_products` (
  `id_type_products` int(11) NOT NULL AUTO_INCREMENT,
  `name_type_products` varchar(45) NOT NULL,
  PRIMARY KEY (`id_type_products`),
  UNIQUE KEY `id_type_products_UNIQUE` (`id_type_products`),
  UNIQUE KEY `name_type_products_UNIQUE` (`name_type_products`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type_products`
--

LOCK TABLES `type_products` WRITE;
/*!40000 ALTER TABLE `type_products` DISABLE KEYS */;
INSERT INTO `type_products` VALUES (8,'Chamarra caballero'),(7,'Chamarra dama'),(3,'Playera caballero'),(2,'Playera dama'),(1,'Playera niño'),(6,'Sudadera caballero'),(5,'Sudadera dama'),(4,'Sudadera niño');
/*!40000 ALTER TABLE `type_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_employ` varchar(16) NOT NULL,
  `name_e` varchar(45) NOT NULL,
  `email_e` varchar(255) NOT NULL,
  `password_e` varchar(32) NOT NULL,
  `dateborn_e` date NOT NULL,
  `sex_e` tinyint(4) NOT NULL,
  `type_employ` varchar(45) NOT NULL,
  PRIMARY KEY (`user_employ`),
  UNIQUE KEY `useremploy_UNIQUE` (`user_employ`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('jclopez','Juan Carlos Lopez','jclopez@gmail.com','jclopez01','1998-05-04',0,'Admin'),('ssantos','Sandra de los Santos','ssantos@gmail.com','ssantos01','1988-03-26',1,'Admin');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21 19:42:39
