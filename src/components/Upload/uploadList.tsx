import React, { FC, useContext } from 'react';
import { IUploadFileInfo } from './upload';
import Icon from '../Icon';
import { ConfigContext } from '../_util';
import Progress from '../Progress';

export interface IUploadListProps {
  fileList: IUploadFileInfo[];
  onRemove: (file: IUploadFileInfo) => void;
}

const UploadList: FC<IUploadListProps> = props => {
  const { fileList, onRemove } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('upload-list');

  return (
    <ul className={prefixCls}>
      {fileList.map(file => {
        const { uid, name, size, percent, status } = file;
        return (
          <li className={`${prefixCls}-item`} key={uid}>
            <span
              className={`${prefixCls}-item-file ${prefixCls}-item-file-${status}`}
            >
              <Icon icon="file-alt" /> {name}
            </span>
            <span className={`${prefixCls}-item-icon`}>
              {(status === 'uploading' || status === 'ready') && (
                <Icon icon="spinner" spin theme="primary" />
              )}
              {status === 'success' && (
                <Icon icon="check-circle" theme="success" />
              )}
              {status === 'error' && (
                <Icon icon="times-circle" theme="danger" />
              )}
            </span>
            <span className={`${prefixCls}-item-action`}>
              <Icon
                icon="times"
                onClick={() => {
                  onRemove(file);
                }}
              />
            </span>
            {status === 'uploading' && <Progress percent={percent || 0} />}
          </li>
        );
      })}
    </ul>
  );
};

UploadList.displayName = 'UploadList';
export default UploadList;
