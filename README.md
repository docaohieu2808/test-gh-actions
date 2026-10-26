# test-gh-actions

[![CI](https://github.com/docaohieu2808/test-gh-actions/actions/workflows/ci.yml/badge.svg)](https://github.com/docaohieu2808/test-gh-actions/actions/workflows/ci.yml)

Level 1 of the GitHub Actions track: the smallest real consumer of
[reusable-workflows](https://github.com/docaohieu2808/reusable-workflows). The entire CI is one job that calls the
reusable pipeline, pinned to a commit SHA:

```yaml
jobs:
  pipeline:
    uses: docaohieu2808/reusable-workflows/.github/workflows/auto-pipeline.yml@879b76e3e519725f0bfaea657865182b72addf4f # v2.0.1
```

The pipeline detects Node from `package.json`, installs from the lockfile, runs the tests (`node --test`), and
scans dependencies and the working tree for secrets. The project is a tiny module with two real tests, so a broken
change turns CI red.

Track: `test-gh-actions` (L1, a caller) → `gh-actions-test-express` (L1.5, a real-world project as caller) →
`reusable-workflows` (L5–6, the pipeline itself).

What it teaches: the reusable-workflow pattern (one line instead of a copied pipeline), pinning a shared workflow by
SHA so it cannot change under you, explicit permissions, and letting Dependabot move the pin.

Run locally: `npm test`.

MIT, see [LICENSE](LICENSE).
