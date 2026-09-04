import { category } from "./category.js";
import { codeBlock } from "./codeBlock.js";
import { legalPage } from "./legalPage.js";
import { post } from "./post.js";
import { topicCluster } from "./topicCluster.js";
import { tableTypes } from "./table.js";

export { category, codeBlock, legalPage, post, topicCluster };
export { table, tableRow, tableTypes } from "./table.js";

/**
 * The document types plus the shared objects they embed (`codeBlock`). This is
 * what a Studio registers (together with the `@sanity/table` plugin, which
 * supplies `table`/`tableRow`).
 */
export const schemaTypes = [category, legalPage, post, topicCluster, codeBlock];

/**
 * Everything a non-Studio consumer needs to compile the schema without the
 * `@sanity/table` plugin: the documents plus plain `table`/`tableRow` stand-ins.
 */
export const allTypes = [...schemaTypes, ...tableTypes];

/** Names of the document types, for filters and validation. */
export const documentTypeNames = ["category", "legalPage", "post", "topicCluster"] as const;
export type DocumentTypeName = (typeof documentTypeNames)[number];
