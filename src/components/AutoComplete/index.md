---
nav:
  title: Components
  path: /components
---

## AutoComplete

输入框自动完成功能。

## 何时使用

需要自动完成时。

## 代码演示

```tsx
import React from 'react';
import { AutoComplete } from 'view-core';

const data = [
  {
    value: 'a',
  },
  {
    value: 'achj',
  },
  {
    value: 'aa',
  },
  {
    value: 'abcd',
  },
  {
    value: 'efgh',
  },
];

const handleSearch = keyword => {
  return data.filter(item => item.value.includes(keyword));
};

const handleSelect = item => {
  alert(item);
};

export default () => (
  <AutoComplete value="a" onSearch={handleSearch} onSelect={handleSelect} />
);
```

```tsx
import React from 'react';
import { AutoComplete } from 'view-core';

const data = [
  {
    value: 'a',
  },
  {
    value: 'achj',
  },
  {
    value: 'aa',
  },
  {
    value: 'abcd',
  },
  {
    value: 'efgh',
  },
];

const handleSearch = keyword => {
  return data.filter(item => item.value.includes(keyword));
};

const handleSelect = item => {
  alert(item);
};

const renderOption = item => {
  return <h2>{item.value}</h2>;
};

export default () => (
  <AutoComplete
    value="a"
    onSearch={handleSearch}
    onSelect={handleSelect}
    renderOption={renderOption}
  />
);
```

```tsx
import React from 'react';
import { AutoComplete } from 'view-core';

const handleSearch = keyword => {
  return fetch(`https://api.github.com/search/users?q=${keyword}`)
    .then(res => res.json())
    .then(({ items }) => {
      return items.slice(0, 10).map(item => ({
        value: item.login,
        ...item,
      }));
    });
};

const handleSelect = item => {
  alert(item);
};

const renderOption = item => {
  return (
    <div>
      <h2>{item.login}</h2>
      <p>{item.url}</p>
    </div>
  );
};

export default () => (
  <AutoComplete
    value="a"
    onSearch={handleSearch}
    onSelect={handleSelect}
    renderOption={renderOption}
  />
);
```

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除, 单选模式有效 | boolean | false |  |
| autoFocus | 自动获取焦点 | boolean | false |  |
| backfill | 使用键盘选择选项的时候把选中项回填到输入框中 | boolean | false |  |
| children (自定义输入框) | 自定义输入框 | HTMLInputElement \| HTMLTextAreaElement \| React.ReactElement&lt;InputProps> | &lt;Input /> |  |
| children (自动完成的数据源) | 自动完成的数据源 | React.ReactElement&lt;OptionProps> \| Array&lt;React.ReactElement&lt;OptionProps>> | - |  |
| defaultActiveFirstOption | 是否默认高亮第一个选项 | boolean | true |  |
| defaultValue | 指定默认选中的条目 | string | - |  |
| disabled | 是否禁用 | boolean | false |  |
| placeholder | 输入框提示 | string | - |  |
| value | 指定当前选中的条目 | string | - |  |
| onBlur | 失去焦点时的回调 | function() | - |  |
| onChange | 选中 option，或 input 的 value 变化时，调用此函数 | function(value) | - |  |
| onFocus | 获得焦点时的回调 | function() | - |  |
| onSearch | 搜索补全项的时候调用 | function(value) | - |  |
| onSelect | 被选中时调用，参数为选中项的 value 值 | function(value, option) | - |  |
| onDropdownVisibleChange | 展开下拉菜单的回调 | function(open) | - |  |
| notFoundContent | 当下拉列表为空时显示的内容 | ReactNode | - |  |
