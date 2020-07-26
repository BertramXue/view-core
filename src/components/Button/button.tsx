import React, {
  FC,
  ButtonHTMLAttributes,
  AnchorHTMLAttributes,
  useContext,
} from 'react';
import classnames from 'classnames';
import { ConfigContext, generateTestId } from '../_util';

export type ButtonSize = 'lg' | 'sm';
export type ButtonNativeType = 'button' | 'submit' | 'reset';
export type ButtonType = 'default' | 'primary' | 'info' | 'success' | 'link';

interface IBaseButtonProps {
  prefixCls?: string;
  className?: string;
  disabled?: boolean;
  danger?: boolean;
  ghost?: boolean;
  btnType?: ButtonType;
  nativeType?: ButtonNativeType;
  size?: ButtonSize;
  children?: React.ReactNode;
}

interface IAnchorButtonProps {
  href: string;
  target?: string;
}

type NativeButtonProps = IBaseButtonProps & ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = IBaseButtonProps &
  IAnchorButtonProps &
  AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: FC<ButtonProps> = props => {
  const {
    prefixCls: customizePrefixCls,
    className,
    btnType,
    nativeType,
    size,
    danger,
    ghost,
    disabled,
    children,
    href,
    target,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  const prefixCls = getPrefixCls('button', customizePrefixCls);
  const classes = classnames(prefixCls, className, {
    [`${prefixCls}-${btnType}`]: btnType,
    [`${prefixCls}-${size}`]: size,
    [`${prefixCls}-link-disabled`]: btnType === 'link' && disabled,
    [`${prefixCls}-ghost`]: ghost,
    [`${prefixCls}-danger`]: danger,
  });
  if (btnType === 'link') {
    return (
      <a className={classes} href={href} target={target} {...restProps}>
        {children}
      </a>
    );
  }
  return (
    <button
      className={classes}
      disabled={disabled}
      type={nativeType}
      {...restProps}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
Button.defaultProps = {
  btnType: 'default',
  nativeType: 'button',
};

export default Button;
