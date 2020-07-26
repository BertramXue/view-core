import React, { FC, useState, useContext, useRef } from 'react';
import axios from 'axios';
import { ConfigContext } from '../_util';
import classnames from 'classnames';
import Button from '../Button';
import UploadList from './uploadList';
import Dragger from './dragger';

export type uploadFileStatus = 'ready' | 'uploading' | 'success' | 'error';

export interface IUploadFileInfo {
  uid: string;
  name: string;
  size: number;
  status?: uploadFileStatus;
  percent?: number;
  raw?: File;
  response?: any;
  error?: any;
}

export interface IUploadProps {
  className?: string;
  action: string;
  defaultFileList?: IUploadFileInfo[];
  children: React.ReactNode;
  beforeUpload?: (file: File) => boolean | Promise<File>;
  onChange?: (file: File) => void;
  onProgress?: (percent: number, file: File) => void;
  onSuccess?: (data: any, file: File) => void;
  onError?: (error: any, file: File) => void;
  onRemove?: (file: IUploadFileInfo) => void;
  fileName?: string;
  data?: { [key: string]: any };
  headers?: { [key: string]: any };
  withCredentials?: boolean;
  accept?: string;
  multiple?: boolean;
  drag?: boolean;
}

const Upload: FC<IUploadProps> = props => {
  const {
    className,
    action,
    defaultFileList,
    children,
    beforeUpload,
    onChange,
    onProgress,
    onSuccess,
    onError,
    onRemove,
    fileName,
    data,
    headers,
    withCredentials,
    accept,
    multiple,
    drag,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload');
  const classes = classnames(prefixCls, className);
  const fileSubmitInput = useRef<HTMLInputElement>(null);
  const [uploadFileList, setUploadFileList] = useState<IUploadFileInfo[]>(
    defaultFileList || [],
  );
  const handleClick = () => {
    const { current } = fileSubmitInput;
    if (current) {
      current.click();
    }
  };

  const handleUpdateFileList = (
    updateFile: IUploadFileInfo,
    updateObj: Partial<IUploadFileInfo>,
  ) => {
    setUploadFileList(prevList => {
      return prevList.map(file => {
        if (file.uid === updateFile.uid) {
          return { ...file, ...updateObj };
        } else {
          return file;
        }
      });
    });
  };

  const uploading = (file: File) => {
    const { name, size } = file;
    const _fileInfo: IUploadFileInfo = {
      uid: `${Date.now()}`,
      name,
      size,
      status: 'ready',
      percent: 0,
      raw: file,
    };
    setUploadFileList(prevList => {
      return [_fileInfo, ...prevList];
    });
    const formData = new FormData();
    formData.append(fileName || name, file);
    if (data) {
      Object.keys(data).forEach(key => {
        formData.append(key, data[key]);
      });
    }
    axios
      .post(action, formData, {
        headers: {
          ...headers,
          'Content-Type': 'multipart/form-data',
        },
        withCredentials,
        onUploadProgress: evt => {
          const { loaded, total } = evt;
          const percent = Math.round((loaded * 100) / total) || 0;
          handleUpdateFileList(_fileInfo, { percent, status: 'uploading' });
          if (percent < 100 && onProgress) {
            onProgress(percent, file);
          }
        },
      })
      .then(res => {
        const { data } = res;
        onChange && onChange(file);
        handleUpdateFileList(_fileInfo, { status: 'success', response: data });
        onSuccess && onSuccess(data, file);
      })
      .catch(error => {
        onChange && onChange(file);
        handleUpdateFileList(_fileInfo, { status: 'error', error });
        onError && onError(error, file);
      });
  };

  const handleUploadFiles = (files: FileList) => {
    const filesArray = Array.from(files);
    filesArray.forEach(file => {
      if (!beforeUpload) {
        uploading(file);
      } else {
        const result = beforeUpload(file);
        if (result && result instanceof Promise) {
          result.then(processFile => {
            uploading(processFile);
          });
        } else if (result) {
          uploading(file);
        }
      }
    });
  };

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;
    const { current } = fileSubmitInput;
    if (!files) {
      return;
    }
    handleUploadFiles(files);
    if (current) {
      current.value = '';
    }
  };

  const handleRemove = (file: IUploadFileInfo) => {
    setUploadFileList(prevList => {
      return prevList.filter(item => item.uid !== file.uid);
    });
    onRemove && onRemove(file);
  };

  return (
    <div className={classes}>
      <div style={{ display: 'inline-block' }} onClick={handleClick}>
        {drag ? (
          <Dragger
            onFile={files => {
              handleUploadFiles(files);
            }}
          >
            {children}
          </Dragger>
        ) : (
          children
        )}
        <input
          style={{ display: 'none' }}
          type="file"
          ref={fileSubmitInput}
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
        />
      </div>
      <UploadList fileList={uploadFileList} onRemove={handleRemove} />
    </div>
  );
};

Upload.displayName = 'Upload';
Upload.defaultProps = {
  defaultFileList: [],
  children: <Button btnType="default">点击上传</Button>,
  drag: false,
};
export default Upload;
