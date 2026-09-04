import { defineArrayMember, defineField, defineType } from "@sanity/types";

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
export const tableRow = defineType({
  title: "Table Row",
  name: "tableRow",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
    }),
  ],
});

export const table = defineType({
  title: "Table",
  name: "table",
  type: "object",
  fields: [
    defineField({
      name: "rows",
      type: "array",
      of: [defineArrayMember({ type: "tableRow" })],
    }),
  ],
});

export const tableTypes = [tableRow, table];
