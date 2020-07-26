import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { ConfigContext, generateTestId } from '../_util';

import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

export type IconThemeProps =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'info'
  | 'warning'
  | 'danger'
  | 'light'
  | 'dark';

export interface IIconProps extends FontAwesomeIconProps {
  prefixCls?: string;
  className?: string;
  theme?: IconThemeProps;
}

const Icon: FC<IIconProps> = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    theme,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('icon', customizePrefixCls);
  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${theme}`]: theme,
  });

  return (
    <FontAwesomeIcon
      data-testid={generateTestId('icon')}
      className={classes}
      {...restProps}
    />
  );
};

Icon.displayName = 'Icon';
export default Icon;
