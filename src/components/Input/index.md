---
nav:
  title: Components
  path: /components
---

## Input

Demo:

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
