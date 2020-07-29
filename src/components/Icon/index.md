---
nav:
  title: Components
  path: /components
---

## Icon

语义化的矢量图形。使用图标组件，你无需要安装图标组件包！

## 代码演示

```tsx
import React from 'react';
import { Icon } from 'view-core';

export default () => <Icon theme="primary" icon="arrow-down"></Icon>;
```

## Api

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| icon | 设置图标 | string | - |  |
| theme | 设置图标的主题 | `primary` \| `secondary` \| `success` \| `info` \| `warning` \| `danger` \| `light` \| `dark` |  |
| className | 设置图标的样式名 | string | - |  |
| style | 设置图标的样式，例如 `fontSize` 和 `color` | CSSProperties | - |  |
| spin | 是否有旋转动画 | boolean | false |  |
| rotate | 图标旋转角度（IE9 无效） | number | - |  |

其中我们提供了三种主题的图标，不同主题的 Icon 组件名为图标名加主题做为后缀。
