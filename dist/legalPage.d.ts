export declare const legalPage: {
    type: "document";
    name: "legalPage";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
};
//# sourceMappingURL=legalPage.d.ts.map