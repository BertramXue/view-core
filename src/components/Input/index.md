---
nav:
  title: Components
  path: /components
---

## Input

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 代码演示

```tsx
import React from 'react';
import { Input } from 'view-core';

export default () => (
  <Input style={{ width: '500px' }} placeholder={'基本输入框'} />
);
```

```tsx
import React from 'react';
import { Input } from 'view-core';

export default () => (
  <Input style={{ width: '500px' }} placeholder={'Disabled'} disabled />
);
```

```tsx
import React from 'react';
import { Input } from 'view-core';

export default () => (
  <div>
    <Input style={{ width: '500px' }} placeholder={'Large'} size={'lg'} />
    <Input style={{ width: '500px' }} placeholder={'Small'} size={'sm'} />
  </div>
);
```

```tsx
import React from 'react';
import { Input } from 'view-core';

export default () => (
  <div>
    <Input style={{ width: '500px' }} placeholder={'Large'} icon="arrow-down" />
  </div>
);
```

```tsx
import React from 'react';
import { Input } from 'view-core';

export default () => (
  <div>
    <Input
      style={{ width: '500px' }}
      placeholder={'Large'}
      icon="arrow-down"
      prepend={'https://'}
    />
    <Input
      style={{ width: '500px' }}
      placeholder={'Large'}
      icon="arrow-down"
      append={'.com'}
      size="lg"
    />
  </div>
);
```

## API

### Input

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| addonAfter | 带标签的 input，设置后置标签 | string \| ReactNode | - |  |
| addonBefore | 带标签的 input，设置前置标签 | string \| ReactNode | - |  |
| defaultValue | 输入框默认内容 | string | - |  |
| disabled | 是否禁用状态，默认为 false | boolean | false |  |
| id | 输入框的 id | string | - |  |
| maxLength | 最大长度 | number | - |  |
| prefix | 带有前缀图标的 input | string \| ReactNode | - |  |
| size | 控件大小。注：标准表单内的输入框大小限制为 `large` | `large` \| `middle` \| `small` | - |  |
| suffix | 带有后缀图标的 input | string \| ReactNode | - |  |
| type | 声明 input 类型，同原生 input 标签的 type 属性，见：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性)(请直接使用 `Input.TextArea` 代替 `type="textarea"`) | string | `text` |  |
| value | 输入框内容 | string | - |  |
| onChange | 输入框内容变化时的回调 | function(e) | - |  |
| onPressEnter | 按下回车的回调 | function(e) | - |  |
| allowClear | 可以点击清除图标删除内容 | boolean | - |  |
| bordered | 是否有边框 | boolean | true | 4.5.0 |

Input 的其他属性和 React 自带的 [input](https://facebook.github.io/react/docs/events.html#supported-events) 一致。
