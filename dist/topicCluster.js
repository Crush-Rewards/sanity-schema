import { defineArrayMember, defineField, defineType } from "@sanity/types";
export const topicCluster = defineType({
    name: "topicCluster",
    title: "Topic Cluster",
    type: "document",
    fields: [
        defineField({
            name: "title",
            title: "Title",
            type: "string",
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "shortTitle",
            title: "Short Title",
            type: "string",
            description: "Short display name for navigation pills and breadcrumbs (e.g. 'Cashback Apps').",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "title", maxLength: 96 },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: "description",
            title: "Description",
            type: "text",
            rows: 3,
            description: "SEO meta description for the cluster landing page.",
        }),
        defineField({
            name: "targetKeyword",
            title: "Target Keyword",
            type: "string",
            description: "Primary keyword this cluster targets.",
        }),
        defineField({
            name: "pillarPost",
            title: "Pillar Post (Hub)",
            type: "reference",
            to: [{ type: "post" }],
            weak: true,
            description: "The comprehensive hub article for this cluster.",
        }),
        defineField({
            name: "spokes",
            title: "Spoke Articles",
            type: "array",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "spokeEntry",
                    title: "Spoke Entry",
                    fields: [
                        defineField({
                            name: "post",
                            title: "Post",
                            type: "reference",
                            to: [{ type: "post" }],
                            weak: true,
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: "anchorText",
                            title: "Anchor Text",
                            type: "string",
                            description: "Preferred link text when linking from the hub to this spoke.",
                        }),
                    ],
                    preview: {
                        select: { title: "post.title", subtitle: "anchorText" },
                    },
                }),
            ],
            description: "Ordered list of spoke articles in this cluster.",
        }),
        defineField({
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Planning", value: "planning" },
                    { title: "In Progress", value: "in-progress" },
                    { title: "Complete", value: "complete" },
                ],
            },
            initialValue: "planning",
        }),
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "status",
        },
    },
});
//# sourceMappingURL=topicCluster.js.map