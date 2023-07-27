---
title: 快速上手
icon: light
---

### 安装

::: code-tabs#npm
@tab yarn
```bash
yarn add xiaohejs
```

@tab pnpm
```bash
pnpm add xiaohejs
```

@tab npm
```bash
npm install xiaohejs
```
:::

### 使用

::: info Tree-Shaking

[按方法引入](#按方法引入) 可最大程度实现 [除屑优化（Tree-Shaking）](https://cn.rollupjs.org/introduction/#tree-shaking)，[按模块引入](#按模块引入) 次之

:::

#### 按方法引入 <badge text="推荐" type="tip"></badge>

```javascript
import { uuid } from "xiaohejs";

uuid();
```

#### 按模块引入

```javascript
import { string as StringUtils } from "xiaohejs";

StringUtils.uuid();
```

#### 完整引入

```javascript
import xh from "xiaohejs";

xh.string.uuid();
```