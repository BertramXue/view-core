import React, { FC, useState, DragEvent, useContext } from 'react';
import { ConfigContext } from '../_util';
import classnames from 'classnames';

export interface IDraggerProps {
  className?: string;
  children?: React.ReactNode;
  onFile: (file: FileList) => void;
}

const Dragger: FC<IDraggerProps> = props => {
  const { className, children, onFile } = props;
  const [dragOver, setDragOver] = useState(false);
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('dragger');
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-dragover`]: dragOver,
  });
  const handleDrag = (evt: DragEvent<HTMLElement>, dragOver: boolean) => {
    evt.preventDefault();
    setDragOver(dragOver);
  };
  const handleDrog = (evt: DragEvent<HTMLElement>) => {
    evt.preventDefault();
    setDragOver(false);
    onFile(evt.dataTransfer.files);
  };
  return (
    <div
      className={classes}
      onDragOver={evt => {
        handleDrag(evt, true);
      }}
      onDragLeave={evt => {
        handleDrag(evt, false);
      }}
      onDrop={handleDrog}
    >
      {children}
    </div>
  );
};

Dragger.displayName = 'Dragger';
export default Dragger;
