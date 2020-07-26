import React, { FC, useContext } from 'react';
import classnames from 'classnames';
import { MenuContext } from './menu';

import { ConfigContext } from '../_util';

export interface IMenuItemProps {
  index: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const MenuItem: FC<IMenuItemProps> = props => {
  const context = useContext(MenuContext);
  const { index, disabled, className, style, children } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('menu-item');
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-disabled`]: disabled,
    [`${prefixCls}-active`]: index && index === context.index,
  });
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      context.onSelect(index);
    }
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.displayName = 'MenuItem';
export default MenuItem;
