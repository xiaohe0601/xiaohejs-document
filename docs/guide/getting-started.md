---
title: 快速上手
icon: light
---

- 安装

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

- 使用

	```javascript
	import xh from "xiaohejs";

	xh.string.isEmpty("");
	```

	或

	```javascript
	import { string as StringUtils } from "xiaohejs";

	StringUtils.isEmpty("");
	```