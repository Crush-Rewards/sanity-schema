export declare const post: {
    type: "document";
    name: "post";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        media: string;
        subtitle: string;
    }, Record<"title" | "subtitle" | "media", any>> | undefined;
};
//# sourceMappingURL=post.d.ts.map