export declare const topicCluster: {
    type: "document";
    name: "topicCluster";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
};
//# sourceMappingURL=topicCluster.d.ts.map