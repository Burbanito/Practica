/* =====================================================================
   CÓDIGO DEL PORTAFOLIO
   No necesitas editar este archivo. Toda tu información está en
   "contenido.js". Este código la toma y la muestra en la página.
   ===================================================================== */
(function () {
  "use strict";

  document.documentElement.classList.add("js");

  // Si contenido.js tiene un error, mostramos un aviso amable
  if (typeof CONTENIDO === "undefined") {
    document.getElementById("contenido").innerHTML =
      '<div class="aviso-error"><p><strong>Hay un error en el archivo contenido.js.</strong></p>' +
      "<p>Revisa la última parte que cambiaste. Lo más común es que falte una coma <b>,</b>, " +
      "una comilla <b>\"</b> o un corchete <b>]</b>. Si no lo encuentras, deshaz tu último cambio.</p></div>";
    return;
  }

  var D = CONTENIDO;

  // ---------- Utilidades ----------
  function escapar(texto) {
    return String(texto == null ? "" : texto)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
  }
  function lista(valor) { return Array.isArray(valor) ? valor : []; }
  function $(id) { return document.getElementById(id); }

  var iconos = {
    flecha: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    externo: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9"/></svg>',
    cert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="9" r="6"/><path d="m8.5 13.5-1.5 8 5-3 5 3-1.5-8"/></svg>',
    linkedin: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4V21H3V9.75Zm6.5 0h3.8v1.6h.06c.53-1 1.84-2.06 3.78-2.06 4.04 0 4.78 2.66 4.78 6.12V21h-4v-4.9c0-1.17-.02-2.68-1.63-2.68-1.64 0-1.89 1.28-1.89 2.6V21h-4V9.75Z"/></svg>',
    instagram: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    correo: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>'
  };

  // ---------- Textos simples ----------
  var primerNombre = String(D.nombre || "").trim().split(/\s+/)[0] || "Portafolio";
  var campos = {
    "nombre": D.nombre,
    "nombre-corto": primerNombre,
    "frase": D.frase,
    "disponibilidad": D.disponibilidad,
    "sobreMi": D.sobreMi,
    "ciudad": D.ciudad
  };
  document.querySelectorAll("[data-campo]").forEach(function (el) {
    var valor = campos[el.getAttribute("data-campo")];
    if (valor) el.textContent = valor;
  });
  if (!D.disponibilidad) document.querySelector(".estado").hidden = true;

  if (D.nombre) document.title = D.nombre + " · Portafolio";
  $("anio").textContent = new Date().getFullYear();

  // ---------- Foto ----------
  var foto = $("foto");
  foto.src = D.foto || "imagenes/foto-perfil.svg";
  foto.alt = "Foto de " + (D.nombre || "perfil");

  // ---------- Datos rápidos ----------
  var datos = [
    ["Estudio", D.carrera],
    ["Universidad", D.universidad],
    ["Ciudad", D.ciudad],
    ["Edad", D.edad]
  ].filter(function (d) { return d[1]; });
  $("datos").innerHTML = datos.map(function (d) {
    return "<div><dt>" + escapar(d[0]) + "</dt><dd>" + escapar(d[1]) + "</dd></div>";
  }).join("");

  // ---------- Habilidades ----------
  $("habilidades").innerHTML = lista(D.habilidades).map(function (h) {
    return "<li>" + escapar(h) + "</li>";
  }).join("");

  // ---------- Certificaciones ----------
  var certs = lista(D.certificaciones);
  if (certs.length === 0) {
    $("bloque-certificaciones").hidden = true;
  } else {
    $("certificaciones").innerHTML = certs.map(function (c, i) {
      var detalle = [c.entidad, c.año].filter(Boolean).join(" · ");
      return '<li class="aparecer" style="--retraso:' + (i * 0.08) + 's">' +
        '<span class="cert__icono">' + iconos.cert + "</span>" +
        '<div><p class="cert__nombre">' + escapar(c.nombre) + "</p>" +
        (detalle ? '<p class="cert__entidad">' + escapar(detalle) + "</p>" : "") +
        "</div></li>";
    }).join("");
  }

  // ---------- Proyectos ----------
  var proyectos = lista(D.proyectos);

  function htmlEtiquetas(etiquetas) {
    var e = lista(etiquetas);
    if (!e.length) return "";
    return '<div class="etiquetas">' + e.map(function (t) {
      return '<span class="etiqueta">' + escapar(t) + "</span>";
    }).join("") + "</div>";
  }

  $("lista-proyectos").innerHTML = proyectos.map(function (p, i) {
    var resultado = lista(p.resultados)[0];
    return '<button type="button" class="tarjeta aparecer" data-indice="' + i + '" style="--retraso:' + ((i % 3) * 0.1) + 's" aria-haspopup="dialog">' +
      '<div class="tarjeta__imagen"><img src="' + escapar(p.imagen) + '" alt="" loading="lazy" width="800" height="600"></div>' +
      '<div class="tarjeta__cuerpo">' +
        htmlEtiquetas(p.etiquetas) +
        '<h3 class="tarjeta__titulo">' + escapar(p.titulo) + "</h3>" +
        '<p class="tarjeta__resumen">' + escapar(p.resumen) + "</p>" +
        '<div class="tarjeta__meta">' +
          (p.rol ? "<span><strong>Mi rol:</strong> " + escapar(p.rol) + "</span>" : "") +
          (resultado ? '<span class="tarjeta__resultado">↗ ' + escapar(resultado) + "</span>" : "") +
        "</div>" +
        '<span class="tarjeta__mas">Ver proyecto ' + iconos.flecha + "</span>" +
      "</div></button>";
  }).join("");

  // ---------- Detalle del proyecto ----------
  var dialogo = $("detalle");
  var ultimoFoco = null;

  function abrirProyecto(i) {
    var p = proyectos[i];
    if (!p) return;
    var queHice = lista(p.queHice);
    var resultados = lista(p.resultados);

    $("detalle-contenido").innerHTML =
      '<img class="detalle__imagen" src="' + escapar(p.imagen) + '" alt="Imagen del proyecto ' + escapar(p.titulo) + '">' +
      '<div class="detalle__cuerpo">' +
        htmlEtiquetas(p.etiquetas) +
        (p.fecha ? '<p class="detalle__fecha">' + escapar(p.fecha) + "</p>" : "") +
        '<h2 class="detalle__titulo" id="detalle-titulo">' + escapar(p.titulo) + "</h2>" +
        '<p class="detalle__resumen">' + escapar(p.resumen) + "</p>" +
        '<div class="detalle__columnas">' +
          (queHice.length || p.rol ? "<div><h3>Qué hice yo</h3>" +
            (p.rol ? '<p class="detalle__rol">' + escapar(p.rol) + "</p>" : "") +
            '<ul class="lista-puntos">' + queHice.map(function (q) { return "<li>" + escapar(q) + "</li>"; }).join("") + "</ul></div>" : "") +
          (resultados.length ? '<div><h3>Resultados</h3><ul class="resultados">' +
            resultados.map(function (r) { return "<li>" + escapar(r) + "</li>"; }).join("") + "</ul></div>" : "") +
        "</div>" +
        (p.enlace ? '<a class="boton boton--secundario detalle__enlace" href="' + escapar(p.enlace) + '" target="_blank" rel="noopener">Ver proyecto completo ' + iconos.externo + "</a>" : "") +
      "</div>";

    ultimoFoco = document.activeElement;
    if (typeof dialogo.showModal === "function") {
      dialogo.showModal();
    } else {
      dialogo.setAttribute("open", "");
    }
    dialogo.scrollTop = 0;
    document.body.style.overflow = "hidden";
  }

  function cerrarProyecto() {
    if (typeof dialogo.close === "function") dialogo.close();
    else dialogo.removeAttribute("open");
  }

  dialogo.addEventListener("close", function () {
    document.body.style.overflow = "";
    if (ultimoFoco) ultimoFoco.focus();
  });

  $("lista-proyectos").addEventListener("click", function (e) {
    var tarjeta = e.target.closest(".tarjeta");
    if (tarjeta) abrirProyecto(Number(tarjeta.getAttribute("data-indice")));
  });
  $("detalle-cerrar").addEventListener("click", cerrarProyecto);
  // Cerrar al tocar fuera de la ventana
  dialogo.addEventListener("click", function (e) {
    if (e.target === dialogo) cerrarProyecto();
  });

  // ---------- Contacto ----------
  var correo = $("enlace-correo");
  if (D.correo) {
    correo.href = "mailto:" + D.correo;
    correo.textContent = D.correo;
  } else {
    correo.hidden = true;
  }

  var redes = [];
  if (D.linkedin) redes.push('<a class="red" href="' + escapar(D.linkedin) + '" target="_blank" rel="noopener">' + iconos.linkedin + "LinkedIn</a>");
  if (D.instagram) redes.push('<a class="red" href="' + escapar(D.instagram) + '" target="_blank" rel="noopener">' + iconos.instagram + "Instagram</a>");
  if (D.correo) redes.push('<a class="red" href="mailto:' + escapar(D.correo) + '">' + iconos.correo + "Correo</a>");
  $("redes").innerHTML = redes.join("");

  var cv = $("boton-cv");
  if (D.cv) {
    cv.href = D.cv;
    cv.setAttribute("download", "CV - " + (D.nombre || "Portafolio") + ".pdf");
  } else {
    cv.hidden = true;
  }

  // ---------- Menú en celular ----------
  var menuBoton = $("menu-boton");
  var menu = $("menu");
  function alternarMenu(abrir) {
    menu.classList.toggle("menu--abierto", abrir);
    menuBoton.setAttribute("aria-expanded", abrir ? "true" : "false");
    menuBoton.setAttribute("aria-label", abrir ? "Cerrar menú" : "Abrir menú");
  }
  menuBoton.addEventListener("click", function () {
    alternarMenu(menuBoton.getAttribute("aria-expanded") !== "true");
  });
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") alternarMenu(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") alternarMenu(false);
  });

  // Línea bajo el menú al hacer scroll
  var cabecera = $("cabecera");
  function revisarScroll() { cabecera.classList.toggle("cabecera--scroll", window.scrollY > 8); }
  window.addEventListener("scroll", revisarScroll, { passive: true });
  revisarScroll();

  // ---------- Animaciones suaves al hacer scroll ----------
  var elementos = document.querySelectorAll(".aparecer");
  if ("IntersectionObserver" in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    elementos.forEach(function (el) { observador.observe(el); });
  } else {
    elementos.forEach(function (el) { el.classList.add("visible"); });
  }

  // Pequeño escalonado en la portada
  document.querySelectorAll(".inicio .aparecer").forEach(function (el, i) {
    el.style.setProperty("--retraso", (i * 0.1) + "s");
  });
})();
