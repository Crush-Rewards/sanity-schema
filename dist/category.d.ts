export declare const category: {
    type: "document";
    name: "category";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
    }, Record<"title", any>> | undefined;
};
//# sourceMappingURL=category.d.ts.map