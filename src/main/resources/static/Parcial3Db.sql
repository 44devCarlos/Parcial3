/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE IF NOT EXISTS `cod` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `cod`;

CREATE TABLE IF NOT EXISTS `info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(900) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=latin1;

INSERT INTO `info` (`id`, `descripcion`) VALUES
	(1, 'Call of Duty'),
	(2, 'Es una serie de videojuegos de disparos en primera persona, de estilo bélico, desarrollada principal e inicialmente por Infinity Ward, Treyarch, Sledgehammer Games y en menor proporción Raven Software y distribuida por Activision.'),
	(3, 'Image from Treyarch'),
	(4, 'Treyarch'),
	(5, 'Infinity Ward\r\n'),
	(6, 'Sledgehammer Games\r\n'),
	(7, 'Raven Software\r\n'),
	(8, 'Images from Activision'),
	(9, 'Nuestra misión es crear las mejores experiencias de juego para que el mundo las disfrute. Es simple de decir, pero difícil de realizar. Hemos pasado más de dos décadas impulsando la innovación, redefiniendo lo que es posible y aprendiendo de lo inesperado.'),
	(10, 'Reglas de oro para desarrollar los juegos'),
	(11, 'Escuchar a la comunidad'),
	(12, 'Mapas bien estructurados\r\n\r\n'),
	(13, 'Diseñar los niveles\r\n\r\n'),
	(14, 'Brindar una excelente jugabilidad'),
	(15, 'Diseño de personajes\r\n\r\n'),
	(16, 'Buena optimización\r\n\r\n'),
	(17, 'Porque son los mejores mapas?'),
	(18, 'Cuenta con un excelente EasterEgg.'),
	(19, 'Excelente diseño de mapa.'),
	(20, 'Personajes memorables.'),
	(21, 'Juegos desarrollados'),
	(22, 'Estos son algunos de los juegos que hemos desarrolado.'),
	(23, 'Die by the Sword'),
	(24, '1998'),
	(25, 'Tony Hawk\'s Pro Skater'),
	(26, '2000'),
	(27, '2012'),
	(28, 'Call of Duty Black Ops II'),
	(29, 'Call of Duty Black ops III'),
	(30, '2015'),
	(31, 'Call of Duty Black Ops IV'),
	(32, '2018'),
	(33, 'Call Of Duty Black Ops Cold War'),
	(34, '2020'),
	(35, 'Call of Duty Vanguard'),
	(36, '2021'),
	(37, 'Call of Duty Modern Warfare 2'),
	(38, '2022'),
	(39, 'PRESENTAMOS LA HISTORIA DE'),
	(40, 'MODERN WARFARE: ZOMBIS. COMIENZA LA OPERACIÓN DEADBOLT'),
	(41, 'La experiencia de Zombis llega al universo de Modern Warfare cuando un equipo de operadores de distintos países ayuda a los miembros de la fuerza operativa 141 a enfrentarse a hordas inmensas de no muertos provocadas por otra amenaza igual de acuciante.'),
	(42, 'https://c4.wallpaperflare.com/wallpaper/374/201/282/soldiers-call-of-duty-call-of-duty-modern-warfare-ghost-cod6-2560x1440-architecture-modern-hd-art-wallpaper-preview.jpg'),
	(43, 'https://c4.wallpaperflare.com/wallpaper/1010/701/293/chernobyl-pripyat-ferris-wheel-call-of-duty-4-modern-warfare-wallpaper-preview.jpg'),
	(44, 'https://yt3.googleusercontent.com/ytc/APkrFKaF_QxGU0EkzhAtBo4kQ0WwZcLLl2kG0sQLFHpE0g=s900-c-k-c0x00ffffff-no-rj'),
	(45, 'https://cdn.phenompeople.com/CareerConnectResources/INWAUS/social/IW_LOGO_1200-1537439639135.png'),
	(46, 'https://cdn.phenompeople.com/CareerConnectResources/SLGAUS/social/SHG-1024-1537869665339.png'),
	(47, 'https://seeklogo.com/images/R/raven-software-logo-350660A94A-seeklogo.com.png'),
	(48, 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/ft/FTVK4BD7ZFLX1601490185538.jpg'),
	(49, 'https://c4.wallpaperflare.com/wallpaper/209/251/804/cod-mw-ghost-call-of-duty-hd-wallpaper-preview.jpg'),
	(50, 'https://c4.wallpaperflare.com/wallpaper/954/297/226/call-duty-games-treyarch-wallpaper-preview.jpg'),
	(51, 'https://www.pixground.com/wp-content/uploads/2023/08/Call-of-Duty-Modern-Warfare-3-Price-4K-Wallpaper.jpg'),
	(52, 'https://c4.wallpaperflare.com/wallpaper/952/260/6/black-ops-3-zombies-der-eisendrache-wallpaper-preview.jpg'),
	(53, 'https://c4.wallpaperflare.com/wallpaper/513/374/336/black-ops-3-zombies-the-giant-wallpaper-preview.jpg'),
	(54, 'https://c4.wallpaperflare.com/wallpaper/790/727/718/face-mask-mask-military-armor-call-of-duty-hd-wallpaper-preview.jpg');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
