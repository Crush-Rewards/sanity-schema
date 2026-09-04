# @crush-rewards/sanity-schema

The **single definition** of the content schema shared by
[crushrewards.app](https://crushrewards.app) (`/blog`, `/legal`),
[syntalic.com](https://www.syntalic.com) (`/blog`) and the content engine.
Sanity project `sl9izhcz`; one schema, one dataset per site.

| Export | What it is | Who uses it |
| --- | --- | --- |
| `schemaTypes` | `post`, `category`, `legalPage`, `topicCluster` | Studios (with the `@sanity/table` plugin) |
| `tableTypes` | plain `table` / `tableRow` stand-ins matching `@sanity/table@2.0.1` | non-Studio consumers |
| `allTypes` | `schemaTypes + tableTypes` | `Schema.compile` in the content engine, `sanity schema extract` here |
| `schema.json` | `sanity schema extract` output, committed on every tag | `sanity typegen generate` in the sites |

## Consuming

```jsonc
// package.json — pin a tag, never a branch
"@crush-rewards/sanity-schema": "github:Crush-Rewards/sanity-schema#v0.1.0",
"@sanity/types": "5.11.0" // peer; pin to the version your `sanity` uses
```

The package builds itself on install (`prepare` → `tsc`), so a git dependency
works with both pnpm and npm. Import from `@crush-rewards/sanity-schema`; point
TypeGen at `node_modules/@crush-rewards/sanity-schema/schema.json`.

## Changing the schema

1. Edit `src/*.ts`. Additions are **optional objects/fields only** — never a
   site-specific fork of `post`. Both sites and the engine read every type here.
2. `pnpm check` — typecheck, tests, build, re-extract, and fail if `schema.json`
   is stale.
3. Bump `version`, commit, tag `vX.Y.Z`, push the tag.
4. Bump the tag in each consumer (landing-page, api-landing-page, content-engine,
   sanity-studio) and redeploy the Studio **first**, so editors never see
   "Invalid Portable Text value" from a Studio that lags the schema.

## Why a public repo

Vercel's build cannot fetch a `github:` dependency from a private repository.
Nothing in a Sanity schema is secret: every deployed Studio ships it to the
browser and `schema.json` is downloadable from any Studio deployment.

This package is `private: true` (never published to npm) and `UNLICENSED`.
