/* =====================================================================
   ✏️  ESTE ES EL ÚNICO ARCHIVO QUE NECESITAS EDITAR
   =====================================================================

   Aquí está TODA la información de tu portafolio: tus datos, tus
   habilidades, tus certificaciones y tus proyectos.

   REGLAS DE ORO (para que nada se rompa):
   1. Cambia solo el texto que está ENTRE COMILLAS "así".
   2. No borres las comillas, las comas ni los corchetes [ ] { }.
   3. Cada elemento de una lista va separado por una coma.
   4. Si quieres usar comillas dentro de un texto, usa las simples: 'así'.
   5. Guarda el archivo y recarga la página para ver los cambios.

   Si algo sale mal, la página te mostrará un aviso. Revisa la última
   línea que cambiaste (casi siempre es una coma o comilla que falta).
   ===================================================================== */

const CONTENIDO = {

  /* ------------------------------------------------------------------
     1. TUS DATOS PERSONALES
     ------------------------------------------------------------------ */
  nombre: "Tu Nombre Apellido",
  frase: "Estudiante de Mercadeo y Publicidad apasionada por las marcas y el contenido digital.",
  disponibilidad: "Disponible para prácticas profesionales",

  // Nombre del archivo de tu foto (debe estar dentro de la carpeta "imagenes")
  foto: "imagenes/foto-perfil.svg",

  /* ------------------------------------------------------------------
     2. SOBRE MÍ
     ------------------------------------------------------------------ */
  sobreMi: "Soy estudiante de Mercadeo y Publicidad en el Politécnico Grancolombiano. Me encanta entender por qué las personas eligen una marca y convertir esa idea en contenido que conecta. Busco mi primera práctica profesional para aportar creatividad, organización y muchas ganas de aprender.",

  // Datos rápidos que aparecen junto al párrafo
  universidad: "Politécnico Grancolombiano",
  carrera: "Mercadeo y Publicidad",
  ciudad: "Cali, Colombia",
  edad: "24 años",

  // Tus habilidades: agrega o quita las que quieras
  habilidades: [
    "Estrategia de marca",
    "Redes sociales",
    "Marketing digital",
    "Creación de contenido",
    "Canva",
    "Meta Ads",
    "Copywriting",
    "Investigación de mercados"
  ],

  // Tus certificaciones. Si no tienes, deja la lista vacía así:  certificaciones: [],
  certificaciones: [
    { nombre: "Fundamentos de Marketing Digital", entidad: "Google Actívate", año: "2025" },
    { nombre: "Meta Certified Digital Marketing Associate", entidad: "Meta Blueprint", año: "2025" },
    { nombre: "Inbound Marketing", entidad: "HubSpot Academy", año: "2024" }
  ],

  /* ------------------------------------------------------------------
     3. CONTACTO
     Si no quieres mostrar alguno, déjalo vacío así:  instagram: "",
     ------------------------------------------------------------------ */
  correo: "tucorreo@gmail.com",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  instagram: "https://www.instagram.com/tu-usuario",

  // Tu hoja de vida en PDF (debe estar dentro de la carpeta "documentos")
  cv: "documentos/CV.pdf",

  /* ------------------------------------------------------------------
     4. PROYECTOS
     Para agregar uno nuevo: copia un bloque completo, desde la llave {
     hasta la llave } con su coma, pégalo debajo del último y cambia
     el texto. Los proyectos aparecen en el mismo orden que aquí.
     ------------------------------------------------------------------ */
  proyectos: [

    {
      titulo: "Relanzamiento de marca para cafetería local",
      fecha: "Proyecto universitario · 2025",
      imagen: "imagenes/proyectos/proyecto-1.svg",
      resumen: "Nueva identidad visual y tono de comunicación para una cafetería de barrio en Cali que quería atraer público joven.",
      rol: "Estratega de marca",
      queHice: [
        "Investigué al público objetivo con encuestas a 80 personas.",
        "Definí la personalidad de marca, el tono de voz y la paleta de colores.",
        "Diseñé las piezas de lanzamiento en Canva."
      ],
      resultados: [
        "+35% de seguidores en Instagram en el primer mes.",
        "Calificación de 4,8 / 5 en la presentación final del curso."
      ],
      etiquetas: ["Branding", "Investigación", "Canva"],
      enlace: ""
    },

    {
      titulo: "Estrategia de contenido para emprendimiento de moda",
      fecha: "Proyecto freelance · 2025",
      imagen: "imagenes/proyectos/proyecto-2.svg",
      resumen: "Plan de contenidos de tres meses para una marca caleña de ropa sostenible en Instagram y TikTok.",
      rol: "Community manager",
      queHice: [
        "Creé el calendario editorial y los pilares de contenido.",
        "Escribí los textos (copys) y grabé reels con el equipo.",
        "Medí resultados cada semana y ajusté la estrategia."
      ],
      resultados: [
        "Alcance mensual pasó de 3.000 a 18.000 cuentas.",
        "+22% de mensajes directos preguntando por productos."
      ],
      etiquetas: ["Redes sociales", "Contenido", "TikTok"],
      enlace: ""
    },

    {
      titulo: "Campaña de pauta digital con Meta Ads",
      fecha: "Proyecto académico · 2024",
      imagen: "imagenes/proyectos/proyecto-3.svg",
      resumen: "Campaña de anuncios en Facebook e Instagram para promocionar un evento universitario con presupuesto limitado.",
      rol: "Planeación y pauta",
      queHice: [
        "Segmenté la audiencia por intereses y ubicación.",
        "Diseñé tres versiones de anuncio para hacer pruebas A/B.",
        "Optimicé el presupuesto según el rendimiento de cada anuncio."
      ],
      resultados: [
        "Costo por clic 40% menor al promedio del sector.",
        "Se vendió el 90% de las entradas del evento."
      ],
      etiquetas: ["Meta Ads", "Marketing digital"],
      enlace: ""
    }

  ]
};
