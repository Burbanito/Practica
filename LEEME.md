# Mi portafolio: guía para editarlo

Esta guía explica, paso a paso, cómo cambiar tu información, tus proyectos, tu foto y tu CV. **No necesitas saber programar.**

---

## Cómo están organizadas las carpetas

```
📁 Practica
├── contenido.js          ← ✏️ TU INFORMACIÓN (el único archivo que vas a editar)
├── index.html            (estructura de la página, no lo toques)
├── LEEME.md              (esta guía)
├── 📁 imagenes
│   ├── foto-perfil.svg   ← tu foto (la vas a reemplazar)
│   ├── icono.svg         (el iconito de la pestaña del navegador)
│   └── 📁 proyectos      ← las imágenes de tus proyectos
├── 📁 documentos
│   └── CV.pdf            ← tu hoja de vida
├── 📁 css                (diseño, no lo toques)
├── 📁 js                 (funcionamiento, no lo toques)
└── 📁 practica-editaya   (tu página de práctica anterior, guardada aparte)
```

**Regla principal:** todo lo que quieras cambiar está en `contenido.js`. Las imágenes van en `imagenes` y el CV en `documentos`.

---

## Antes de empezar: qué programa usar

Para editar `contenido.js` necesitas un editor de texto sencillo. Te recomiendo **Visual Studio Code** (gratis): https://code.visualstudio.com

> ⚠️ No uses Word: le cambia el formato al archivo y lo daña.

**Para ver cómo va quedando:** haz doble clic en `index.html` y se abrirá en tu navegador. Cada vez que guardes un cambio, recarga la página (tecla **F5**, o desliza hacia abajo en el celular).

### Las 4 reglas de oro

1. Cambia solo el texto que está **entre comillas** `"así"`.
2. **No borres** las comillas `" "`, las comas `,` ni los corchetes `[ ]` y llaves `{ }`.
3. Cada elemento de una lista va separado por una **coma**.
4. Si necesitas comillas dentro de un texto, usa las simples: `'así'`.

Si te equivocas, la página te mostrará un aviso que dice **"Hay un error en el archivo contenido.js"**. Casi siempre es una coma o una comilla que falta en lo último que cambiaste. Revisa esa parte o deshaz el cambio con **Ctrl + Z** (en Mac: **Cmd + Z**).

---

## 1. Editar tus datos personales

Abre `contenido.js`. Arriba vas a ver algo así:

```js
nombre: "Tu Nombre Apellido",
frase: "Estudiante de Mercadeo y Publicidad apasionada por las marcas y el contenido digital.",
disponibilidad: "Disponible para prácticas profesionales",
```

Cambia el texto entre comillas por el tuyo. Por ejemplo:

```js
nombre: "Laura Gómez Ríos",
```

Lo mismo con `sobreMi`, `universidad`, `carrera`, `ciudad`, `edad`, `correo`, `linkedin` e `instagram`.

- **Para ocultar algo** (por ejemplo Instagram), déjalo vacío: `instagram: "",`
- **El primer nombre** aparece arriba a la izquierda como logo (por ejemplo: "Laura.").

### Habilidades

```js
habilidades: [
  "Estrategia de marca",
  "Redes sociales",
  "Canva"
],
```

- **Agregar una:** escribe una línea nueva entre comillas y pon una coma en la línea anterior.
- **Quitar una:** borra la línea completa.
- La última de la lista puede llevar coma o no; las demás **sí** deben llevarla.

### Certificaciones

Cada certificación es una línea así:

```js
{ nombre: "Fundamentos de Marketing Digital", entidad: "Google Actívate", año: "2025" },
```

Copia una línea, pégala debajo y cambia el texto. Si no tienes certificaciones, deja la lista vacía y la sección desaparece sola:

```js
certificaciones: [],
```

---

## 2. Agregar un proyecto nuevo

**Paso 1 — Prepara la imagen.**
- Formato `.jpg` o `.png`.
- Tamaño recomendado: **1200 × 900 píxeles** (horizontal). En Canva: *Crear diseño → Tamaño personalizado → 1200 × 900*.
- Ponle un nombre **sin espacios, sin tildes y sin ñ**, en minúsculas. Ejemplo: `campana-navidad.jpg`
- Guárdala en la carpeta `imagenes/proyectos`.

> 💡 Para que la página cargue rápido en celular, intenta que cada imagen pese menos de 500 KB. Puedes comprimirlas gratis en https://squoosh.app o https://tinypng.com

**Paso 2 — Copia un bloque.** En `contenido.js`, busca la parte de `proyectos`. Cada proyecto es un bloque que empieza con `{` y termina con `},`. Copia un bloque completo:

```js
{
  titulo: "Nombre de tu proyecto",
  fecha: "Proyecto universitario · 2026",
  imagen: "imagenes/proyectos/campana-navidad.jpg",
  resumen: "Una o dos frases que expliquen de qué se trató.",
  rol: "Community manager",
  queHice: [
    "Primera cosa que hiciste.",
    "Segunda cosa que hiciste.",
    "Tercera cosa que hiciste."
  ],
  resultados: [
    "Tu resultado más importante (con números si puedes).",
    "Otro resultado."
  ],
  etiquetas: ["Redes sociales", "Branding"],
  enlace: ""
},
```

**Paso 3 — Pégalo** justo debajo del último proyecto (después de su `},`). Fíjate que entre un bloque y otro siempre haya una **coma** después de la llave `}`.

**Paso 4 — Cambia el texto.** Qué es cada campo:

| Campo | Qué poner | Dónde se ve |
|---|---|---|
| `titulo` | Nombre del proyecto | Tarjeta y detalle |
| `fecha` | Tipo de proyecto y año | Detalle |
| `imagen` | `imagenes/proyectos/` + el nombre exacto de tu imagen | Tarjeta y detalle |
| `resumen` | 1 o 2 frases | Tarjeta y detalle |
| `rol` | Tu cargo o papel, corto | Tarjeta y detalle |
| `queHice` | Lista de lo que hiciste tú | Detalle |
| `resultados` | Lista de logros. **El primero sale en la tarjeta**, así que pon ahí el mejor | Tarjeta y detalle |
| `etiquetas` | Categorías cortas: "Redes sociales", "Branding"... | Tarjeta y detalle |
| `enlace` | Link para ver el proyecto completo (Behance, Drive, Instagram). Si no tienes, déjalo `""` | Botón en el detalle |

**Paso 5 — Guarda y recarga** la página.

- **Cambiar el orden:** los proyectos salen en el mismo orden en que están en el archivo. Pon primero el mejor.
- **Borrar un proyecto:** borra su bloque completo, desde `{` hasta `},`.
- **Los 3 proyectos que vienen** son de ejemplo, con imágenes de relleno. Reemplázalos por los tuyos y borra de la carpeta las imágenes `proyecto-1.svg`, `proyecto-2.svg` y `proyecto-3.svg` cuando ya no las uses.

> 💡 Consejo para reclutadores: en `resultados` usa números siempre que puedas ("+35% de seguidores", "18.000 cuentas alcanzadas"). Es lo primero que miran.

---

## 3. Cambiar tu foto

1. Elige una foto vertical, con buena luz y fondo limpio. Tamaño recomendado: **800 × 1000 píxeles**.
2. Llámala `foto-perfil.jpg` y guárdala en la carpeta `imagenes`.
3. En `contenido.js`, cambia esta línea:

   ```js
   foto: "imagenes/foto-perfil.svg",
   ```
   por:
   ```js
   foto: "imagenes/foto-perfil.jpg",
   ```
4. Guarda, recarga y listo. Puedes borrar el archivo `foto-perfil.svg`.

> La foto se recorta automáticamente con forma de arco. Procura que tu cara quede en la parte de arriba-centro.

---

## 4. Actualizar tu CV

1. Exporta tu hoja de vida en **PDF** (en Canva: *Compartir → Descargar → PDF estándar*; en Word: *Guardar como → PDF*).
2. Ponle exactamente el nombre **`CV.pdf`**.
3. Guárdalo en la carpeta `documentos`, **reemplazando** el que ya está.

Cuando alguien lo descargue, el archivo se llamará automáticamente "CV - Tu Nombre.pdf".

---

## 5. Cambiar el texto que aparece al compartir el link

Cuando envías tu link por WhatsApp o LinkedIn, aparece una vista previa con un título. Para personalizarlo, abre `index.html` y cambia **solo** el texto de estas líneas (arriba del todo):

```html
<title>Portafolio · Mercadeo y Publicidad</title>
<meta name="description" content="...">
<meta property="og:title" content="Portafolio · Mercadeo y Publicidad">
```

Por ejemplo: `<title>Laura Gómez · Portafolio</title>`.

---

## 6. Cambiar los colores (opcional)

Abre `css/estilos.css`. Al principio están los colores:

```css
--acento: #B5532F;        /* terracota */
--acento-2: #5F6E42;      /* verde oliva */
```

Cambia los códigos por otros (puedes buscarlos en https://coolors.co). Usa tonos oscuros para que el texto se lea bien.

---

# 🌐 Publicar tu portafolio gratis en internet

Tienes dos opciones. **La más fácil es Netlify** (arrastrar y soltar). GitHub Pages es buena si ya tienes tu código en GitHub (este proyecto ya está ahí).

## Opción A: Netlify (la más fácil, 5 minutos)

1. Entra a https://app.netlify.com/signup y crea una cuenta gratis (puedes entrar con tu correo de Google).
2. En el menú, ve a **Sites** (Sitios) → **Add new site** → **Deploy manually**.
3. **Arrastra la carpeta completa del portafolio** (la que tiene `index.html` adentro) al recuadro que dice *"Drag and drop your site folder here"*.
4. Espera unos segundos. Netlify te dará un link como `https://nombre-raro-123.netlify.app`.
5. Para un link bonito: entra a **Site configuration → Change site name** y escribe, por ejemplo, `laura-gomez-portafolio`. Tu link quedará: `https://laura-gomez-portafolio.netlify.app`

**Para actualizarlo después:** entra a tu sitio en Netlify → pestaña **Deploys** → arrastra otra vez la carpeta completa al recuadro de abajo.

## Opción B: GitHub Pages

Tu proyecto ya está en GitHub, en el repositorio `burbanito/practica`.

1. Si los cambios están en otra rama, primero júntalos con la rama principal (`main`): en GitHub abre la pestaña **Pull requests**, crea uno desde la rama del portafolio hacia `main` y dale **Merge**.
2. En el repositorio, ve a **Settings** (Configuración) → en el menú izquierdo, **Pages**.
3. En **Source** elige **Deploy from a branch**.
4. En **Branch** elige `main` y la carpeta `/ (root)`. Dale **Save**.
5. Espera 1 o 2 minutos y recarga la página. Arriba aparecerá tu link: `https://burbanito.github.io/practica/`

**Para actualizarlo después:** cada vez que subas cambios a la rama `main`, el sitio se actualiza solo en 1 o 2 minutos.

**Editar desde la web de GitHub (sin instalar nada):** abre el archivo `contenido.js` en GitHub → clic en el lápiz ✏️ → cambia el texto → botón verde **Commit changes**. Para subir imágenes: entra a la carpeta `imagenes/proyectos` → **Add file → Upload files**.

> 💡 Si quieres que el link tenga tu nombre (por ejemplo `laura-gomez.github.io`), puedes renombrar el repositorio en **Settings → General → Repository name**.

## Después de publicar: revisa esto

- [ ] Abre el link **desde tu celular** y revisa que todo se vea bien.
- [ ] Toca cada proyecto y revisa que se abra el detalle.
- [ ] Prueba el botón **Descargar mi CV**.
- [ ] Prueba los botones de LinkedIn, Instagram y correo.
- [ ] Pon el link en tu CV, en tu perfil de LinkedIn (sección *Destacados* o *Información de contacto*) y en tu biografía de Instagram.

---

## ¿Algo no funciona?

| Problema | Solución |
|---|---|
| Sale el aviso "Hay un error en el archivo contenido.js" | Falta una coma, comilla o corchete en lo último que cambiaste. Deshaz con Ctrl + Z. |
| La imagen de un proyecto no aparece | Revisa que el nombre en `contenido.js` sea **idéntico** al del archivo (mayúsculas, `.jpg` vs `.png`). Evita espacios y tildes en el nombre. |
| El CV no se descarga | Revisa que se llame exactamente `CV.pdf` y esté en la carpeta `documentos`. |
| Hice cambios pero no se ven en internet | Netlify: vuelve a arrastrar la carpeta. GitHub: asegúrate de que los cambios estén en `main` y espera 2 minutos. Luego recarga con Ctrl + Shift + R. |
