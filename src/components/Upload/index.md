---
nav:
  title: Components
  path: /components
---

## Upload

Demo:

```tsx
import React from 'react';
import { Upload } from 'view-core';

const handleBeforeUplaod = file => {
  const size = file.size / 1024;
  console.log(`${size}Kb`);
  return true;
};

const handleProgress = (percent, file) => {
  console.log(`${file.name} --- ${percent}%`);
};

const handleSucess = (data, file) => {
  console.log(`${file.name} upload success`);
};

const handleError = (data, file) => {
  console.log(`${file.name} upload error`);
};

const defaultFileList = [
  {
    uid: Date.now() + '' + Math.random(),
    name: 'test.js',
    size: 1024,
    status: 'ready',
    percent: 50,
  },
  {
    uid: Date.now() + '' + Math.random(),
    name: 'index.ts',
    size: 1024,
    status: 'uploading',
    percent: 50,
  },
  {
    uid: Date.now() + '' + Math.random(),
    name: 'index.js',
    size: 2048,
    status: 'success',
    percent: 100,
  },
  {
    uid: Date.now() + '' + Math.random(),
    name: 'jest.js',
    size: 2048,
    status: 'error',
    percent: 30,
  },
];

const handleRemove = file => {
  console.log(file.name);
};

export default () => (
  <Upload
    action="'https://jsonplaceholder.typicode.com/posts"
    defaultFileList={defaultFileList}
    beforeUpload={handleBeforeUplaod}
    onProgress={handleProgress}
    onSuccess={handleSucess}
    onError={handleError}
    onRemove={handleRemove}
    fileName={'file'}
    data={{ key: 'val' }}
    headers={{ 'X-Power-By': 'view-core' }}
    accept={'.mp4'}
    multiple
  />
);
```

```tsx
import React from 'react';
import { Upload, Icon } from 'view-core';

const handleBeforeUplaod = file => {
  const size = file.size / 1024;
  console.log(`${size}Kb`);
  return true;
};

const handleProgress = (percent, file) => {
  console.log(`${file.name} --- ${percent}%`);
};

const handleSucess = (data, file) => {
  console.log(`${file.name} upload success`);
};

const handleError = (data, file) => {
  console.log(`${file.name} upload error`);
};

const handleRemove = file => {
  console.log(file.name);
};

export default () => (
  <Upload
    action="'https://jsonplaceholder.typicode.com/posts"
    beforeUpload={handleBeforeUplaod}
    onProgress={handleProgress}
    onSuccess={handleSucess}
    onError={handleError}
    onRemove={handleRemove}
    drag
  >
    <Icon icon="upload" size="5x" theme="secondary" />
    <br />
    <p>Drag file over to upload</p>
  </Upload>
);
```
