CREATE SCHEMA TrabajoIntegradorProg2;
USE TrabajoIntegradorProg2;

CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `clave` varchar(100) NOT NULL,
  `fecha` date NOT NULL,
  `dni` int(11) NOT NULL,
  `foto_de_perfil` varchar(100) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8

INSERT INTO usuarios (id, email, clave, fecha, dni)
VALUES
(DEFAULT,'email1@gmail.com','contrasenia1','2005-06-29 00-00-00',46982347),
(DEFAULT,'email2@gmail.com','contrasenia2','2005-04-18 00-00-00',46678933),
(DEFAULT,'email3@gmail.com','contrasenia3','2005-09-01 00-00-00',46786312),
(DEFAULT,'email4@gmail.com','contrasenia4','2005-12-05 00-00-00',45679768),
(DEFAULT,'email5@gmail.com','contrasenia5','2005-10-19 00-00-00',46873423);

CREATE TABLE `productos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `foto_producto` varchar(100) NOT NULL,
  `nombre_producto` varchar(100) NOT NULL,
  `descripcion_producto` varchar(1000) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `usuario_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8

INSERT INTO productos (id, foto_producto, nombre_producto, descripcion_producto, usuario_id)
VALUES
(DEFAULT,'fotoproducto1','Iphone 15 Pro Max','El iPhone 15 Pro Max es el último buque insignia de Apple, con un diseño elegante y una potente tecnología. Con una pantalla OLED de alta calidad y una cámara avanzada, ofrece imágenes y videos impresionantes. Su rendimiento mejorado y la integración de características innovadoras lo convierten en un dispositivo líder en el mercado de teléfonos inteligentes', 4),
(DEFAULT,'fotoproducto2','Ipad Pro','La calidad de la pantalla del iPad Pro es simplemente impresionante. Los colores son vibrantes, el contraste es perfecto y la alta resolución hace que cada detalle se vea nítido y claro. Es una experiencia visual realmente inmersiva', 2),
(DEFAULT,'fotoproducto3','Apple Watch','El Apple Watch es un reloj inteligente diseñado por Apple que combina estilo y funcionalidad. Con una variedad de características, como monitoreo de actividad física, notificaciones en tiempo real y opciones de personalización, se adapta a las necesidades de los usuarios modernos. Su integración con otros dispositivos de Apple lo convierte en un compañero ideal para una vida conectada y activa.', 3),
(DEFAULT,'fotoproducto5','Apple Pencil','El Apple Pencil es un lápiz digital diseñado específicamente para los dispositivos iPad de Apple. Con una punta sensible a la presión, ofrece una experiencia de escritura y dibujo natural y precisa. Su conectividad inalámbrica y la tecnología de carga magnética lo hacen conveniente de usar y mantener cargado. Es una herramienta versátil para tomar notas, crear ilustraciones y realizar tareas creativas en la pantalla del iPad.', 1),
(DEFAULT,'fotoproducto6','Macbook Pro','El MacBook Pro es una poderosa computadora portátil diseñada por Apple para usuarios profesionales y creativos. Con un diseño elegante y delgado, ofrece un rendimiento excepcional gracias a su potente procesador y gráficos avanzados. La pantalla Retina de alta resolución y los altavoces de calidad mejoran la experiencia visual y auditiva. Además, cuenta con características como el Touch Bar y Touch ID para una mayor comodidad y seguridad. Es ideal para tareas exigentes como edición de video, diseño gráfico y programación.', 4),
(DEFAULT,'fotoproducto7','iMac','El iMac es una computadora de escritorio todo-en-uno diseñada por Apple que combina potencia y elegancia en un único dispositivo. Con su pantalla Retina de alta resolución y su rendimiento de primera clase, es ideal para tareas creativas y profesionales. Su diseño delgado y minimalista oculta potentes componentes internos que ofrecen un rendimiento excepcional en un espacio reducido. Es una opción popular para aquellos que buscan un equipo potente y con estilo para su espacio de trabajo o entretenimiento en el hogar.', 2),
(DEFAULT,'fotoproducto8','Apple TV 4k','El Apple TV 4K es un dispositivo de transmisión de medios que ofrece una experiencia de entretenimiento de alta calidad en tu televisor. Con su capacidad para reproducir contenido en resolución 4K y HDR, brinda imágenes nítidas y vibrantes con colores más realistas y contrastes mejorados. Además, cuenta con un potente procesador que garantiza una reproducción suave y rápida de videos y juegos, así como acceso a una amplia gama de aplicaciones y servicios de streaming. Su interfaz intuitiva y el control por voz a través de Siri lo hacen fácil de usar y navegar. Es una excelente opción para aquellos que desean disfrutar de contenido multimedia de primera calidad en su hogar', 5),
(DEFAULT,'fotoproducto9','Airpods Max','Los AirPods Max son auriculares inalámbricos de diadema de alta gama diseñados por Apple. Ofrecen una experiencia de audio excepcional con calidad de estudio, gracias a sus controladores dinámicos personalizados y la tecnología de cancelación activa de ruido. Su diseño elegante y ergonómico incluye características como almohadillas de espuma viscoelástica y una diadema de malla de acero inoxidable que proporcionan comodidad durante largas sesiones de escucha. Además, cuentan con funcionalidades como el audio espacial y el seguimiento de la cabeza, lo que ofrece una experiencia de sonido envolvente y personalizada.',3),
(DEFAULT,'fotoproducto10','Mac Pro','El Apple Mac Pro es una estación de trabajo de alto rendimiento diseñada para usuarios profesionales que requieren capacidades de computación intensivas. Con su diseño modular, permite a los usuarios personalizar y expandir el hardware según sus necesidades específicas, lo que incluye opciones de CPU, GPU, memoria y almacenamiento. Equipado con potentes procesadores Intel Xeon y gráficos AMD, ofrece un rendimiento excepcional para tareas como edición de video, renderizado 3D, desarrollo de software y diseño gráfico. Además, cuenta con un sistema de refrigeración avanzado que mantiene los componentes funcionando de manera óptima incluso durante las cargas de trabajo más exigentes. Es la elección ideal para profesionales creativos y técnicos que buscan la máxima potencia y flexibilidad en su trabajo.', 1);

CREATE TABLE `comentarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `producto_id` int(10) unsigned NOT NULL,
  `usuario_id` int(10) unsigned NOT NULL,
  `comentario` varchar(400) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `producto_id` (`producto_id`),
  CONSTRAINT `comentarios_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`),
  CONSTRAINT `comentarios_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8

INSERT INTO comentarios (id, producto_id, usuario_id, comentario)
VALUES
(DEFAULT, 41, 1, "comentario1"),
(DEFAULT, 41, 2, "comentario2"),
(DEFAULT, 41, 3, "comentario3"),
(DEFAULT, 42, 4, "comentario4"),
(DEFAULT, 42, 5, "comentario5"),
(DEFAULT, 42, 1, "comentario6"),
(DEFAULT, 43, 2, "comentario7"),
(DEFAULT, 43, 3, "comentario8"),
(DEFAULT, 43, 4, "comentario9"),
(DEFAULT, 44, 5, "comentario10"),
(DEFAULT, 44, 1, "comentario11"),
(DEFAULT, 44, 2, "comentario12"),
(DEFAULT, 45, 3, "comentario13"),
(DEFAULT, 45, 4, "comentario14"),
(DEFAULT, 45, 5, "comentario15"),
(DEFAULT, 46, 1, "comentario16"),
(DEFAULT, 46, 2, "comentario17"),
(DEFAULT, 46, 3, "comentario18"),
(DEFAULT, 47, 4, "comentario19"),
(DEFAULT, 47, 5, "comentario20"),
(DEFAULT, 47, 1, "comentario21"),
(DEFAULT, 48, 2, "comentario22"),
(DEFAULT, 48, 3, "comentario23"),
(DEFAULT, 48, 4, "comentario24"),
(DEFAULT, 49, 5, "comentario25"),
(DEFAULT, 49, 1, "comentario26"),
(DEFAULT, 49, 2, "comentario27"),
(DEFAULT, 50, 3, "comentario28"),
(DEFAULT, 50, 4, "comentario29"),
(DEFAULT, 50, 5, "comentario30");