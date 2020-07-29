---
nav:
  title: Components
  path: /components
---

## Menu

为页面和功能提供导航的菜单列表。

## 何时使用

导航菜单是一个网站的灵魂，用户依赖导航在各个页面中进行跳转。一般分为顶部导航和侧边导航，顶部导航提供全局性的类目和功能，侧边导航提供多级结构来收纳和排列网站架构。

## 代码演示

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

### Menu

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| defaultOpenSubMenus | 初始展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| defaultSelectedKeys | 初始选中的菜单项 key 数组 | string\[] | - |  |
| forceSubMenuRender | 在子菜单展示之前就渲染进 DOM | boolean | false |  |
| inlineCollapsed | inline 时菜单是否收起状态 | boolean | - |  |
| mode | 菜单类型，现在支持垂直、水平、和内嵌模式三种 | `vertical` \| `horizontal` \| `inline` | `vertical` |  |
| multiple | 是否允许多选 | boolean | false |  |
| openKeys | 当前展开的 SubMenu 菜单项 key 数组 | string\[] | - |  |
| selectable | 是否允许选中 | boolean | true |  |
| selectedKeys | 当前选中的菜单项 key 数组 | string\[] | - |  |
| style | 根节点样式 | CSSProperties | - |  |
| theme | 主题颜色 | `light` \| `dark` | `light` |  |
| onClick | 点击 MenuItem 调用此函数 | function({ item, key, keyPath, domEvent }) | - |  |
| onDeselect | 取消选中时调用，仅在 multiple 生效 | function({ item, key, keyPath, selectedKeys, domEvent }) | - |  |
| triggerSubMenuAction | SubMenu 展开/关闭的触发行为 | `hover` \| `click` | `hover` |  |
| onOpenChange | SubMenu 展开/关闭的回调 | function(openKeys: string\[]) | - |  |
| onSelect | 被选中时调用 | function({ item, key, keyPath, selectedKeys, domEvent }) | -   |  |
| overflowedIndicator | 自定义 Menu 折叠时的图标 | ReactNode | - |  |

### Menu.Item

| 参数     | 说明                     | 类型      | 默认值 | 版本  |
| -------- | ------------------------ | --------- | ------ | ----- |
| disabled | 是否禁用                 | boolean   | false  |       |
| key      | item 的唯一标志          | string    | -      |       |
| title    | 设置收缩时展示的悬浮标题 | string    | -      |       |
| icon     | 菜单图标                 | ReactNode | -      | 4.2.0 |
| danger   | 展示错误状态样式         | boolean   | false  | 4.3.0 |


### Menu.SubMenu

| 参数           | 说明           | 类型                          | 默认值 | 版本  |
| -------------- | -------------- | ----------------------------- | ------ | ----- |
| popupClassName | 子菜单样式     | string                        | -      |       |
| children       | 子菜单的菜单项 | Array&lt;MenuItem \| SubMenu> | -      |       |
| disabled       | 是否禁用       | boolean                       | false  |       |
| key            | 唯一标志       | string                        | -      |       |
| title          | 子菜单项值     | string \| ReactNode           | -      |       |
| icon           | 菜单图标       | ReactNode                     | -      |  |
| onTitleClick   | 点击子菜单标题 | function({ key, domEvent })   | -      |       |
