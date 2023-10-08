# Ionic-Proyect

Create Database:
CREATE DATABASE db_cars;

Create table:
CREATE TABLE `car` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `marca` varchar(45) DEFAULT NULL,
  `modelo` varchar(45) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `descripcion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

Backend:
Cambiar dentro del archivo application.properties para poder acceder bien a la base de datos.

Frontend:
La aplicación es una especie de pagina de ventas/ofertas de coches, la pagina está hecha para que hagas lo que hagas se actualice todo automáticamente,
mi idea era crear otra tabla la cual fuera para ver las ofertas por cada cliente, pero al tener problemas con la aplicación y terminar tarde el trabajo en general
no pude realizar la idea, la idea es crear una oferta de coche con su marca, modelo, su precio y una descripción, al actualizar dependiendo de la oferta que sea
te sale toda la información de esa oferta para que la actualices, el boton de eliminar elimina una oferta en especifico, y hay buscador de ofertas, el cual
busca ofertas dada la marca que pases, si la marca no existe no saldrá nada pero si existe te buscara ofertas con esa parca, luego de que busques ofertas
aparecerá un boton el cual está oculto hasta que se busque una oferta la cual al pulsarlo volverá a mostrar todas las ofertas que hay, quería hacer la aplicacion
mas bonita pero no tuve el tiempo suficiente para hacerlo.

PostMan:
https://documenter.getpostman.com/view/29807283/2s9YJgSKXm
