---
nav:
  title: Components
  path: /components
---

## Menu

Demo:

```tsx
import React from 'react';
import { Menu } from 'view-core';

export default () => (
  <Menu activeIndex={'2-1'}>
    <Menu.Item>MenuItem1</Menu.Item>
    <Menu.Item>MenuItem2</Menu.Item>
    <Menu.SubMenu title="SubMenu">
      <Menu.Item>MenuItem2-0</Menu.Item>
      <Menu.Item>MenuItem2-1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item disabled>MenuItem3</Menu.Item>
  </Menu>
);
```

```tsx
import React from 'react';
import { Menu } from 'view-core';

export default () => (
  <Menu
    style={{ width: '350px' }}
    activeIndex={'1'}
    mode="vertical"
    defaultOpenSubMenus={['2', '3']}
  >
    <Menu.Item>MenuItem1</Menu.Item>
    <Menu.Item>MenuItem2</Menu.Item>
    <Menu.SubMenu title="SubMenu1">
      <Menu.Item>MenuItem2-0</Menu.Item>
      <Menu.Item>MenuItem2-1</Menu.Item>
    </Menu.SubMenu>
    <Menu.SubMenu title="SubMenu2">
      <Menu.Item>MenuItem3-0</Menu.Item>
      <Menu.Item>MenuItem3-1</Menu.Item>
    </Menu.SubMenu>
    <Menu.Item disabled>MenuItem3</Menu.Item>
  </Menu>
);
```
