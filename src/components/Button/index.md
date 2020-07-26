---
nav:
  title: Components
  path: /components
---

## Button

基础用法:

```tsx
import React from 'react';
import { Button } from 'view-core';

export default () => (
  <div>
    <Button btnType="default">default</Button>
    <Button btnType="primary">primary</Button>
    <Button btnType="success">success</Button>
    <Button btnType="info">info</Button>
    <Button btnType="link" href="http://www.baidu.com" className="link">
      link
    </Button>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

export default () => (
  <div>
    <Button size="sm" btnType="default">
      default
    </Button>
    <Button size="sm" btnType="primary">
      primary
    </Button>
    <Button size="sm" btnType="success">
      success
    </Button>
    <Button size="sm" btnType="info">
      info
    </Button>
    <Button size="sm" btnType="link" href="http://www.baidu.com">
      link
    </Button>
    <Button size="lg" btnType="default">
      default
    </Button>
    <Button size="lg" btnType="primary">
      primary
    </Button>
    <Button size="lg" btnType="success">
      success
    </Button>
    <Button size="lg" btnType="info">
      info
    </Button>
    <Button size="lg" btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

export default () => (
  <div>
    <Button disabled btnType="default">
      default
    </Button>
    <Button disabled btnType="primary">
      primary
    </Button>
    <Button disabled btnType="success">
      success
    </Button>
    <Button disabled btnType="info">
      info
    </Button>
    <Button disabled btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```

```tsx
import React from 'react';
import { Button } from 'view-core';

export default () => (
  <div>
    <Button danger btnType="default">
      default
    </Button>
    <Button danger btnType="primary">
      primary
    </Button>
    <Button danger btnType="link" href="http://www.baidu.com">
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

export default () => (
  <div>
    <Button ghost btnType="default">
      default
    </Button>
    <Button ghost btnType="primary">
      primary
    </Button>
    <Button ghost btnType="success">
      success
    </Button>
    <Button ghost btnType="info">
      info
    </Button>
    <Button ghost btnType="link" href="http://www.baidu.com">
      link
    </Button>
  </div>
);
```
