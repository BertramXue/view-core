---
nav:
  title: Components
  path: /components
---

## Upload

文件选择上传和拖拽上传控件。

## 何时使用

上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。

- 当需要上传一个或一些文件时。
- 当需要展现上传的进度时。
- 当需要使用拖拽交互时。

## 代码演示

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

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |
| action | 上传的地址 | string \| (file) => Promise | - |  |
| method | 上传请求的 http method | string | `post` |  |
| beforeUpload | 上传文件之前的钩子，参数为上传的文件，若返回 `false` 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，resolve 时开始上传（ resolve 传入 `File` 或 `Blob` 对象则上传 resolve 传入对象）。**注意：IE9 不支持该方法** | (file, fileList) => boolean \| Promise | - |  |
| data | 上传所需额外参数或返回上传额外参数的方法 | object\|(file) => object \| Promise&lt;object> | - |  |
| defaultFileList | 默认已经上传的文件列表 | object\[] | - |  |
| disabled | 是否禁用 | boolean | false |  |
| fileList | 已经上传的文件列表（受控），使用此参数时，如果遇到 `onChange` 只调用一次的问题，请参考 [#2423](https://github.com/ant-design/ant-design/issues/2423) | object\[] | - |  |
| headers | 设置上传的请求头部，IE10 以上有效 | object | - |  |
| multiple | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件 | boolean | false |  |
| name | 发到后台的文件参数名 | string | `file` |  |
| previewFile | 自定义文件预览逻辑 | (file: File \| Blob) => Promise<dataURL: string> | - |  |
| showUploadList | 是否展示文件列表, 可设为一个对象，用于单独设定 `showPreviewIcon`, `showRemoveIcon`, `showDownloadIcon`, `removeIcon` 和 `downloadIcon` | boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean, removeIcon?: React.ReactNode, downloadIcon?: React.ReactNode } | true |  |
| withCredentials | 上传请求时是否携带 cookie | boolean | false |  |
| onChange | 上传文件改变时的状态，详见 [onChange](#onChange) | function | - |  |
| onPreview | 点击文件链接或预览图标时的回调 | function(file) | - |  |
| onRemove   | 点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除               | function(file): boolean \| Promise | -   |  |
| onDownload | 点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页 | function(file): void | (跳转新标签页) |  |
| progress | 自定义进度条样式 | [ProgressProps](/components/progress/#API) ( 仅支持 `type="line"` ) | { strokeWidth: 2, showInfo: false } | 4.3.0 |
