---
nav:
  title: Components
  path: /components
---

## Button

按钮用于开始一个即时操作

## 何时使用

标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 View Core 中我们提供了五种按钮。

- 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- 默认按钮：用于没有主次之分的一组行动点。
- 链接按钮：用于作为外链的行动点。

以及四种状态属性与上面配合使用。

- 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 禁用：行动点不可用的时候，一般需要文案解释。

## 代码演示

```tsx
import React from 'react';
import { Button } from 'view-core';

const hanldeClick = () => {
  console.info('Button was clicked!');
}

const style = {
  'marginRight': '25px'
}
 
export default () => (
  <div>
    <Button 
      btnType="default" 
      style={style} 
      onClick={hanldeClick}>
      default
    </Button>
    <Button 
      btnType="primary"
      style={style} 
      onClick={hanldeClick}>
      primary
    </Button>
    <Button btnType="success" style={style}>success</Button>
    <Button btnType="info" style={style}>info</Button>
    <Button 
      btnType="link" 
      href="http://www.baidu.com"
      style={style} 
      className="link">
      link
    </Button>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

const style = {
  'marginRight': '25px'
}

export default () => (
  <div>
    <div>
      <Button 
        size="sm"
        style={style} 
        btnType="default">
        default
      </Button>
      <Button 
        size="sm"
        style={style}
        btnType="primary">
        primary
      </Button>
      <Button 
        size="sm"
        style={style}
        btnType="success">
        success
      </Button>
      <Button 
        size="sm"
        style={style}
        btnType="info">
        info
      </Button>
      <Button 
        size="sm"
        style={style}
        btnType="link" 
        href="http://www.baidu.com">
        link
      </Button>
    </div>
    <br/>
    <div>
      <Button 
        size="lg"
        style={style} 
        btnType="default">
        default
      </Button>
      <Button 
        size="lg"
        style={style} 
        btnType="primary">
        primary
      </Button>
      <Button 
        size="lg"
        style={style}
        btnType="success">
        success
      </Button>
      <Button 
        size="lg"
        style={style} 
        btnType="info">
        info
      </Button>
      <Button 
        size="lg"
        style={style} 
        btnType="link" 
        href="http://www.baidu.com">
        link
      </Button>
    </div>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

const style = {
  'marginRight': '25px'
}

export default () => (
  <div>
    <Button 
      disabled
      style={style}
      btnType="default">
      default
    </Button>
    <Button 
      disabled
      style={style}
      btnType="primary">
      primary
    </Button>
    <Button 
      disabled
      style={style}
      btnType="success">
      success
    </Button>
    <Button 
      disabled
      style={style}
      btnType="info">
      info
    </Button>
    <Button 
      disabled
      style={style}
      btnType="link" 
      href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

const style = {
  'marginRight': '25px'
}

export default () => (
  <div>
    <Button 
      danger
      style={style}
      btnType="default">
      default
    </Button>
    <Button 
      danger
      style={style}
      btnType="primary">
      primary
    </Button>
    <Button 
      danger
      style={style}
      btnType="link" 
      href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```

```tsx
/**
 * background: 'rgb(190, 200, 200)'
 */

import React from 'react';
import { Button } from 'view-core';

const style = {
  'marginRight': '25px'
}

export default () => (
  <div>
    <Button 
      ghost
      style={style}
      btnType="default">
      default
    </Button>
    <Button 
      ghost
      style={style}
      btnType="primary">
      primary
    </Button>
    <Button 
      ghost
      style={style}
      btnType="success">
      success
    </Button>
    <Button 
      ghost
      style={style} 
      btnType="info">
      info
    </Button>
    <Button 
      ghost
      style={style}
      btnType="link" 
      href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```

## API

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `disabled`。

按钮的属性说明如下：

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |  |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false |  |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - |  |
| nativeType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) | string | `button` |  |
| icon | 设置按钮的图标组件 | ReactNode | - |  |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | - |  |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - |  |
| btnType | 设置按钮类型 | `primary` \| `ghost` \| `dashed` \| `danger` \| `link` \| `text` \| `default` | `default` |  |
| onClick | 点击按钮时的回调 | (event) => void | - |  |
| danger | 设置危险按钮 | boolean | false |  |

支持原生 button 的其他所有属性。
