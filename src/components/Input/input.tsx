import React, { FC, useContext, InputHTMLAttributes } from 'react';
import classnames from 'classnames';
import { ConfigContext } from '../_util';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import Icon from '../Icon';

export type InputSize = 'lg' | 'sm';

export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  className?: string;
  style?: React.CSSProperties;
  /** 是否禁用 Input */
  disabled?: boolean;
  /** 设置 input 大小，支持 lg 或者是 sm */
  size?: InputSize;
  /** 添加图标，在右侧悬浮添加一个图标，用于提示 */
  icon?: IconProp;
  /** 添加前缀 用于配置一些固定组合 */
  prepend?: string | React.ReactElement;
  /** 添加后缀 用于配置一些固定组合 */
  append?: string | React.ReactElement;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IInputProps> = props => {
  const {
    className,
    style,
    size,
    icon,
    disabled,
    prepend,
    append,
    onChange,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('input');
  const comtainerClass = classnames(`${prefixCls}-container`, className, {
    [`${prefixCls}-size-${size}`]: size,
    [`${prefixCls}-group`]: prepend || append,
    [`${prefixCls}-group-prepend`]: !!prepend,
    [`${prefixCls}-group-append`]: !!append,
  });
  const classes = classnames(prefixCls);
  const fixControlledValue = (value: any) => {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }
    return value;
  };
  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }
  return (
    <div className={comtainerClass} style={style}>
      {prepend && <div className={`${prefixCls}-prepend`}>{prepend}</div>}
      <div className={`${prefixCls}-wrapper`}>
        {icon && (
          <div className={`${prefixCls}-icon`}>
            <Icon icon={icon} title={`${icon}`} />
          </div>
        )}
        <input
          className={classes}
          onChange={onChange}
          disabled={disabled}
          {...restProps}
        />
      </div>
      {append && <div className={`${prefixCls}-append`}>{append}</div>}
    </div>
  );
};

Input.displayName = 'Input';

Input.defaultProps = {
  disabled: false,
};
export default Input;
