import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Proyecto",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required().min(3),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mainImage",
      title: "Imagen principal",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      rows: 4,
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: "technologies",
      title: "Tecnologias",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "githubUrl",
      title: "GitHub URL",
      type: "url",
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "description",
      media: "mainImage",
    },
  },
});
