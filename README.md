# Astra Global Solutions — Sitio web

Sitio estático de una sola página para **Astra Global Solutions**, un ecosistema de empresas aliadas (PandoLab, Nexo, A+, Decimetrix e Inversora Latinoamericana de Proyectos) que ofrece soluciones integrales a instituciones públicas y privadas en tecnología, logística, comunicación corporativa, transformación digital y gestión de proyectos.

## Propósito

Presentar a Astra Global Solutions, su modelo de trabajo (Astra 360°), sus servicios y su ecosistema de aliados, y facilitar el contacto directo con el equipo.

## Tecnologías

- **HTML5** — estructura base en `index.html`.
- **Bootstrap 5.0.2** (CDN) — grid, componentes y utilidades.
- **Bootstrap Icons 1.8.1** (CDN) — iconografía de las secciones.
- **CSS3** — estilos propios en `style.css` (variables de color, tipografía y layout).
- **JavaScript (vanilla)** — cada sección de la página se genera dinámicamente desde su propio archivo en `components/`, que inyecta HTML en el contenedor correspondiente de `index.html`.

No usa framework de frontend ni paso de compilación (build step): son archivos estáticos que se sirven tal cual.

## Estructura del proyecto

```
.
├── index.html
├── style.css
├── assets/
│   ├── logo.png
│   ├── logo-white.png
│   └── tech-*.jpg
└── components/
    ├── Navbar.js
    ├── Herosection.js
    ├── LogoCloud.js
    ├── Features.js
    ├── Metrics.js
    ├── Pricing.js
    ├── Testimonial.js
    ├── Career.js
    ├── CTA.js
    ├── FAQ.js
    └── Footer.js
```
