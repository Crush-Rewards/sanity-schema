import { defineArrayMember, defineField, defineType } from "@sanity/types";
export const post = defineType({
    name: "post",
    title: "Post",
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
        }),
        defineField({
            name: "publishedAt",
            title: "Published At",
            type: "datetime",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "excerpt",
            title: "Excerpt",
            type: "text",
            rows: 3,
            description: "Short summary for blog cards and SEO meta description.",
        }),
        defineField({
            name: "mainImage",
            title: "Main Image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt Text",
                    type: "string",
                    description: "Describe the image for accessibility and SEO.",
                }),
            ],
        }),
        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "category" }],
        }),
        defineField({
            name: "cluster",
            title: "Topic Cluster",
            type: "reference",
            to: [{ type: "topicCluster" }],
            weak: true,
            description: "The primary cluster this post belongs to.",
        }),
        defineField({
            name: "role",
            title: "Role",
            type: "string",
            options: {
                list: [
                    { title: "Hub", value: "hub" },
                    { title: "Spoke", value: "spoke" },
                    { title: "Standalone", value: "standalone" },
                ],
            },
            initialValue: "standalone",
            description: "Whether this post is a hub (pillar), spoke, or standalone article.",
        }),
        defineField({
            name: "relatedPosts",
            title: "Related Posts",
            type: "array",
            of: [defineArrayMember({ type: "reference", weak: true, to: [{ type: "post" }] })],
            validation: (rule) => rule.max(5),
            description: "Up to 5 related articles shown at the bottom of this post.",
        }),
        defineField({
            name: "tags",
            title: "Tags",
            type: "array",
            of: [defineArrayMember({ type: "string" })],
            options: { layout: "tags" },
            description: "Freeform labels for cross-cutting topics (e.g. grocery, crypto, comparison).",
        }),
        defineField({
            name: "body",
            title: "Body",
            type: "array",
            of: [
                defineArrayMember({ type: "block" }),
                defineArrayMember({ type: "table" }),
                defineArrayMember({
                    type: "image",
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: "alt",
                            title: "Alt Text",
                            type: "string",
                        }),
                        defineField({
                            name: "caption",
                            title: "Caption",
                            type: "string",
                        }),
                    ],
                }),
                defineArrayMember({
                    type: "object",
                    name: "video",
                    title: "Video",
                    fields: [
                        defineField({
                            name: "file",
                            title: "Video File (MP4)",
                            type: "file",
                            options: { accept: "video/mp4" },
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "poster",
                            title: "Poster Image",
                            type: "image",
                            description: "Thumbnail shown before the video plays. Keeps the page light on load.",
                        }),
                        defineField({
                            name: "caption",
                            title: "Caption",
                            type: "string",
                        }),
                    ],
                    preview: {
                        select: { title: "caption", filename: "file.asset.originalFilename" },
                        prepare: ({ title, filename }) => ({
                            title: title || "Video",
                            subtitle: filename,
                        }),
                    },
                }),
                defineArrayMember({ type: "codeBlock" }),
            ],
        }),
        defineField({
            name: "faq",
            title: "FAQ",
            type: "array",
            description: "Question & answer pairs displayed at the bottom of the post and used for FAQ JSON-LD structured data.",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "faqItem",
                    title: "FAQ Item",
                    fields: [
                        defineField({
                            name: "question",
                            title: "Question",
                            type: "string",
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "answer",
                            title: "Answer",
                            type: "text",
                            rows: 4,
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: "question" },
                    },
                }),
            ],
        }),
        defineField({
            name: "isEditorsPick",
            title: "Editor's Pick",
            type: "boolean",
            initialValue: false,
            description: "Feature this post as the Editor's Pick on the blog home page. Only one post should be toggled at a time.",
        }),
        defineField({
            name: "isNew",
            title: "Show 'New' Badge",
            type: "boolean",
            initialValue: false,
        }),
    ],
    preview: {
        select: {
            title: "title",
            media: "mainImage",
            subtitle: "category.title",
        },
    },
    orderings: [
        {
            title: "Published Date, New",
            name: "publishedAtDesc",
            by: [{ field: "publishedAt", direction: "desc" }],
        },
    ],
});
//# sourceMappingURL=post.js.map