/**
 * Stand-ins for the `table` / `tableRow` types that `@sanity/table` registers
 * inside a Studio. The plugin defines them inside its `definePlugin` factory
 * and does not export the plain type objects, so non-Studio consumers (the
 * content engine's `Schema.compile`, `sanity schema extract` here) need an
 * identical definition. Field names and shapes match `@sanity/table@2.0.1`
 * exactly: `table.rows[] -> tableRow.cells[] (string)`.
 *
 * A Studio must NOT register these alongside the plugin — it would duplicate
 * the type names. Studios use `schemaTypes` + `table()`; everything else uses
 * `allTypes`.
 */
export declare const tableRow: {
    type: "object";
    name: "tableRow";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
export declare const table: {
    type: "object";
    name: "table";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<Record<string, string>, Record<never, any>> | undefined;
};
export declare const tableTypes: (({
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
//# sourceMappingURL=table.d.ts.map