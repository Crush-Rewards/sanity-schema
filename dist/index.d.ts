import { category } from "./category.js";
import { codeBlock } from "./codeBlock.js";
import { legalPage } from "./legalPage.js";
import { post } from "./post.js";
import { topicCluster } from "./topicCluster.js";
export { category, codeBlock, legalPage, post, topicCluster };
export { table, tableRow, tableTypes } from "./table.js";
/**
 * The document types plus the shared objects they embed (`codeBlock`). This is
 * what a Studio registers (together with the `@sanity/table` plugin, which
 * supplies `table`/`tableRow`).
 */
export declare const schemaTypes: (({
    type: "document";
    name: "category";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
    }, Record<"title", any>> | undefined;
}) | ({
    type: "object";
    name: "codeBlock";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
        code: string;
    }, Record<"title" | "code" | "subtitle", any>> | undefined;
}) | ({
    type: "document";
    name: "legalPage";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
}) | ({
    type: "document";
    name: "post";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        media: string;
        subtitle: string;
    }, Record<"title" | "subtitle" | "media", any>> | undefined;
}) | ({
    type: "document";
    name: "topicCluster";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
}))[];
/**
 * Everything a non-Studio consumer needs to compile the schema without the
 * `@sanity/table` plugin: the documents plus plain `table`/`tableRow` stand-ins.
 */
export declare const allTypes: (({
    type: "document";
    name: "category";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
    }, Record<"title", any>> | undefined;
}) | ({
    type: "object";
    name: "codeBlock";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
        code: string;
    }, Record<"title" | "code" | "subtitle", any>> | undefined;
}) | ({
    type: "document";
    name: "legalPage";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
}) | ({
    type: "document";
    name: "post";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        media: string;
        subtitle: string;
    }, Record<"title" | "subtitle" | "media", any>> | undefined;
}) | ({
    type: "document";
    name: "topicCluster";
} & Omit<import("@sanity/types").DocumentDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
    }, Record<"title" | "subtitle", any>> | undefined;
}) | ({
    type: "object";
    name: "tableRow";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
}) | ({
    type: "object";
    name: "table";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
}))[];
/** Names of the document types, for filters and validation. */
export declare const documentTypeNames: readonly ["category", "legalPage", "post", "topicCluster"];
export type DocumentTypeName = (typeof documentTypeNames)[number];
//# sourceMappingURL=index.d.ts.map