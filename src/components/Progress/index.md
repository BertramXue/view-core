---
nav:
  title: Components
  path: /components
---

## Progress

展示操作的当前进度。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过 2 秒时；
- 当需要显示一个操作完成的百分比时。

## 代码演示

```tsx
import React from 'react';
import { Progress } from 'view-core';

export default () => <Progress percent={50} />;
```

## API

各类型共用的属性。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| type | 类型，可选 `line` `circle` `dashboard` | string | `line` |
| format | 内容的模板函数 | function(percent, successPercent) | (percent) => percent + `%` |
| percent | 百分比 | number | 0 |
| showInfo | 是否显示进度数值或状态图标 | boolean | true |
| status | 状态，可选：`success` `exception` `normal` `active`(仅限 line) | string | - |
| strokeLinecap | 进度条的样式 | `round` \| `square` | `round` |
| strokeColor | 进度条的色彩 | string | - |
| trailColor | 未完成的分段的颜色 | string | - |
| success | 成功进度条相关配置 | { percent: number, strokeColor: string } | - |
