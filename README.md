# @codegenius/depcheck-plugin

运行 `npm-check` 检查过时的、不正确的和未使用的依赖项, 支持命令模式和 **API** 模式;

使用场景: 用于检测当前项目的依赖项安装情况.

### 命令模式

```bash
codeg depcheck
```

### API 模式

```typescript
import { npmDepCheck } from "code-genius";

(async () => {
  await npmDepCheck();
})();
```
