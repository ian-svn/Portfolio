# Portfolio Personal (Next.js + Sanity)

Portfolio personal de Ian Santiago Vila con:
- Frontend en **Next.js + React + Tailwind CSS**
- CMS en **Sanity** para autogestionar proyectos
- Diseno oscuro, minimalista y acentos dorados

## 1) Instalar y correr

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## 2) Variables de entorno

Creá un archivo `.env.local` en la raíz:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=tu_project_id
NEXT_PUBLIC_SANITY_DATASET=production
```

Despues de editar `.env.local`, reinicia `npm run dev`.

## 3) Gestionar proyectos desde Sanity

1. Entrá a `http://localhost:3000/studio`.
2. Crea/edita documentos de tipo `Proyecto`.
3. Campos disponibles:
   - `title`
   - `Slug`
   - `mainImage`
   - `description`
   - `technologies`
   - `githubUrl`
   - `liveUrl`

## Estructura simple (para aprender)

- `src/app/page.tsx`: landing con Hero, Sobre Mi, Proyectos y Contacto.
- `src/components/project-card.tsx`: tarjeta visual de proyectos.
- `src/sanity/lib/queries.ts`: query GROQ para listar proyectos.
- `sanity/schemaTypes/project.ts`: schema del documento `project`.
