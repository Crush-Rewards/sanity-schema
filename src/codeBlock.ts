import { defineField, defineType } from "@sanity/types";

/**
 * A fenced code block. Additive and optional (D6): it is a member of
 * `post.body` for every site, never a site-specific fork of `post`. Kept as a
 * plain object (no @sanity/code-input plugin) so the Studio, both sites and
 * the content engine share one definition with no plugin to keep in sync.
 */
export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code",
  type: "object",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      description: "Lowercase identifier used for syntax highlighting, e.g. bash, ts, json, python.",
    }),
    defineField({
      name: "filename",
      title: "Filename",
      type: "string",
      description: "Optional label shown above the block, e.g. sanity.config.ts.",
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "filename", subtitle: "language", code: "code" },
    prepare: ({ title, subtitle, code }) => ({
      title: title || (typeof code === "string" ? code.split("\n")[0] : "Code"),
      subtitle: subtitle ? `Code · ${subtitle}` : "Code",
    }),
  },
});
