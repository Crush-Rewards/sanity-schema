import { defineArrayMember, defineField, defineType } from "@sanity/types";

export const legalPage = defineType({
  name: "legalPage",
  title: "Legal Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
      description: "URL path segment, e.g. 'privacy' → /legal/privacy",
    }),
    defineField({
      name: "lastUpdated",
      title: "Last Updated",
      type: "date",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [defineArrayMember({ type: "block" })],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "lastUpdated",
    },
  },
});
