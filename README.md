# test-gh-actions

**Tier:** GitHub Actions L1 — consumer tối giản của reusable-workflows.

**Vị trí trong learning path:**
```
test-gh-actions (L1) → gh-actions-test-express (L1.5) → reusable-workflows (L5-6)
```

## Mục đích

Test fixture: repo 2 file (`package.json` + `.github/workflows/ci.yml`) dùng để smoke-test reusable-workflows. Mỗi khi thay đổi reusable-workflows, repo này chạy CI để xác nhận không vỡ caller.

## Cách dùng

```yaml
# .github/workflows/ci.yml — toàn bộ nội dung
jobs:
  pipeline:
    uses: docaohieu2808/reusable-workflows/.github/workflows/auto-pipeline.yml@master
    secrets:
      SSH_PRIVATE_KEY: ${{ secrets.SSH_PRIVATE_KEY }}
      DOCKER_REGISTRY_PASSWORD: ${{ secrets.DOCKER_REGISTRY_PASSWORD }}
```

Không cần config thêm. Auto-detect Node.js từ `package.json`, chạy build + test + lint + security scan.

## Demo points (interview)

- Minh hoạ DRY: 6 dòng YAML thay thế 200+ dòng pipeline — đây là điểm mạnh của reusable workflow pattern
- So sánh được với `include:` của GitLab CI và shared library của Jenkins
