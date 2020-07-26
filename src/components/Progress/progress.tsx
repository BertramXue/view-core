import React, { FC, useContext } from 'react';

import { ConfigContext } from '../_util';
import classnames from 'classnames';

export type ProgressThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IProgressProps {
  percent: number;
  className?: string;
  progressHeight?: number;
  showText?: boolean;
  style?: React.CSSProperties;
  theme?: ProgressThemeProps;
}

const Progress: FC<IProgressProps> = props => {
  const { percent, className, progressHeight, showText, style, theme } = props;

  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('progress');
  const classes = classnames(prefixCls, className);
  const outerClasses = `${prefixCls}-outer`;
  const innerClasses = classnames(`${prefixCls}-inner`, {
    [`${prefixCls}-inner-${theme}`]: theme,
  });

  return (
    <div className={classes} style={style}>
      <div className={outerClasses} style={{ height: `${progressHeight}px` }}>
        <div className={innerClasses} style={{ width: `${percent}%` }}>
          {showText && (
            <span className={`${prefixCls}-inner-text`}>{`${percent}%`}</span>
          )}
        </div>
      </div>
    </div>
  );
};

Progress.displayName = 'Progress';

Progress.defaultProps = {
  percent: 0,
  showText: true,
  progressHeight: 15,
  theme: 'primary',
};
export default Progress;
