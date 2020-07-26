---
nav:
  title: Components
  path: /components
---

## AutoComplete

Demo:

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
