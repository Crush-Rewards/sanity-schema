/**
 * A fenced code block. Additive and optional (D6): it is a member of
 * `post.body` for every site, never a site-specific fork of `post`. Kept as a
 * plain object (no @sanity/code-input plugin) so the Studio, both sites and
 * the content engine share one definition with no plugin to keep in sync.
 */
export declare const codeBlock: {
    type: "object";
    name: "codeBlock";
} & Omit<import("@sanity/types").ObjectDefinition, "preview"> & {
    preview?: import("@sanity/types").PreviewConfig<{
        title: string;
        subtitle: string;
        code: string;
    }, Record<"title" | "code" | "subtitle", any>> | undefined;
};
//# sourceMappingURL=codeBlock.d.ts.map