import { defineField, defineType } from "sanity";

export default defineType({
  name: "certificate",
  title: "Certificacion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required().min(4),
    }),
    defineField({
      name: "issuer",
      title: "Institucion",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "issueDate",
      title: "Fecha de emision",
      type: "date",
      options: { dateFormat: "YYYY-MM-DD" },
    }),
    defineField({
      name: "description",
      title: "Descripcion",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "credentialUrl",
      title: "URL de credencial",
      type: "url",
    }),
    defineField({
      name: "skills",
      title: "Skills relacionadas",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "issuer",
    },
  },
});
