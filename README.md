## Plataforma Médica

Landing page en Next.js orientada a profesionales de la salud que necesitan una presencia digital simple y efectiva. El proyecto incluye un catálogo de médicos con páginas individuales, formulario de contacto y un API público para reutilizar la información desde otras interfaces.

### Requisitos

- Node.js 20+
- npm (o el gestor equivalente que prefieras)

### Comandos disponibles

```bash
# Inicia el servidor de desarrollo en http://localhost:3000
npm run dev

# Genera la build de producción
npm run build

# Ejecuta el servidor usando la build generada
npm run start

# Ejecuta las reglas de ESLint
npm run lint
```

### Estructura relevante

- `src/app` – Rutas principales de la aplicación y layouts compartidos.
- `src/components` – Componentes reutilizables como CTA y fichas de médicos.
- `src/data` – Fuente de datos estática con la información del equipo médico.
- `src/lib` – Utilidades para acceder a los datos.
- `src/types` – Tipos TypeScript compartidos.

### API

`GET /api/medicos` devuelve el listado de profesionales en formato JSON para su consumo por terceros.

### Desarrollo futuro

Las secciones y estilos se construyeron con Tailwind CSS, por lo que es sencillo extender el diseño agregando nuevas variantes o bloques de contenido.
