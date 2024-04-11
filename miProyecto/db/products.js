let express = require('express')

let products = {lista:[
  {
    id: 1,
    imagen: null,
    nombre: "Iphone 15 pro max",
    descripcion:
      "El iPhone 15 Pro Max es el último buque insignia de Apple, con un diseño elegante y una potente tecnología. Con una pantalla OLED de alta calidad y una cámara avanzada, ofrece imágenes y videos impresionantes. Su rendimiento mejorado y la integración de características innovadoras lo convierten en un dispositivo líder en el mercado de teléfonos inteligentes",
    comentarios: [
      {
        nombre_usuario: "usuario1",
        comentario:
          "Estoy absolutamente impresionado con la calidad de la cámara del iPhone 15 Pro Max. Las fotos y los videos son asombrosos, incluso en condiciones de poca luz. Realmente siento que captura cada momento de manera vívida y nítida",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario2",
        comentario:
          "Debo admitir que me decepcionó un poco la duración de la batería. Esperaba que fuera un poco más duradera, especialmente considerando el precio del dispositivo. A veces siento que necesito cargarlo más a menudo de lo que me gustaría",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario3",
        comentario:
          "En cuanto al diseño, creo que Apple ha mantenido su estética elegante y moderna. Sin embargo, no veo demasiadas diferencias significativas con respecto a los modelos anteriores en términos de apariencia. Es bonito, pero no necesariamente revolucionario",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 2,
    imagen: null,
    nombre: "Ipad Pro",
    descripcion:
      "El iPad Pro es una potente tableta diseñada por Apple, que ofrece un rendimiento excepcional y una pantalla impresionante. Con su diseño delgado y elegante, es perfecto para la productividad y el entretenimiento en cualquier lugar. Su compatibilidad con el Apple Pencil y el Magic Keyboard lo convierte en una herramienta versátil para crear y trabajar en movimiento.",
    comentarios: [
      {
        nombre_usuario: "usuario4",
        comentario:
          "La calidad de la pantalla del iPad Pro es simplemente impresionante. Los colores son vibrantes, el contraste es perfecto y la alta resolución hace que cada detalle se vea nítido y claro. Es una experiencia visual realmente inmersiva",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario5",
        comentario:
          "Me resulta un poco incómodo el tamaño del iPad Pro para usarlo en ciertas situaciones, como cuando estoy acostado o en espacios reducidos. A veces siento que preferiría un dispositivo un poco más compacto para estas ocasiones",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario1",
        comentario:
          "En cuanto al diseño, creo que el iPad Pro mantiene la elegancia y la simplicidad característica de los productos de Apple. Es ligero y fácil de transportar, pero no veo muchas diferencias significativas con respecto a modelos anteriores en términos de apariencia",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 3,
    imagen: null,
    nombre: "Apple Watch",
    descripcion:
      "El Apple Watch es un reloj inteligente diseñado por Apple que combina estilo y funcionalidad. Con una variedad de características, como monitoreo de actividad física, notificaciones en tiempo real y opciones de personalización, se adapta a las necesidades de los usuarios modernos. Su integración con otros dispositivos de Apple lo convierte en un compañero ideal para una vida conectada y activa.",
    comentarios: [
      {
        nombre_usuario: "usuario2",
        comentario:
          "La capacidad de procesamiento del Apple Watch es impresionante. Su chip S7 y la optimización del software permiten una experiencia fluida y sin retrasos al ejecutar aplicaciones y realizar tareas exigentes. La respuesta táctil y la velocidad de carga de las aplicaciones son notablemente rápidas, lo que mejora significativamente la experiencia del usuario",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario3",
        comentario:
          "He observado que la autonomía de la batería del Apple Watch podría ser más consistente. Aunque ofrece un rendimiento aceptable para un uso diario moderado, las fluctuaciones en el consumo de energía pueden afectar la duración de la batería, especialmente durante el uso intensivo de funciones como el seguimiento de entrenamientos o el streaming de música",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario4",
        comentario:
          "En cuanto al diseño y la construcción, el Apple Watch sigue manteniendo su calidad y durabilidad características. Si bien no hay cambios significativos en el aspecto físico en comparación con modelos anteriores, la resistencia al agua y al polvo, junto con la pantalla siempre encendida mejorada, son aspectos que se aprecian en términos de funcionalidad y comodidad de uso",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 4,
    imagen: null,
    nombre: "Airpods Pro",
    descripcion:
      "Los AirPods Pro de Apple son auriculares inalámbricos con cancelación activa de ruido, diseñados para brindar una experiencia auditiva inmersiva. Con su ajuste personalizable, son cómodos de usar durante largos períodos de tiempo. Además, ofrecen una calidad de sonido excepcional y una conexión estable con dispositivos Apple. Su estuche de carga inalámbrica los hace convenientes para llevarlos a cualquier parte y mantenerlos siempre listos para usar.",
    comentarios: [
      {
        nombre_usuario: "usuario5",
        comentario:
          "La cancelación activa de ruido de los AirPods Pro es impresionante. Utiliza un sistema de micrófonos externos e internos para detectar y neutralizar el ruido externo de manera efectiva, proporcionando una experiencia auditiva inmersiva incluso en entornos ruidosos. La adaptabilidad de este sistema a diferentes frecuencias de sonido asegura que se reduzca el ruido de fondo sin comprometer la calidad del audio que se reproduce",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario1",
        comentario:
          "He notado que la vida útil de la batería de los AirPods Pro podría ser mejor. Aunque la duración de la batería es decente para su tamaño y características, la capacidad de la batería puede disminuir gradualmente con el tiempo, especialmente con un uso constante de funciones como la cancelación activa de ruido y la reproducción continua de música. Esto puede resultar un inconveniente para aquellos que necesitan usarlos durante largos períodos sin acceso a una fuente de carga",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario2",
        comentario:
          "En cuanto a la conectividad, los AirPods Pro ofrecen una conexión rápida y estable con dispositivos Apple gracias al chip H1 integrado. La tecnología Bluetooth 5.0 garantiza una transmisión de audio confiable y de baja latencia, lo que mejora la experiencia de uso en términos de sincronización de audio y respuesta táctil. Sin embargo, algunos usuarios pueden experimentar problemas ocasionales de conectividad en entornos con una alta interferencia de señal o con dispositivos no compatibles con Bluetooth 5.0",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 5,
    imagen: null,
    nombre: "Apple Pencil",
    descripcion:
      "El Apple Pencil es un lápiz digital diseñado específicamente para los dispositivos iPad de Apple. Con una punta sensible a la presión, ofrece una experiencia de escritura y dibujo natural y precisa. Su conectividad inalámbrica y la tecnología de carga magnética lo hacen conveniente de usar y mantener cargado. Es una herramienta versátil para tomar notas, crear ilustraciones y realizar tareas creativas en la pantalla del iPad.",
    comentarios: [
      {
        nombre_usuario: "usuario3",
        comentario:
          "La sensibilidad y precisión del Apple Pencil son notables. Su tecnología de detección de presión y ángulo permite una experiencia de escritura y dibujo excepcionalmente fluida y natural. Además, la baja latencia garantiza una respuesta inmediata en la pantalla, lo que mejora la precisión y la sensación táctil en cada trazo",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario4",
        comentario:
          "Aunque el Apple Pencil es altamente funcional, he experimentado ciertas limitaciones en su conectividad. En ocasiones, la sincronización entre el lápiz y el iPad puede ser inconsistente, lo que resulta en pequeñas interrupciones en el flujo de trabajo. Esto puede ser frustrante, especialmente durante sesiones de dibujo o escritura intensivas donde se requiere una conexión estable y confiable",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario5",
        comentario:
          "En cuanto al diseño, el Apple Pencil es ergonómico y cómodo de sostener, lo que facilita su uso durante largos períodos. La construcción duradera y la punta intercambiable garantizan una experiencia de uso consistente y confiable a lo largo del tiempo. Aunque no presenta innovaciones radicales en términos de diseño, cumple eficazmente su función como herramienta de entrada para el iPad",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 6,
    imagen: null,
    nombre: "Macbook Pro",
    descripcion:
      "El MacBook Pro es una poderosa computadora portátil diseñada por Apple para usuarios profesionales y creativos. Con un diseño elegante y delgado, ofrece un rendimiento excepcional gracias a su potente procesador y gráficos avanzados. La pantalla Retina de alta resolución y los altavoces de calidad mejoran la experiencia visual y auditiva. Además, cuenta con características como el Touch Bar y Touch ID para una mayor comodidad y seguridad. Es ideal para tareas exigentes como edición de video, diseño gráfico y programación.",
    comentarios: [
      {
        nombre_usuario: "usuario1",
        comentario:
          "El rendimiento del MacBook Pro es impresionante. Equipado con un procesador de última generación y gráficos potentes, es capaz de manejar fácilmente tareas exigentes como la edición de video en 4K, renderizado 3D y desarrollo de software sin mostrar signos de ralentización. La capacidad de respuesta del sistema y la velocidad de carga de las aplicaciones son excepcionales, lo que mejora significativamente mi productividad",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario2",
        comentario:
          "He notado que el MacBook Pro tiende a calentarse considerablemente bajo cargas de trabajo intensivas. Aunque el diseño del sistema de refrigeración es efectivo en la mayoría de los casos, en situaciones de uso prolongado y exigente, la temperatura puede alcanzar niveles incómodos, lo que podría afectar el rendimiento a largo plazo y la comodidad del usuario",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario3",
        comentario:
          "En cuanto al diseño y la construcción, el MacBook Pro mantiene su estética elegante y minimalista característica de Apple. La calidad de los materiales y la atención al detalle son evidentes en cada aspecto, desde el acabado de aluminio hasta el teclado retroiluminado. Sin embargo, algunos usuarios pueden encontrar que la falta de puertos tradicionales, como USB-A y HDMI, requiere adaptadores adicionales para una conectividad más amplia",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 7,
    imagen: null,
    nombre: "iMac",
    descripcion:
      "El iMac es una computadora de escritorio todo-en-uno diseñada por Apple que combina potencia y elegancia en un único dispositivo. Con su pantalla Retina de alta resolución y su rendimiento de primera clase, es ideal para tareas creativas y profesionales. Su diseño delgado y minimalista oculta potentes componentes internos que ofrecen un rendimiento excepcional en un espacio reducido. Es una opción popular para aquellos que buscan un equipo potente y con estilo para su espacio de trabajo o entretenimiento en el hogar.",
    comentarios: [
      {
        nombre_usuario: "usuario4",
        comentario:
          "La pantalla del iMac es simplemente asombrosa. Con su tecnología Retina de alta resolución y una amplia gama de colores, ofrece imágenes nítidas y vibrantes que son ideales para la edición de fotos y videos. Además, la uniformidad de la retroiluminación y el brillo ajustable garantizan una experiencia visual inmersiva y cómoda durante largas sesiones de trabajo",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario5",
        comentario:
          "He notado que el iMac puede ser un poco limitado en términos de opciones de actualización. A diferencia de las computadoras de escritorio tradicionales, donde es posible actualizar componentes como la RAM o el almacenamiento, el diseño todo en uno del iMac hace que estas actualizaciones sean más complicadas o incluso imposibles para el usuario promedio. Esto puede ser frustrante para aquellos que desean mantener su sistema al día con los últimos avances tecnológicos",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario1",
        comentario:
          "En cuanto al rendimiento, el iMac ofrece un equilibrio sólido entre potencia y eficiencia. El procesador de última generación y los gráficos dedicados proporcionan un rendimiento fluido en una amplia variedad de aplicaciones, desde la edición de video hasta la creación de música. Sin embargo, algunos usuarios pueden encontrar que el ventilador interno puede volverse ruidoso bajo cargas de trabajo intensivas, lo que puede ser un factor a considerar en entornos donde el ruido es una preocupación",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 8,
    imagen: null,
    nombre: "Apple TV 4k",
    descripcion:
      "El Apple TV 4K es un dispositivo de transmisión de medios que ofrece una experiencia de entretenimiento de alta calidad en tu televisor. Con su capacidad para reproducir contenido en resolución 4K y HDR, brinda imágenes nítidas y vibrantes con colores más realistas y contrastes mejorados. Además, cuenta con un potente procesador que garantiza una reproducción suave y rápida de videos y juegos, así como acceso a una amplia gama de aplicaciones y servicios de streaming. Su interfaz intuitiva y el control por voz a través de Siri lo hacen fácil de usar y navegar. Es una excelente opción para aquellos que desean disfrutar de contenido multimedia de primera calidad en su hogar",
    comentarios: [
      {
        nombre_usuario: "usuario2",
        comentario:
          "La capacidad de procesamiento del Apple TV 4K es impresionante. Su chip A12 Bionic garantiza una reproducción fluida de contenido en resolución 4K y HDR, así como una ejecución rápida y receptiva de aplicaciones y juegos. La potencia del procesador también permite una navegación rápida por la interfaz y una experiencia de usuario sin problemas",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario3",
        comentario:
          "He experimentado cierta limitación en la personalización de la interfaz del Apple TV 4K. Aunque ofrece una amplia gama de aplicaciones y servicios de streaming, la capacidad de personalizar la disposición de las aplicaciones en la pantalla de inicio es limitada. Esto puede resultar frustrante para aquellos que desean organizar su contenido de manera más eficiente o acceder rápidamente a aplicaciones específicas",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario4",
        comentario:
          "En cuanto a la conectividad, el Apple TV 4K ofrece una variedad de opciones, incluyendo Wi-Fi de doble banda y Bluetooth. Si bien estas opciones garantizan una conexión estable y confiable con otros dispositivos y redes, algunos usuarios pueden encontrar que la falta de un puerto Ethernet dedicado limita las opciones de conexión en entornos donde el Wi-Fi puede ser poco confiable",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 9,
    imagen: null,
    nombre: "Airpods Max",
    descripcion:
      "Los AirPods Max son auriculares inalámbricos de diadema de alta gama diseñados por Apple. Ofrecen una experiencia de audio excepcional con calidad de estudio, gracias a sus controladores dinámicos personalizados y la tecnología de cancelación activa de ruido. Su diseño elegante y ergonómico incluye características como almohadillas de espuma viscoelástica y una diadema de malla de acero inoxidable que proporcionan comodidad durante largas sesiones de escucha. Además, cuentan con funcionalidades como el audio espacial y el seguimiento de la cabeza, lo que ofrece una experiencia de sonido envolvente y personalizada.",
    comentarios: [
      {
        nombre_usuario: "usuario5",
        comentario:
          "La calidad de sonido de los AirPods Max es impresionante. Sus controladores dinámicos personalizados y la tecnología de cancelación activa de ruido ofrecen una experiencia auditiva inmersiva y detallada. Los bajos son potentes y bien definidos, mientras que los agudos son claros y precisos. Además, el audio espacial y el seguimiento de la cabeza añaden una dimensión adicional al sonido, creando una sensación de inmersión total",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario1",
        comentario:
          "He notado que los AirPods Max pueden ser un poco pesados y voluminosos, lo que puede resultar incómodo durante largas sesiones de uso. Aunque las almohadillas de espuma viscoelástica ofrecen comodidad, la presión ejercida por la diadema y el peso general de los auriculares pueden causar fatiga en la cabeza y las orejas después de un tiempo. Esto puede ser especialmente problemático para aquellos que los usan durante largos períodos",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario2",
        comentario:
          "En cuanto a la conectividad, los AirPods Max utilizan el chip H1 de Apple para una conexión inalámbrica rápida y estable con dispositivos iOS y macOS. La tecnología Bluetooth 5.0 garantiza una transmisión de audio confiable y de baja latencia, lo que mejora la calidad de la reproducción de sonido y reduce los retrasos. Sin embargo, algunos usuarios pueden experimentar problemas de conectividad en entornos con una alta interferencia de señal o con dispositivos no compatibles con Bluetooth 5.0",
        foto_perfil: null,
      },
    ],
  },
  {
    id: 10,
    imagen: null,
    nombre: "Mac Pro",
    descripcion:
      "El Apple Mac Pro es una estación de trabajo de alto rendimiento diseñada para usuarios profesionales que requieren capacidades de computación intensivas. Con su diseño modular, permite a los usuarios personalizar y expandir el hardware según sus necesidades específicas, lo que incluye opciones de CPU, GPU, memoria y almacenamiento. Equipado con potentes procesadores Intel Xeon y gráficos AMD, ofrece un rendimiento excepcional para tareas como edición de video, renderizado 3D, desarrollo de software y diseño gráfico. Además, cuenta con un sistema de refrigeración avanzado que mantiene los componentes funcionando de manera óptima incluso durante las cargas de trabajo más exigentes. Es la elección ideal para profesionales creativos y técnicos que buscan la máxima potencia y flexibilidad en su trabajo.",
    comentarios: [
      {
        nombre_usuario: "usuario3",
        comentario:
          "La potencia de procesamiento del Apple Mac Pro es impresionante. Con la opción de configuraciones que van desde procesadores Intel Xeon de hasta 28 núcleos y 56 hilos, hasta opciones de memoria ECC de hasta 1.5 TB, es capaz de manejar cargas de trabajo intensivas con facilidad. Esto lo convierte en una opción excelente para tareas como renderizado 3D, edición de video 8K y desarrollo de software de alta gama, donde se requiere un rendimiento excepcional",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario4",
        comentario:
          "El precio del Apple Mac Pro puede ser prohibitivo para muchos usuarios. Aunque su potencia y capacidades de expansión son impresionantes, el costo inicial del sistema base y las opciones de actualización pueden ser excesivamente altos para aquellos con presupuestos ajustados o necesidades de computación menos exigentes. Esto limita su accesibilidad a una audiencia más amplia y puede hacer que otros sistemas sean más atractivos desde un punto de vista económico",
        foto_perfil: null,
      },
      {
        nombre_usuario: "usuario5",
        comentario:
          "En cuanto al diseño, el Apple Mac Pro cuenta con un diseño elegante y funcional que combina rendimiento y capacidad de expansión. La disposición modular de los componentes facilita la actualización y el mantenimiento del sistema, lo que permite a los usuarios adaptarlo a sus necesidades cambiantes con el tiempo. Sin embargo, el tamaño y el peso del sistema pueden ser un inconveniente para aquellos que buscan una solución más compacta o portátil",
        foto_perfil: null,
      },
    ],
  },
]
};

module.exports = products