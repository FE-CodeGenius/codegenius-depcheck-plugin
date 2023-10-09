# @codegenius/depcheck-plugin

运行 `npm-check` 检查过时的、不正确的和未使用的依赖项, 支持命令模式和 **API** 模式;

使用场景: 用于检测当前项目的依赖项安装情况.

## 安装

``` bash
npm i @codegenius/depcheck-plugin -D
```

```javascript
import { defineConfig } from "code-genius";
import { npmDepCheckInstaller } from "@codegenius/depcheck-plugin";

export default defineConfig({
  plugins: [
    npmDepCheckInstaller(),
  ],
});
```

## 使用
### 命令模式

```bash
codeg depcheck
```

### API 模式

```typescript
import { npmDepCheck } from "@codegenius/depcheck-plugin";

(async () => {
  await npmDepCheck();
})();
```
