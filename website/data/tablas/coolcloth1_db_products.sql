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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21 19:38:53
