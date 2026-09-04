# Changelog

Consumers pin a tag. Bump the version, update this file, tag `vX.Y.Z`, push the tag, then update the Studio first and the sites after.

## v0.2.0 — 2026-09-04
- `codeBlock` object (`language`, `filename`, `code`) added to `post.body` (D6). Additive; both sites render it.
- `sanity.config.ts` extracts from `dist/`, so `schema.json` is exactly what consumers install.

## v0.1.1 — 2026-09-04
- Prebuilt `dist/` committed; no `prepare` on install (the devDependency install it triggered exceeded Vercel's 4 MB build-log limit).

## v0.1.0 — 2026-09-04
- Verbatim extraction of `post`, `category`, `legalPage`, `topicCluster` from `landing-page/src/sanity/schemaTypes` (22 extracted types, 0 diffs vs the embedded Studio). `tableTypes` stand-ins for non-Studio compiles.
