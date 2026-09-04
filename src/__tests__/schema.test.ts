import { describe, expect, it } from "vitest";
import { Schema } from "@sanity/schema";
import { allTypes, documentTypeNames, schemaTypes, tableTypes } from "../index.js";

const compiled = Schema.compile({ name: "test", types: allTypes });

describe("schema package", () => {
  it("exports the four documents, the codeBlock object, and the two table stand-ins", () => {
    expect(schemaTypes.map((t) => t.name).sort()).toEqual([...documentTypeNames, "codeBlock"].sort());
    expect(tableTypes.map((t) => t.name)).toEqual(["tableRow", "table"]);
    expect(allTypes).toHaveLength(7);
  });

  it("has no duplicate type names", () => {
    const names = allTypes.map((t) => t.name);
    expect(new Set(names).size).toBe(names.length);
  });

  it("compiles outside a Studio", () => {
    for (const name of [...documentTypeNames, "table", "tableRow"]) {
      const t = compiled.get(name);
      expect(t, `${name} should compile`).toBeTruthy();
    }
  });

  it("post.body accepts block, table, image, video and codeBlock — the shape the engine and both sites rely on", () => {
    const post = compiled.get("post");
    const body = post?.fields?.find((f: { name: string }) => f.name === "body");
    expect(body?.type.jsonType).toBe("array");
    const members = (body?.type.of ?? []).map((m: { name: string }) => m.name).sort();
    expect(members).toEqual(["block", "codeBlock", "image", "table", "video"]);
  });

  it("post.body blocks: link annotation carries only href; styles/lists/decorators are Sanity defaults", () => {
    const post = compiled.get("post");
    const body = post?.fields?.find((f: { name: string }) => f.name === "body");
    const block = (body?.type.of ?? []).find((m: { name: string }) => m.name === "block");
    const field = (name: string) => block?.fields?.find((f: { name: string }) => f.name === name);
    const annotations = (field("markDefs")?.type.of ?? []).map(
      (a: { name: string; fields?: { name: string }[] }) => ({
        name: a.name,
        fields: (a.fields ?? []).map((f) => f.name),
      }),
    );
    expect(annotations).toEqual([{ name: "link", fields: ["href"] }]);
    const span = (field("children")?.type.of ?? []).find((m: { name: string }) => m.name === "span");
    expect((span?.decorators ?? []).map((d: { value: string }) => d.value)).toEqual([
      "strong",
      "em",
      "code",
      "underline",
      "strike-through",
    ]);
    expect((field("style")?.type.options?.list ?? []).map((s: { value: string }) => s.value)).toEqual([
      "normal",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "blockquote",
    ]);
    expect((field("listItem")?.type.options?.list ?? []).map((s: { value: string }) => s.value)).toEqual([
      "bullet",
      "number",
    ]);
  });

  it("codeBlock is a plain object with language/filename/code and code is required", () => {
    const cb = compiled.get("codeBlock");
    expect(cb?.jsonType).toBe("object");
    expect((cb?.fields ?? []).map((f: { name: string }) => f.name)).toEqual(["language", "filename", "code"]);
  });

  it("table stand-ins match @sanity/table's shape", () => {
    const table = compiled.get("table");
    const rows = table?.fields?.find((f: { name: string }) => f.name === "rows");
    expect(rows?.type.of?.[0]?.name).toBe("tableRow");
    const row = compiled.get("tableRow");
    const cells = row?.fields?.find((f: { name: string }) => f.name === "cells");
    expect(cells?.type.of?.[0]?.name).toBe("string");
  });
});
