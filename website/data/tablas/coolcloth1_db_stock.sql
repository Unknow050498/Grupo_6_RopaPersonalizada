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
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-02-21 19:38:53
